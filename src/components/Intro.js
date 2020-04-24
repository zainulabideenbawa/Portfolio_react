import React, { Component } from 'react'
import Data from './data.json'

const data = Data.Data

export default class Intro extends Component {
    render() {
        return (
            <div>
                <section id="hello" className="container section">
                    <div className="row">
                        <div className="col-md-10">
                            <h2 id="hello_header" className="section__title">Hi_</h2>
                            <p className="section__description">
                                {data.description}
                            </p>
                            {/* <-- <a href="#" className="section_btn site-btn"><img src="assets/img/img_btn_icon.png" alt="">Download CV</a>  */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
