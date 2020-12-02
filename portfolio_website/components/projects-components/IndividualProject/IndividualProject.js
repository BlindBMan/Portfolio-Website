import React from 'react'
import styles from './IndividualProject.module.css'
import Link from "next/link";

export default function IndividualProject(props) {
    function handleClick() {
        console.log("clicked")
    }

    return (
        <Link href={`/specificProjects/${props.title}`}>
            <a>
                <div className={`${styles.individualProject}`}>
                    <img src={`/assets/images/${props.title}/1.jpg`}
                         alt={props.title}
                         onClick={handleClick}
                         className={styles.projImg}
                    />

                    <div className={`${styles.overlay} d-flex flex-column`}>
                        <div
                            className={`align-self-center`}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                fontSize: "1.3rem",
                                color: "black",
                                fontWeight: "bold",
                                textAlign: "center",
                                transform: "translate(-50%, -50%)",
                                opacity: "1!important"
                            }}
                        >{props.title}</div>
                    </div>
                </div>
            </a>
        </Link>
    )
}