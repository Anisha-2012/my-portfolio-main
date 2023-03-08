import React from "react"
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer =() => {
    return(
        <footer>
            <a href="#" className="footer_logo">Anisha</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                {/* <li><a href="#education">Education</a></li> */}
                <li><a href="#services">Experience</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#testimonials">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/anisha-rachel-george-467781212/" target="_blank"><BsLinkedin/></a>
                <a href="https://github.com/Anisha-2012" target="_blank"><BsGithub/></a>
                <a href="https://twitter.com/AnishaRachelGe1?t=eRTun2wXcZGuYYMj_Z8GnQ&s=08" target="_blank"><BsTwitter/></a>
                
            </div>
            <div className="footer_copyright">
                <small>&copy; Anisha Rachel George. All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;