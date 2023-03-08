import React from "react"
import "./header.css"
import CTA from "./CTA"
import img2 from "../../assets/img2.jpeg"
import Socials from "./Socials"

const Header =() => {
    return(
        <header>
            <div className="container header_container">
                <h5>Hello Everyone, I'm</h5>
                <h1>Anisha Rachel George</h1>
                <h5 className="text-light"> Full Stack Developer, Problem-solver, Cloud Enthusiast, Freelance Content writer</h5>
                <CTA />
                <Socials />

            <div className="me">
                <img src={img2} alt=" "/>
            </div>
            <a href="#contact" className="scroll_down">Scroll Down</a>

            </div>

        </header>
    )
}

export default Header;