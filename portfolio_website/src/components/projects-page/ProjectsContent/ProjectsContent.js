import React from 'react'
import './ProjectsContent.css'
import IndividualProject from "./IndividualProject/IndividualProject";

export default function ProjectsContent() {
    return (
        <div id="projects-content" className=".container-fluid d-flex flex-column">
            <div className="flex-column row"
                 style={{marginBottom: "50px"}}
            >
                <h1 className="title align-self-center">
                    Projects
                </h1>
            </div>

            <div id="main-container" className="row">
                <div className="flex-column col-sm-2">
                    <ul className="categories-menu">
                        <li>All</li>
                        <li>Web Dev</li>
                        <li>Automation</li>
                        <li>IOT</li>
                    </ul>
                </div>

                <div id="individual-projects" className="d-flex flex-wrap">
                    <IndividualProject title="Proiect1" />
                    <IndividualProject title="Proiect2" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                    <IndividualProject title="Proiect3" />
                </div>
            </div>
        </div>
    )
}