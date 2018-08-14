import React, { Component } from 'react';
import withAuth from './../hoc/withAuth';
import { Helmet } from 'react-helmet';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    head() {
        return (
            <Helmet bodyAttributes={{class: "dashboardPage"}}>
                <title>Dashboard - React Starter Kit</title>
            </Helmet>
        );
    }

    render() {

        return (
            <section className="content_block dashboard">
                {this.head()}
                <div className="grid">

                    <div className="column column_12_12">
                        <div className="content_wrap">
                            <div className="title">What is Lorem Ipsum?</div>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                    <div className="column column_4_12">
                        <div className="content_wrap">
                            <div className="title">What is Lorem Ipsum?</div>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                    <div className="column column_4_12">
                        <div className="content_wrap">
                            <div className="title">What is Lorem Ipsum?</div>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                    <div className="column column_4_12">
                        <div className="content_wrap">
                            <div className="title">What is Lorem Ipsum?</div>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                </div>


            </section>
        );

    }

}

export default withAuth(session => session && session.getCurrentUser)(Dashboard);