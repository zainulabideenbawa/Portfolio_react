import React, { Component } from 'react'

import Data from './data.json'

const data = Data.Data

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="background" style={{ backgroundColor: "#24ACB4" }}>
                    <div id="contact" className="container section">
                        <div className="row">
                            <div className="col-md-12">
                                <p id="contacts_header" className="section__title">Get in touch_</p>
                            </div>
                        </div>
                        <div className="row contacts">
                            <div className="col-md-5 col-lg-4">
                                <div className="contacts__list">
                                    <dl className="contact-list">
                                        <dt>Phone:</dt>
                                        <dd><a href="tel:+923490262442">{data.phone}</a></dd>
                                        {/* <!-- <dt>Skype:</dt>
                                        <dd><a href="skype:iamivanovivan">iamivanovivan</a></dd>  */}
                                        <dt>Email:</dt>
                                        <dd><a href={`mailto:${data.email}`}>{data.email}</a></dd>
                                    </dl>
                                </div>
                                <div className="contacts__social">
                                    <ul>
                                        <li><a href={data.facebook_link} target="_blank" rel="noopener">Facebook</a></li>
                                        <li><a href={data.linkedin_link} target="_blank" rel="noopener">Linkedin</a></li>
                                        <li><a href={data.github_link} target="_blank" rel="noopener">GitHub</a></li>
                                        {/* <!-- <li><a href="#">Bitbucket</a></li>  */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-5">
                                <div className="contacts__form">
                                    <p className="contacts__form-title">Or just write me a letter here_</p>
                                    {/* <!-- <div className="alert">Your message has been sent!</div>  */}
                                    <form className="js-form" id="contactForm">
                                        <div className="form-group">
                                            <input className="form-field js-field-name" id="name" type="text" placeholder="Your name" required />
                                            <span className="form-validation"></span>
                                            <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-field js-field-email" id="email" type="email" placeholder="Your e-mail" required />
                                            <span className="form-validation"></span>
                                            <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-field js-field-message" id="message" placeholder="Type the message here" required></textarea>
                                            <span className="form-validation"></span>
                                            <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
                                        </div>
                                        <div className="alert">Your message has been sent!</div>
                                        <button className="site-btn site-btn--form" type="submit" value="Send">Send</button>
                                    </form>
                                </div>
                                <div className="footer">
                                    <p>© 2018 Zain Bawa. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
