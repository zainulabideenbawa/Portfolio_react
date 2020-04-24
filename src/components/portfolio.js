import React, { Component } from 'react'

import Data from './data.json'


const data = Data.Data
const projects = data.portfolio


const details = projects.map((element, key) => {
    return (
        <div className="row project-card" data-toggle="modal" data-target="#portfolioModal1" data-portfolio-tag="web-sites">
            <div className="col-md-6 col-lg-5 project-card__img">
                <img className="lazy" src={`/img/${element.photo}`} data-src={`/img/${element.photo}`} alt="project-img" />
            </div>
            <div className="col-md-6 col-lg-7 project-card__info">
                <h3 className="project-card__title">{element.title}</h3>
                <p className="project-card__description">
                    {element.description}
                </p>
                <p className="project-card__stack">Used stack:</p>
                <ul className="tags">
                    {element.tech.map((post) =>
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )}
                </ul>


                <a href="https://pwa-techniques.firebaseapp.com" target="_blank" className="project-card__link" rel="noopener">PWA-Techniques.com</a>
            </div>
        </div >
    )

});


export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="container section">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 id="portfolio_header" className="section__title">My projects_</h2>
                        </div>
                    </div>
                    <div className="row portfolio-menu">
                        <div className="col-md-12">
                            <nav>
                                {/* <ul>
                                    <li><a href="#" data-portfolio-target-tag="all">all</a></li>
                                    <li><a href="#" data-portfolio-target-tag="mobile apps">mobile apps</a></li>
                                    <li><a href="#" data-portfolio-target-tag="web-sites">web-sites</a></li>
                                    <li><a href="#" data-portfolio-target-tag="landing-pages">landing pages</a></li>
                                </ul> */}
                            </nav>
                        </div>
                    </div>
                    <div className="portfolio-cards">
                        {details}

                    </div>

                </section>
            </div >
        )
    }
}
