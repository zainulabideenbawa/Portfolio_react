import React, { Component } from 'react'

import Data from './data.json'

const data = Data.Data
const employment = data.employment


const details = employment.map((element, key) => {
    return (
        <div key={key} className="resume-list__block">
            <p className="resume-list__block-title">{element.employer}</p>
            <p className="resume-list__block-date">{element.date}</p>
            <p>
                {element.description}
            </p>
        </div>
    )

});


export default class Employment extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 section__resume resume-list">
                        <h3 className="resume-list_title">employment</h3>
                        {details}

                    </div>
                </div>
            </div>
        )
    }
}
