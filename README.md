# Open Source Universal User Registration System – NodeJS React Apollo GraphQL JWT MongoDB

<p align="center">
    <img src="http://git-assets.react-starter-kit.com/logo.png">  
</p>

[![Build Status](https://travis-ci.org/simpletut/Universal-React-Apollo-Registration.svg?branch=master)](https://travis-ci.org/simpletut/Universal-React-Apollo-Registration) [![GitHub](https://img.shields.io/github/license/simpletut/Universal-React-Apollo-Registration.svg)](https://github.com/simpletut/Universal-React-Apollo-Registration/blob/master/LICENSE)

### [Online Demo](https://react-user-registration.herokuapp.com/signup)

As the Demo is hosted on a free Heroku account, the servers its hosted on enter ‘sleep mode’ when not in use. If you notice a delay, please allow a few seconds for the servers to wake up.

### YouTube Video Tutorials

##### Introduction (Getting started)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=11C_TDB3Ijw" target="_blank">
	<img src="http://img.youtube.com/vi/11C_TDB3Ijw/0.jpg" width="240" height="180" />
</a>

### System includes:


Registration, Login, Dashboard, Email Password, Logout

Account Update, Edit User Profile

Browse Users, Public Profile Pages

Cookie Policy, Privacy Policy, T&C’s, FAQ

404 (Not Found)


The User Registration System is <strong>Fully Responsive</strong> out the box and you can <strong>Restrict Access</strong> to any page!

### Tech Stack:

* NodeJS
* React 
* Server-side Rendered
* Apollo Client
* GraphQL
* MongoDB
* JSON Web Tokens
* Webpack
* SASS

### Top Features:

* Bcrypt password encryption/verification
* CKEditor - WYSIWYG editor 
* File Upload – Profile Images
* Nodemailer – Custom mail server used to send password reset emails
* Custom ‘Password Reset’ Template (Built with MJML Framework)
* Multiple Layouts – Create unlimited layouts for pages/routes
* Toastr - Simple javascript toast notifications
* 100% FREE & Open Source

### Screenshot

<p align="center">
    <img src="http://git-assets.react-starter-kit.com/user-registration/UserRegDemo.jpg">  
</p>

## Table of Contents

- [YouTube Video Tutorials](#youtube-video-tutorials)
- [System includes](#system-includes)
- [Tech Stack](#tech-stack)
- [Top Features](#top-features)
- [Screenshot](#screenshot)
- [Software](#software)
- [Useful links](#useful-links)
- [Top Features](#top-features)
- [Screenshot](#screenshot)
- [Project architecture](#project-architecture)
- [Download & Install Dependencies on your machine](#download--install-dependencies-on-your-machine)
- [Configure Webpack](#configure-webpack)
- [Set-up MongoDB](#set-up-mongodb-setting-up-your-database)
- [Adding a User to your database](#adding-a-user-to-your-database)
- [Connecting our Registration System to our Database](#connecting-our-registration-system-to-our-database)
- [Configuring our Registration System to Connect to our Database](#configuring-our-registration-system-to-connect-to-our-database)
- [JSON Web Tokens](#json-web-tokens)
- [Mail Server (Send password recovery email)](#mail-server-send-password-recovery-email)
- [Run a Build](#run-a-build)
- [Lunch/Run the project](#lunchrun-the-project)
- [Server & Client Bundles](#server--client-bundles)
- [Unit tests](#unit-tests)
- [Create new pages](#create-new-pages)
- [Restrict Access (Authenticated Users Only)](#restrict-access-authenticated-users-only)
- [Custom Layouts](#custom-layouts)
- [Custom Page titles and SEO](#custom-page-titles-and-seo)
- [12 Col Grid Boiler template](#12-col-grid-boiler-template)
- [Acknowledgements](#acknowledgements)
- [License](#license)


## Getting Started

This repository contains the source code for User Registration System. This documentation will cover the installation on your localhost machine, project architecture and working with the app in general.

## Project architecture

For a detailed guide through the project architecture and more information on configuring and deploying the system, please watch our YouTube Video Tutorial (Please scroll to the top ^)


```
├── src
│   ├──_test_
│   ├──assets
│   |  ├── email_templates
│   |  ├── graphics
│   |  └── scss
│   ├──components
│   |  ├── auth
|   |  |   └── editProfile_mutations
│   |  ├── footer
│   |  ├── header
│   |  └── sidebar
│   ├── helpers
|   |   └── renderer
│   ├── hoc
|   |   ├── withAuth
|   |   └── withSession
│   ├── layouts
|   |   └── mainLayout
│   ├── models
|   |   └── User
│   ├── pages
|   |   ├── auth
|   |   |   ├── editProfile
|   |   |   ├── forgotPassword
|   |   |   ├── signIn
|   |   |   ├── signOut
|   |   |   ├── signUp
|   |   |   └── updateAccount
|   |   ├── policiesAndConditions
|   |   |   ├── cookiePolicy
|   |   |   ├── faq
|   |   |   ├── privicyPolicy
|   |   |   └── terms
|   |   ├── 404
|   |   ├── dashboard
|   |   ├── user
|   |   └── users
│   ├── queries
|   |   └── index
│   ├── app
│   ├── client
│   ├── resolvers
│   └── schema
├── user-uploads
│   └── profile-images
├── package.json
├── server.js
├── variables.env
├── webConfig.json
├── webpack.client.js
└── webpack.server.js
```

## Software 

Before proceeding, please ensure you have the following software installed on your computer.

* Node
* Yarn (optional but recommended)
* Git command line tools

### Useful links

* Download Git CLT - Windows: https://git-scm.com/download/windows Mac: https://git-scm.com/download/mac
* Download Node - https://nodejs.org/en/
* Download Yarn CLT - https://yarnpkg.com/lang/en/docs/install/
* Download VSCode - https://code.visualstudio.com/

## Installation

Please fork a copy of this repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Alternatively download or clone the master branch.

### Download & Install Dependencies on your machine 

1)	Clone the repo to your machine 

```
git clone <CloneURL>
```

2)	Within terminal or cmd ensure you have navigated inside the cloned directory and install the dependencies

```
cd <new-dir> 
yarn install OR npm install
```

### Configure Webpack

Before we can build, run or deploy our app it is important to ensure that the 'webConfig.json' file is configured correctly for our environment. 

```
{
    "siteURL": "http://localhost:3000",
    "environment": "development"
}
```

Please ensure that 'siteURL' is set to either localhost or your websites domain. You must update this before running a build or deploying your web app.

In the same way, set ‘environment’ to either ‘development’ or ‘production’. This will change the way webpack compiles your code.


### Set-up MongoDB (Setting up your database)

This web app uses MongoDB to save, query and process data. Whilst you may have a preference of your service provider (AWS, Microsoft Azure etc…) we will be using ‘mlab’.

Please visit ‘mlab’ register/login to your account.

Link- https://mlab.com/

1)	From your control panel select ‘Create new’
2)	Choose any of the Cloud Provider’s
3)	Select the appropriate ‘Plan Type’ for you. For now, let’s select the ‘Free’ plan
4)	Click Continue 
5)	Select the ‘Region’ that’s closest to your location and click continue 
6)	Enter a new database name and click continue
7)	Confirm your selections and click ‘Submit order’ (Free)

The database will now be created, and you will have been redirected back to your dashboard.

### Adding a User to your database

1)	Under ‘MongoDB Deployments’ click on the database you just created
2)	Select ‘Users’
3)	Select ‘Add database users’
4)	Enter a Username and Password and click ‘Create’

Please remember this information as we will need it later.


### Connecting our Registration System to our Database

We need a ‘connection string’ provided by ‘mlab’ to link our Registration System with our Database. 

Please ensure that you are still navigated inside the database you just created.

It looks something like this:

```
To connect using a driver via the standard MongoDB URI:

mongodb://<dbuser>:<dbpassword>@...

```
Copy this URL as we will need it later.


### Configuring our Registration System to Connect to our Database

1)	Open the project folder within your chosen text editor
2)	Open the ‘variables.env’ file
3)	Paste the connection string obtained from ‘mlab’ into the variable ‘DB_CONNECTION_STRING’

```
DB_CONNECTION_STRING = mongodb://<dbuser>:<dbpassword>@...
```
4)	Update ‘<dbuser>’ & ‘<dbpassword>’ with the Username and Password of the User we created and added to the database earlier.

```
DB_CONNECTION_STRING = mongodb://myusername:mypassword@...
```

### JSON Web Tokens

We store a JSON Web Token within a Cookie to verify users.

For security reasons, these Tokens have been configured to expire after 1 hour at which point the user will be asked to login again before continue browsing the website. (The expiration time can be updated within the signup and login resolvers).

Whenever we check the validity of a Token, we compare it will a ‘Secret Key’ that is configured within the ‘variables.env’ file. 

As this is an open source project which means that it is you should change the default ‘Secret Key’.

To update, simple open the ‘variables.env’ file and change the ‘JWT_SECRET’ variable to your own random string of numbers and characters. Whilst this should literally be any random string of numbers and letters, we recommend keeping a similar length to the existing key.


### Mail Server (Send password recovery email)

We use a package called ‘Nodemailer’ to handle the sending of emails from our Node Server.

As we are using one-way password encryption, the account recovery tool automatically generates a new secure password and sends it to the email associated with the account.

Before you can use this feature, you will need to configure ‘Nodemailer’.

1)	Open ‘variables.env’ in your chosen text editor
2)	Update the following variables to connect with your mail server:

```
NODEMAILER_HOST = <mail_server_host>
NODEMAILER_AUTH_USER = <mail_server_username>
NODEMAILER_AUTH_PW = <mail_server_password>
NODEMAILER_FROM_EMAIL = <mail_server_from_email>
```

Please note: You may need to contact your provider for this information

#### Use Gmail

If you do not have a mail server and would like to use Google Gmail, please follow these steps.

1)	Open ‘Server.js’
2)	Find the following block of code:

```
var mailer = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    auth: {
        user: process.env.NODEMAILER_AUTH_USER,
        pass: process.env.NODEMAILER_AUTH_PW
    }
});
```

3)	Change ‘host:’ to ‘service:’
4)	 Change ‘NODEMAILER_HOST’ to ‘NODEMAILER_SERVICE’
5)	Save & Close ‘server.js’
6)	Return to ‘variables.env’ and enter your Gmail Username & Password for the two AUTH parameters (NODEMAILER_AUTH_USER & NODEMAILER_AUTH_PW)
7)	Ensure ‘NODEMAILER_FROM_EMAIL’ is set to your Gmail email address 

Done!


### Run a Build

Before we can lunch the project, we need to run a build

```
yarn run build OR npm run build 
```

### Lunch/Run the project

Now we have a build, lets run the project

```
yarn run dev OR npm run dev 
```

Your project is now running on: http://localhost:3000


### Server & Client Bundles

Webpack outputs both a Server and Client bundle.

For security reasons, the server bundle exits outside of the public directory, which means that the file is NOT publicly accessible.

Webpack is also configured not to bundle any libraries that exist in the 'node_modules' folder into the server bundle as they are not needed.


### Unit tests

Writing unit tests is recommended for any new features or logic that you develop.

Whilst we are primarily using 'Jest' (framework from Facebook), to write our unit tests we are using a number of other libraries for testing. Please see the 'package.json' file for more information.

We are currently writing tests for the following:

- Components
- Queries
- Mutations

There are two commands you can use to run tests. 

1. yarn test OR npm test

-	This will run your initial tests.

2. yarn test-coverage OR npm test-coverage

-	 Shows test coverage across our application.

Please note: not all code within our project requires testing or is testable.

#### Test file Structure

All unit tests are housed within the 'src/_test_' directory. We have replicated the same file structure as our main application, however test files have '.test' appended to them.

#### When should I run these tests?

You should run these unit tests before pushing any work to a remote branch. Please do not approve any PR’s into the dev branch without the proper unit tests having been written.

In the event a test fails, please ensure any relevant errors are resolved prior to committing the changes or creating a new PR.


## General usage 

### Create new pages

1)	Create a file in the following directory ‘src/pages’ 

To help maintain consistence please use the same naming conventions as the other files. (camel casing) 


2)	Build your new page. For example:

```
import React from 'react';

class NewPage extends React.Component {
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default NewPage;

```

3)	Open ‘src/app.js’ and import your new Page Component 

```
import NewPage from './pages/newPage;
```

4)	Add a new route to the Root constant

```
<Route path="/new-page" render={props => (
    <MainLayout>
        < NewPage {...props} session={session} />
    </MainLayout>
)} />

```

Based on the example above, you can visit the new page via the following URL:

http://localhost:3000/new-page



### Restrict Access (Authenticated Users Only)

Follow these steps to prevent unauthenticated users from accessing your chosen pages/routes

1)	Open ‘src/app.js’ and find your chosen route within the ‘Root’ constant
2)	If not already pass the ‘session’ as props to your Component

```
<Route path="/dashboard" render={props => (
    <MainLayout>
        <Deshboard {...props} session={session} />
    </MainLayout>
)} />

```

Notice the ‘session={session}’ on the ‘Deshboard’ Component. 

3)	Open you’re the JS file accociated with your Chossen Compoent. For example, ‘src/pages/dashboard.js’
4)	Import ‘withAuth’. This is a higher order component.

```
import withAuth from './../hoc/withAuth';
```
Please ensure that the path is correct based on your component file.

5)	Wrap your export with our our ‘withAuth’ higher order component. 

```
export default withAuth(session => session && session.getCurrentUser)(Dashboard);
```

Please note: If you copy/paste this line, please ensure you update ‘Dashboard’ with the name of the Class your exporting.


That’s it! 

User will now need to LogIn before accessing this page/route



### Custom Layouts 

You can create a custom layout for any page/route.

1)	Create a new layout file within ‘src/layouts’
2)	Ensure you have a constructer at the top of your class

```
constructor(props) {
    super(props)
}

```

3)	Place the following code within your layout, wherever you want to render your routes

```
{this.props.children}
```

4)	Open ‘src/app.js’ and import your new layout 

```
import LayoutComponent from './layouts/ layoutComponent;
```

5)	Within your ‘Root’ constant, create your new route and wrap the route with your layout Component 

```
<Route path="/my-new-page" render={props => (
    < LayoutComponent >
        <MyRoute {...props} session={session} />
    </ LayoutComponent>
)} />
```

### Custom Page titles and SEO

We use a package called ‘helmet’ to set custom page titles and add meta tags on pages within our app.

1)	Open the page component you wish to add custom page title
2)	Copy the following code just above the render method:

```
head() {
    return (
        <Helmet bodyAttributes={{ class: "myClassName" }}>
            <title>My new page title</title>
        </Helmet>
    );
}
```

3)	Call this method anywhere within your return statement

```
render() {

    return (
        <div className="grid pageHeaderSection">
        {this.head()}
            <div className="column column_12_12">
                <div className="content_wrap">
                    <h2>Users</h2>
                    <p className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting…
```


## Styles

We are using SCSS (CSS pre-processor/bracketed version of SASS) to enable us to write cleaner and more reusable css code.

Our main 'styles.scss' is compiled upon each save, once the project has been started from your terminal/cmd. Whilst the resulting 'styles.css' is the only 'css' called from within the project, the 'scss' version simply contains imports to the partial files created within folders.

## CSS

In order to ensure the integrity of the project and long-term maintainability, we recommend the following rules:

- Media queries should be written/maintained within '_responsive.scss'.
- REM CSS measurement units:

We are using rem's to style our app. Whilst you should not use any other measurement unit, it is correct to use ‘px’ for certain properties. For example, you should still use 'px' for setting a border or the width of a media query to ensure more accurate break points.

The root font size is set to '10px'. This means the calculation required to implement rem’s is simple: (target font size / 10 OR 18 / 10 = 1.8rem).

#### 'config.js' 

Please utilize our configuration partial file wherever possible. This contains global variables for generic/brand colours, keyframes, mixins and more! For consistency please reference these instead of redefining where possible (or add to this file).

## 12 Col Grid Boiler template
 
We are using a 12 Column Grid that works as follows:
 
The grid has 12 columns
 
Each columns width is a % value that can be calculated using the following:

```
Target Columns (Example '6')
Minus Number of Total Columns (12)
Times 100 = 50%
```

Example HTML mark-up for a 2-column layout:

```
<div class="grid">
 
  <div class="column column_6_12">
    Half
  </div>
  
  <div class="column column_6_12">
    Half
  </div>
 
<div>
```
 
Each column has a ‘20px’ gutter/ Each column has 10px padding on either side.

The grid should not be used within areas that require custom mark-up (such as your header/footer) to avoid having to override default styling. This will ensure the integrity of the code. Please DO NOT apply any styling to the grid directly. These should be global classes which are not overridden (ensures you will not break styling in other places).

To centre your content, simply apply a 'max-width' to the parent wrapper '.grid'. You can either set this globally within the '_css_grid.scss' partial file or target it specifically via a custom parent class.


## Looking for something similar?

[Open Source Universal React Redux Boilerplate](https://github.com/simpletut/React-Starter-Kit)

## Acknowledgements

This software was developed by Ashley Bibizadeh.

## License

The User Registration System is open source software licensed as MIT.
