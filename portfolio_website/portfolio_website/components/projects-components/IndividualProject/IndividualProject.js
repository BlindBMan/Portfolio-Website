import React from 'react'
import './IndividualProject.module.css'

export default function IndividualProject(props) {
    function handleClick() {
        console.log("clicked")
    }

    return (
        <div className="individual-project">
            <img src={props.imgSrc}
                 alt={props.title}
                 onClick={handleClick}
            />

            <div className="overlay d-flex flex-column">
                <div
                    className="text align-self-center"
                    style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            fontSize: "20px",
                            color: "black",
                            fontWeight: "bold",
                            textAlign: "center",
                            transform: "translate(-50%, -50%)",
                            opacity: "1"
                    }}
                >{props.title}</div>
            </div>
        </div>
    )
}