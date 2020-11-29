import React from 'react'
import styles from './Header.module.css'
import Logo from '../logo/Logo'
import Container from "react-bootstrap/cjs/Container"
import Row from "react-bootstrap/cjs/Row"
import Col from "react-bootstrap/cjs/Col";
import Link from 'next/link'

function Header() {
    return (
        <Container fluid className={`${styles.header}`}>
            <Row noGutters>
                    <Logo />

                <Col sm={2}>
                    <nav className={`${styles.navbar}`}>
                        <Link href={'/'}>
                            <a>home</a>
                        </Link>

                        <Link  href={'/projects'}>
                            <a>projects</a>

                        </Link>

                        <Link  href={'/contact'}>
                            <a>contact</a>
                        </Link>
                    </nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
