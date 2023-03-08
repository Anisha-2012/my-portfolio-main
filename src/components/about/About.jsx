import React from "react"
import "./about.css"
// import img from "../../assets/img1.jpeg"
import img from "../../assets/imgg2.jpeg"
import {FaAward} from "react-icons/fa"
import {BsAwardFill} from "react-icons/bs"
import {BsFillBookmarkStarFill} from "react-icons/bs"
const About =() =>{
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                <img src={img} alt="About Page"/>

                </div>
            </div>
            <div className="about_content">
            <div className="about_cards">
                <article className="about_card">
                <BsAwardFill size={28} className="about_icon"/>
                    <h5>Skills</h5>
                    <a href="#experience">See More</a>
                </article>
                <article className="about_card">
                <BsFillBookmarkStarFill size={28} className="about_icon"/>
                    <h5>Experience</h5>
                    <a href="#services">See More</a>
                </article>
                <article className="about_card">
                <FaAward size={28} className="about_icon" />
                    <h5>Certifications</h5>
                    <a href="#testimonials">See More</a>
                </article>
            </div>
            <p>
            I'm currently pursuing my B.Tech in Computer Science from Vellore Institute of Technology, Bhopal.
            I'm an enthusiastic web developer and coder with special interest for computer science and upcoming innovations in the field of technology. I am a hard working, focused and calm personality with good soft skills, leadership qualities and sheer determination as my prime built in nature. Mostly inclined towards web development, problem-solving and logic-building. I'm currently engrossed in building new and innovative projects using major Web technologies.  Outside the world of tech too, I love pushing myself to develop new skills ranging from dancing, sketching to creative writing and teaching.  I love reading books, writing articles on various technical topics. Also, I'm a good Public speaker and Freelance content writer. Looking forward to efficiently utilize my skills for the betterment of the society.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
</div>
            </div>
        </section>
    )
}

export default About;