import React from 'react'
import styles from './Footer.module.css'
import Logo from "../logo/Logo";
import GithubSVG from "../../public/assets/svgs/github.svg";
import FacebookSVG from "../../public/assets/svgs/facebook.svg";
import InstagramSVG from "../../public/assets/svgs/instagram.svg";
import TwitterSVG from "../../public/assets/svgs/twitter.svg";
import YoutubeSVG from "../../public/assets/svgs/youtube.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/cjs/Row";

export default function Footer() {
    function handleClick(url) {
        window.location.href = url
    }

    return (
        <Container fluid className={styles.footer}>
            <Row noGutters>
                <Logo />

                <div className={`col-sm-3 d-inline-flex ${styles.socialLst}`}>
                    <GithubSVG className={`${styles.lstItem}`}
                               onClick={() => { handleClick("https://github.com/BlindBMan") }}
                    />
                    <InstagramSVG className={`${styles.lstItem} ${styles.lstItemMargin}`}
                                  onClick={() => { handleClick("http://instagram.com/_pipinstall") }}
                    />
                    <YoutubeSVG className={`${styles.lstItem} ${styles.lstItemMargin}`}
                                onClick={() => { handleClick("http://youtube.com") }}
                    />
                    <TwitterSVG className={`${styles.lstItem} ${styles.lstItemMargin}`}
                                onClick={() => { handleClick("http://twitter.com") }}
                    />
                    <FacebookSVG className={`${styles.lstItem} ${styles.lstItemMargin}`}
                                 onClick={() => { handleClick("http://facebook.com") }}
                    />
                </div>
            </Row>
        </Container>
    )
}