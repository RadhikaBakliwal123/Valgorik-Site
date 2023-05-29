import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
//import { Link } from "react-router-dom";
import companyName from "../valgorik.png";
const TopMenuBar = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-4"><img src={companyName} alt="Company Name..."/></div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-2">
                    <a href="https://www.youtube.com/c/jamesqquick"><FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon></a>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-2">
                    <a href="https://www.youtube.com/c/jamesqquick"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-2">
                    <a href="https://www.youtube.com/c/jamesqquick"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-2">
                    <a href="https://www.youtube.com/c/jamesqquick"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>
                </div>
            </div>

        </nav>
    );
}
export default TopMenuBar;