import React from 'react'
import '../styles/Projects.module.css'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProjectsContent from "../components/projects-components/ProjectsContent";

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