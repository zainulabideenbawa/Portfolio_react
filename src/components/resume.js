import React, { Component } from 'react'
import Data from './data.json'
import Education from './education';
import Employment from './employment';
import Skills from './skills';



const data = Data.Data

export default class Resume extends Component {
    render() {
        return (
            <div>
                <section id="resume" className="container section">
                    <div className="row">
                        <div className="col-md-10">
                            <h2 id="resume_header" className="section__title">Resume_</h2>
                            <p className="section__description">
                                {data.resume}
                            </p>
                        </div>
                    </div>
                    <Employment />
                    <Education />
                    <Skills />
                </section>
            </div>
        )
    }
}
