import React from 'react'
import './ServiceComponent.css'
import laptop from './icons/laptop.svg'


export default function ServiceComponent(props) {
    function chooseSVG(title) {
        switch (title) {
            case "Web Development": return laptop
            // case "automation": return robot
            default: return ""

        }
    }
    return (
        <div id="service-component" className="container col-sm-3">
            <div className="d-flex flex-column"
                 style={{height: "auto"}}
            >
                <img src={chooseSVG(props.title)} alt="problems" className="align-self-center"

                />

                <p className="align-self-center"
                   style={{fontSize: "1.7vw", paddingTop: "2.63vh"}}
                >
                    {props.title}
                </p>

                <p className="service-description align-self-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
            </div>

        </div>
    )
}