import React from 'react'
import styles from './Logo.module.css'
import LogoSVG from "../../public/assets/svgs/logo.svg";
import Col from "react-bootstrap/cjs/Col"

export default function Logo() {
    return (
        <Col xs={9} sm={10} className={styles.mainName}>
            Samuel Gustin
            <LogoSVG className={styles.logo} />
        </Col>
    )
}
