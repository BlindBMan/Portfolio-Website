import React from 'react'
import styles from './Logo.module.css'
import LogoSVG from "../../public/assets/svgs/logo.svg";
import Col from "react-bootstrap/cjs/Col"

export default function Logo(props) {
    return (
        <Col xs={props.colXs} sm={props.colSm} className={styles.mainName}>
            Samuel Gustin
            <LogoSVG className={styles.logo} />
        </Col>
    )
}
