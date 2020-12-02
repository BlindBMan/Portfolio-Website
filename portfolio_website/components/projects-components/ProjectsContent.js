import React, {useState} from 'react'
import styles from './ProjectsContent.module.css'
import IndividualProject from "./IndividualProject/IndividualProject";
import Row from "react-bootstrap/cjs/Row";

export default function ProjectsContent() {
    const [projectType, setProjectType] = useState(["web", "auto", "iot"])

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
                        <li onClick={() => { setProjectType(["web", "auto", "iot"]) }}>All</li>
                        <li onClick={() => { setProjectType(["web"]) }}>Web Dev</li>
                        <li onClick={() => { setProjectType(["auto"]) }}>Automation</li>
                        <li onClick={() => { setProjectType(["iot"]) }}>IOT</li>
                    </ul>
                </div>

                <div className={`${styles.individualProjects} d-flex flex-sm-wrap h-100`}>
                    {
                        projectType.includes("web") && <>
                             <IndividualProject title="FadedIsland" />
                             <IndividualProject title="AGCD" />
                             {/*// <IndividualProject title="web" imgSrc="assets/images/test_pic.jpg" />*/}
                             {/*// <IndividualProject title="web" imgSrc="assets/images/test_pic.jpg" />*/}
                             </>
                    }

                    {
                        projectType.includes("iot") && <>
                        {/*<IndividualProject title="iot" imgSrc="assets/images/test_pic.jpg" />*/}
                        {/*<IndividualProject title="iot" imgSrc="assets/images/test_pic.jpg" />*/}
                        {/*<IndividualProject title="iot" imgSrc="assets/images/test_pic.jpg" />*/}
                        {/*<IndividualProject title="iot" imgSrc="assets/images/test_pic.jpg" />*/}
                        </>
                    }

                    {
                        projectType.includes("auto") && <>
                        {/*<IndividualProject title="auto" imgSrc="assets/images/test_pic.jpg" />*/}
                        {/*<IndividualProject title="auto" imgSrc="assets/images/test_pic.jpg" />*/}
                        {/*<IndividualProject title="auto" imgSrc="assets/images/test_pic.jpg" />*/}
                        {/*<IndividualProject title="auto" imgSrc="assets/images/test_pic.jpg" />*/}
                        </>
                    }
                </div>
            </Row>
        </div>
    )
}