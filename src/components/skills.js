import React, { Component } from 'react'

import Data from './data.json'

const data = Data.Data
const skills = data.general_skills
const Extraskills = data.other_skills
const otherSkills = data.OtherSkills


const details = skills.map((element, key, index) => {
    console.log('test', index)
    if (index < 4) {
        return (
            <div className="col-md-5 mr-auto">
                <div className="progress-list__skill">
                    <p>
                        <span className="progress-list__skill-title" style={{ textTransform: "none" }}>JavaScript | ES6/ES7 | JQuery</span>
                        <span className="progress-list__skill-value">90%</span>
                    </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="col-md-5 mr-auto">
                <div className="progress-list__skill">
                    <p>
                        <span className="progress-list__skill-title" style={{ textTransform: "none" }}>JavaScript | ES6/ES7 | JQuery</span>
                        <span className="progress-list__skill-value">90%</span>
                    </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

const extraDetails = Extraskills.map((element, key, index) => {
    console.log('test', index)
    if (index < 4) {
        return (
            <div className="col-md-5 mr-auto">
                <div className="progress-list__skill">
                    <p>
                        <span className="progress-list__skill-title" style={{ textTransform: "none" }}>JavaScript | ES6/ES7 | JQuery</span>
                        <span className="progress-list__skill-value">90%</span>
                    </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="col-md-5 mr-auto">
                <div className="progress-list__skill">
                    <p>
                        <span className="progress-list__skill-title" style={{ textTransform: "none" }}>{element.skill}</span>
                        <span className="progress-list__skill-value">{element.value}%</span>
                    </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={element.value} aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

const Otherdetails = otherSkills.map((element, key, index) => {
    console.log('test', index)

    return (
        <div key={key} className="resume-list__block">
            <p className="resume-list__block-title">{element.title}</p>

            {element.list.map((post, key) =>
                <p key={key} className="resume-list__block-date">{post}</p>
            )}
        </div>
    )

})


export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="row section__resume progress-list js-progress-list">
                    <div className="col-md-12">
                        <h3 className="progress-list__title">general skills</h3>
                    </div>
                    {details}
                </div>
                <div className="row section__resume progress-list js-progress-list">
                    <div className="col-md-12">
                        <h3 className="progress-list__title">Other experiences</h3>
                    </div>
                    {extraDetails}
                </div>
                {/* <div className="row section__resume progress-list js-progress-list">
                    <div className="col-md-12">
                        <h3 className="progress-list__title"></h3>
                    </div>


                    {Otherdetails}
                </div> */}
            </div>
        )
    }
}
