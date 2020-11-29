import React from 'react'
import styles from "./Introduction.module.css"
import ScrollHint from "../../public/assets/svgs/ScrollHint.svg";
import Container from "react-bootstrap/Container";

function Introduction() {
    return (
        <Container fluid className={`d-flex justify-content-center ${styles.introduction}`}>
            <div className="d-flex align-self-center">
                <div className="d-flex flex-column">

                    <h5
                        style={{
                            textAlign: "center",
                            fontSize: "1.5vw",
                            paddingBottom: "1vh"
                        }}
                    >
                        Welcome!
                    </h5>

                    <h1 className={styles.mainSentence}>I am <b>Samuel Gustin</b> </h1>
                    <ul className={`${styles.listInLine} d-flex align-self-center`}
                        style={{listStyle: "disc"}}
                    >
                        <li className={""}>Developer</li>
                        <li className={styles.listInlineItem}>IOT</li>
                        <li className={styles.listInlineItem}>Thinker</li>
                    </ul>
                </div>
            </div>
            <ScrollHint className={styles.scrollHint} />
        </Container>
    )
}

export default Introduction