import React from 'react'
import styles from './Services.module.css'
import ServiceComponent from './ServiceComponent'
import CustomBtn from "../CustomBtn/CustomBtn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/cjs/Row";
import Link from "next/link";

export default function Services() {
    return (
        <Container fluid className={`${styles.services} d-flex justify-content-center h-100`}>
            <div className="d-flex flex-column">
                <Row noGutters className="d-flex flex-column">
                    <h1 className={styles.title}>
                        My services
                    </h1>
                    <p className={`${styles.description} align-self-center`}>
                        This are some, but not limited to, of the services I can provide for my clients.
                        Topped by fast and bug free delivery.
                    </p>
                </Row>

                <Row noGutters className={`${styles.serviceComponents} d-flex flex-wrap`}>
                    <ServiceComponent
                        title="Web Development"
                        content=""
                    />

                    <ServiceComponent
                        title="Web Development"
                        content=""
                    />

                    <ServiceComponent
                        title="Web Development"
                        content=""
                    />
                </Row>

                <Row noGutters className={`${styles.myBtn} d-flex flex-column`}>
                    <Link href={'/contact'}>
                        <a>
                            <div className="align-self-center">
                                <CustomBtn content="Hire me!"/>
                            </div>
                        </a>
                    </Link>

                </Row>
            </div>
        </Container>
    )
}
