import React from 'react'
import styles from './EmailForm.module.css'
import CustomBtn from "../CustomBtn/CustomBtn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/cjs/Row";

export default function EmailForm() {
    return (
        <Container fluid className={`${styles.emailForm} h-100`}>
            <div className="container d-flex flex-column h-100">
                <Row className="d-flex flex-column">
                    <h1 className={styles.title}>
                        Contact
                    </h1>
                    <p className={`${styles.description} align-self-center`}>
                        This are some, but not limited to, of the services I can provide for my clients.
                        Topped by fast and bug free delivery.
                    </p>
                </Row>

                <Row className="d-flex flex-column">
                    <Row className={`justify-content-center ${styles.inputContainer}`}>
                        <input
                            className={`col-sm-4 ${styles.inpt}`}
                            placeholder="Full name"
                        />
                        <input
                            className={`col-sm-4 ${styles.inpt} ${styles.inputMargin}`}
                            placeholder="Email"
                        />
                    </Row>

                    <Row className="justify-content-center">
                        <textarea
                            className={`col-sm-9 ${styles.textareaStyle}`}
                            placeholder="Your message here..."
                        />
                    </Row>

                </Row>

                <Row
                    className={`d-flex flex-column`}
                    style={{marginBottom: "4.57vh"}}
                >
                    <div className={`${styles.btnMobile} align-self-center`}>
                        <CustomBtn content="Email me!"/>
                    </div>
                </Row>
            </div>
        </Container>
    )
}
