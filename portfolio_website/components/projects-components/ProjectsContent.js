import React from 'react'
import styles from './ProjectsContent.module.css'
import IndividualProject from "./IndividualProject/IndividualProject";
import Row from "react-bootstrap/cjs/Row";

export default function ProjectsContent() {
    return (
        <div className={`${styles.projectsContent} d-flex flex-column h-100`}>
            <Row className="flex-column"
                 style={{marginBottom: "50px", width: "100%"}}
            >
                <h1 className={`${styles.title} align-self-center`}>
                    Projects
                </h1>
            </Row>

            <Row className={`${styles.mainContainer} h-100`}>
                <div className="flex-column col-sm-2">
                    <ul className={`${styles.categoriesMenu}`}>
                        <li>All</li>
                        <li>Web Dev</li>
                        <li>Automation</li>
                        <li>IOT</li>
                    </ul>
                </div>

                <div className={`${styles.individualProjects} d-flex flex-sm-wrap h-100`}>
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
            </Row>
        </div>
    )
}