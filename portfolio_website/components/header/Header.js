import React from 'react'
import styles from './Header.module.css'
import Logo from '../logo/Logo'
import Container from "react-bootstrap/cjs/Container"
import Row from "react-bootstrap/cjs/Row"
import Col from "react-bootstrap/cjs/Col";
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {Nav} from "react-bootstrap";


function Header() {
    return (
        <Container fluid className={`${styles.header}`}>
            <Row noGutters>
                <Logo colXs={9} colSm={10} />

                <Col xs={1} sm={2} md={2}>
                    <Navbar collapseOnSelect expand={'lg'} variant={'dark'} className={`${styles.navbar}`}>
                        <Navbar.Toggle aria-controls={'responsive-navbar'} />
                        <Navbar.Collapse id={'responsive-navbar'}>
                            <Nav className={`mr-auto ${styles.navbar}`}>
                                <Nav.Item>
                                    <Link href={'/'}>
                                        <a>home</a>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link href={'/projects'}>
                                        <a className={styles.navMargin}>projects</a>

                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link  href={'/contact'}>
                                        <a className={styles.navMargin}>contact</a>
                                    </Link>
                                </Nav.Item>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
