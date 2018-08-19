import 'babel-polyfill';
import 'isomorphic-unfetch';
require('dotenv').config({path: 'variables.env'});
import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import webConfig from './webConfig';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import mongoose from 'mongoose';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import { Helmet } from 'react-helmet';
import fileUpload from 'express-fileupload';
import randomstring from 'randomstring';

import AppComponent from './src/app';
import HTML from './src/helpers/renderer';

import { typeDefs } from './src/schema';
import { resolvers } from './src/resolvers';
import User from './src/models/User';

// Connect MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true }).then(() => {
    console.log('Connection to DB successful');
}).catch(err => {
    console.log(`Connection to DB Error: ${err}`);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: `${webConfig.siteURL}`,
    credentials: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/", express.static("build/public"));

app.get('/user-uploads/:file', function(req, res){

    const file_name = req.params.file;
    const get_file = path.resolve('./user-uploads/profile-images/' + req.params.file);
    const current_files = fs.readdirSync('./user-uploads/profile-images/');
    const fileExists = current_files.includes(file_name);

    if(fileExists){
        res.status(200).sendFile(get_file);
    }else{
        res.status(404).send('No File Found!');
    }
    
});

// JWT Middelware 
app.use(async (req, res, next) => {

  const token = req.cookies.token ? req.cookies.token : null;
  if(token !== null){
      try{
          const currentUser = await jwt.verify(token, process.env.JWT_SECRET);
          req.currentUser = currentUser;
      }catch(err){
        //   console.error(err);
          res.clearCookie('token');
      }
  }
  next();
});

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// create Graphiql app
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

// connect schema with graphql
app.use('/graphql',
    bodyParser.json(),
    graphqlExpress(({ currentUser }) => ({
        schema,
        context: {
            User,
            currentUser
        }
    }))
);

app.get(['*/:param', '*'], (req, res) => {

    const URL_Param = req.params.param ? req.params.param : null;

    const client = new ApolloClient({
        ssrMode: true,
        // Remember that this is the interface the SSR server will use to connect to the
        // API server, so we need to ensure it isn't firewalled, etc
        link: createHttpLink({
          uri: `${webConfig.siteURL}/graphql`,
          credentials: 'same-origin',
          headers: {
            cookie: req.header('Cookie'),
          },
        }),
        cache: new InMemoryCache(),
      });
    
      const context = {
        URL_Param
      };
    
      // The client-side App will instead use <BrowserRouter>
      const App = (
        <ApolloProvider client={client}>
          <StaticRouter location={req.url} context={context}>
            <AppComponent />
          </StaticRouter>
        </ApolloProvider>
      );

      // Handle queries etc.. before sending raw html
      getDataFromTree(App).then(() => {

        const content = ReactDOM.renderToString(App);
        const helmet = Helmet.renderStatic();
        
        const initialState = client.extract();
        const html = <HTML content={content} state={initialState} helmet={helmet} />;
      
        res.status(200);
        res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
        res.end();

      });

});

app.post('/password-reset', (req, response) => {

    var mailer = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        auth: {
            user: process.env.NODEMAILER_AUTH_USER,
            pass: process.env.NODEMAILER_AUTH_PW
        }
    });

    mailer.use('compile', hbs({
        viewPath: 'build/public/assets/email_templates',
        extName: '.hbs'
    }));

    mailer.sendMail({
        from: process.env.NODEMAILER_FROM_EMAIL,
        to: req.body.email,
        subject: 'React Starter Kit - Password Reset',
        template: 'passwordReset',
        context: {
            email: req.body.email,
            password: req.body.generatedPassword
        }
    }, function(err, res){
        if(err){
            // console.log(err)
            return response.status(500).send('500 - Internal Server Error')
        }
        response.status(200).send('200 - The request has succeeded.') 
    });

});

app.use(fileUpload());
const getFileType = (fileType) => {
    let ext;
    if(fileType == 'image/jpeg'){
        ext = '.jpg';
    }else if(fileType == 'image/png'){
        ext = '.png';
    }
    return ext;
}

app.post('/upload', function(req, res) {
    
    if (!req.files) return res.status(400).send('No files were uploaded.');

      var current_files = fs.readdirSync('./user-uploads/profile-images/');
      let profilePic = req.files.selectedFile;
      let file_ext = getFileType(profilePic.mimetype);
      let tempFileName = randomstring.generate(21) + file_ext;

      const fileExists = current_files.includes(tempFileName);
    
      while (fileExists) {
          let string = randomstring.generate(21);
          tempFileName = string + file_ext;
  
          if (!current_files.includes(tempFileName)) {   
              break;
          } 

      }
    
    let send_filePath = './user-uploads/profile-images/' + tempFileName;
    
    profilePic.mv(send_filePath, function(err) {
        
      if (err) return res.status(500).send(err);
        
      const res_dataObj = {
          "newFileName": tempFileName
      }

      res.send(res_dataObj);
      
    });

  });


app.listen(PORT, () => console.log(`App running on port ${PORT}`));
