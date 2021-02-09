import React from 'react'
import styles from './IndividualProject.module.css'
import Link from "next/link";

export default function IndividualProject(props) {
    function handleClick() {
        console.log("clicked")
    }

    return (
        <Link
            href={`/specificProjects/${props.title}`}
            // as={`/specificProjects/${props.title}`}
        >
            <a>
                <div className={`${styles.individualProject}`}>
                    <img src={`/assets/images/${props.title}/1.jpg`}
                         alt={props.title}
                         onClick={handleClick}
                         className={`${styles.projImg} ${styles.projImgMobile}`}
                    />

                    <div className={`${styles.overlay} ${styles.overlayMobile} d-flex flex-column`}>
                        <div
                            className={`${styles.overlayText} align-self-center`}
                        >{props.title}</div>
                    </div>
                </div>
            </a>
        </Link>
    )
}
