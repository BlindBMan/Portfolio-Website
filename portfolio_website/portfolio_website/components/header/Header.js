import React from 'react'
import styles from './Header.module.css'
import Logo from '../logo/Logo'
import Container from "react-bootstrap/cjs/Container"
import Row from "react-bootstrap/cjs/Row"
import Col from "react-bootstrap/cjs/Col";

function Header() {
    return (
        <Container fluid className={`${styles.header}`}>
            <Row noGutters>
                    <Logo />

                <Col sm={2}>
                    <nav className={`${styles.navbar}`}>
                        <a href="#">home</a>
                        <a href="#">projects</a>
                        <a href="#">contact</a>
                    </nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
