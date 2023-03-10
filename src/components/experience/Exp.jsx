import React from "react"
import "./exp.css"
import {BsPatchCheckFill} from "react-icons/bs"
const Exp =() => {
    return(
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>
            <div className="container experience_container">
            <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>

            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Javascript</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>React</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            {/* </div> */}
            {/* <br></br> */}
            <h3 className="inline_element">Programming</h3>
            <h3 className="inline_element">Languages</h3>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>C/C++</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Java</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            </div>
            </div>
            <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Node JS</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Express JS</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>AWS</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
</div>
            </div>
            <div className="experience_backend">
            <h3>Extra-Curriculars</h3>
            <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Public Speaking</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Content Writing</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Team Management</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
    
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Multitasking</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Leadership Skill</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
</div>
            </div>
            </div>
        </section>
    )
}

export default Exp;