import React from 'react'
import './ProjectsContent.module.css'
import IndividualProject from "./IndividualProject/IndividualProject";

export default function ProjectsContent() {
    return (
        <div id="projects-content" className="d-flex flex-column h-100">
            <div className="flex-column row"
                 style={{marginBottom: "50px", width: "100%"}}
            >
                <h1 className="title align-self-center">
                    Projects
                </h1>
            </div>

            <div id="main-container" className="row h-100">
                <div className="flex-column col-sm-2">
                    <ul className="categories-menu">
                        <li>All</li>
                        <li>Web Dev</li>
                        <li>Automation</li>
                        <li>IOT</li>
                    </ul>
                </div>

                <div id="individual-projects" className="d-flex flex-sm-wrap h-100">
                    <IndividualProject title="Proiect1" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect2" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect3" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect3" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect3" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect3" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect3" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect3" imgSrc="assets/images/test_pic.jpg" />
                    <IndividualProject title="Proiect3" imgSrc="assets/images/test_pic.jpg" />

                </div>
            </div>
        </div>
    )
}