import React from "react"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Socials = () => {
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/anisha-rachel-george-467781212" target="_blank"><BsLinkedin size={28}/></a>
            <a href="https://github.com/Anisha-2012" target="_blank"><BsGithub size={28}/> </a>
            <a href="https://twitter.com/AnishaRachelGe1?t=eRTun2wXcZGuYYMj_Z8GnQ&s=08" target="_blank"><BsTwitter size={28}/> </a>
        </div>
    )
}

export default Socials;