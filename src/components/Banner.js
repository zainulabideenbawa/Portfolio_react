import React, { Component } from 'react'
import Data from './data.json'

const data = Data.Data


export default class Banner extends Component {



    render() {
        console.log(Data.Data.name)
        return (
            <div>
                <header className="main-header" style={{ background: '#24ACB4' }}>
                    <div className="container">
                        <div className="row personal-profile">
                            <div className="col-md-4 personal-profile__avatar">
                                <img className="" src="/img/zain.jpg" alt="avatar" />
                            </div>
                            <div className="col-md-8">
                                <p className="personal-profile__name">{data.name}_</p>
                                <p className="personal-profile__work">{data.work}</p>
                                <div className="personal-profile__contacts">
                                    <dl className="contact-list contact-list__opacity-titles">
                                        <dt>Age:</dt>
                                        <dd>{data.age}</dd>
                                        <dt>Phone:</dt>
                                        <dd><a href="tel:+923490262442">{data.phone}</a></dd>
                                        <dt>Email:</dt>
                                        <dd><a href="mailto:zainulabideenbawa@gmail.com">{data.email}</a></dd>
                                        <dt>Address:</dt>
                                        <dd>{data.address}</dd>
                                    </dl>
                                </div>
                                <p className="personal-profile__social">
                                    <a href={data.github_link} target="_blank" rel="noopener"><i className="fab fa-github-square"></i></a>
                                    <a href={data.linkedin_link} target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                                    <a href={data.facebook_link} target="_blank" rel="noopener"><i className="fab fa-facebook-square"></i></a>
                                    <a href={data.medium_link} target="_blank" rel="noopener"><i className="fab fa-medium"></i></a>

                                </p>
                            </div>
                        </div>
                    </div>
                </header>
            </div >
        )
    }
}
