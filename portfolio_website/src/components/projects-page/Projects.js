import React from 'react'
import './Projects.css'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProjectsContent from "./ProjectsContent/ProjectsContent";

export default function Projects() {
    return (
        <div id="projects-container"
             className=".container-fluid"
        >
            <Header />
            <ProjectsContent />
            <Footer />
        </div>
    )
}