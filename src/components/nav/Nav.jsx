import React from "react"
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsAwardFill} from "react-icons/bs"
import {BsJournalBookmarkFill} from "react-icons/bs"
import {AiOutlineMessage} from "react-icons/ai"
import { useState } from "react"

const Nav =() => {
    const [activeNav, setActiveNav] = useState("#")
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome size={22}/></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser size={22}/></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsAwardFill size={22}/></a>
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><BsJournalBookmarkFill size={22}/></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineMessage size={22}/></a>
        </nav>
    )
}

export default Nav;