import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
    return (
        <Helmet bodyAttributes={{class: "faqPage"}}>
            <title>FAQ - React Starter Kit</title>
        </Helmet>
    );
}

const FAQ = () => (
    <section className="content_block faq">
    {head()}
        
        <div className="grid">
            
            <div className="column column_12_12">
                <div className="content_wrap noBoarder">
                    <div className="title">FAQ</div>
                    <p className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

            <div className="column column_12_12">
                <div className="content_wrap noBoarder">
                    <div className="title">Quick answers:</div>
                    <ul className="showList">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Morbi vel sem ornare tellus semper aliquet.</li>
                        <li>Maecenas ullamcorper elit a purus rhoncus aliquam.</li>
                    </ul>
                </div>
            </div>

        </div>

    </section>
);

export default FAQ;