import React from 'react'
import './Footer.css'
import Logo from "../logo/Logo";
import {ReactComponent as GithubSVG} from "./icons/github.svg";
import {ReactComponent as FacebookSVG} from "./icons/facebook.svg";
import {ReactComponent as InstagramSVG} from "./icons/instagram.svg";
import {ReactComponent as TwitterSVG} from "./icons/twitter.svg";
import {ReactComponent as YoutubeSVG} from "./icons/youtube.svg";

export default function Footer() {
    function handleClick(url) {
        window.location.href = url
    }

    return (
        <div id="footer" className=".container">
            <div className="row">
                <Logo />

                <div className="col-sm-3 d-inline-flex social-lst">
                    <GithubSVG className="lst-item"
                               onClick={() => { handleClick("https://github.com/BlindBMan") }}
                    />
                    <InstagramSVG className="lst-item"
                                  onClick={() => { handleClick("http://instagram.com/_pipinstall") }}
                    />
                    <YoutubeSVG className="lst-item"
                                onClick={() => { handleClick("http://youtube.com") }}
                    />
                    <TwitterSVG className="lst-item"
                                onClick={() => { handleClick("http://twitter.com") }}
                    />
                    <FacebookSVG className="lst-item"
                                 onClick={() => { handleClick("http://facebook.com") }}
                    />
                </div>
            </div>
        </div>
    )
}