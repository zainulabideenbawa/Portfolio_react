import React, { Component } from 'react'
import Data from './data.json'

const data = Data.Data
const education = data.education


const details = education.map((element, key) => {
    return (
        <div key={key} className="resume-list__block">
            <p className="resume-list__block-title">{element.institute}</p>
            <p className="resume-list__block-date">{element.date}</p>
            <p>
                {element.degree}
            </p>
        </div>
    )

});





export default class Education extends Component {

    render() {
        console.log(education)
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 section__resume resume-list">
                        <h3 className="resume-list_title">education</h3>
                        {details}

                    </div>
                </div>
            </div>
        )
    }
}
