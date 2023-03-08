import React from "react"
import "./services.css"
import {BsPatchCheckFill} from "react-icons/bs"
import {AiFillCalendar} from "react-icons/ai"
const Services =() => {
    return(
        <section id="services">
            <h5>Where I served</h5>
            <h2>Experience</h2>
            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>Teaching Mentor</h3>
                        <h4>GeeksforGeeks</h4>
                    </div>
                    <ul className="service_list">
                    <li>
                            <AiFillCalendar size={14} className="service_list-icon"/>
                            <h5> March 2014 - August 2014
</h5>
                        </li>
                        <li>
                            <BsPatchCheckFill size={38} className="service_list-icon"/>
                            <p>Prepared powerpoint presentations and recorded teaching videos on
problem solving in Data Structures and Algorithms, that were
published on the GeeksforGeeks learning portal for the global
students.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Offered friendly and efficient mentoring experience to students, and
handled their challenging doubts with ease.
</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Technology used C++, Data Structures and Algorithms.
</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development Intern</h3>
                        <h4>LetsGrowMore</h4>
                    </div>
                    <ul className="service_list">
                    <li>
                            <AiFillCalendar size={14} className="service_list-icon"/>
                            <h5> November 2021 - December 2021 
</h5>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Developed user interfaces with modern JavaScript frameworks,
HTML5 and CSS3.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Collaborated with team leads, team members, and developers to
initiate process improvements. 

</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Designed and implemented web
components, completed assigned tasks timely with efficiency.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Technical Content Writer</h3>
                        <h4>GeeksforGeeks</h4>
                    </div>
                    <ul className="service_list">
                    <li>
                            <AiFillCalendar size={14} className="service_list-icon"/>
                            <h5> October 2021 - December 2021
</h5>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p> Conducted extensive research and designed content on technical
topics (for class X-XII), that were published on the GeeksforGeeks
learning platform for the global students.
</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Managed to produce 7-8 well written articles within a tenure of two
months.
</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Strengthened existing technical content in the portal through
proofreading and editing.
</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Microsoft Learn Student Ambassador</h3>
                        <h4>Microsoft</h4>
                    </div>
                    <ul className="service_list">
                    <li>
                            <AiFillCalendar size={14} className="service_list-icon"/>
                            <h5> January 2014 – Present
</h5>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Gathered immense knowledge and skills
on various emerging technologies such as
Microsoft Azure, Github, and VS code
by participating in various workshops and
leagues organized by Microsoft volunteers.
</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Utilized the opportunities to network and
share ideas with global community of students and experts.
</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Volunteered and organized workshops on
technical topics to spread knowledge and
skills among the global community as well
as college society.
</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service_head">
                        <h3>Campus Ambassador</h3>
                        <h4>International Model United Nations</h4>
                    </div>
                    <ul className="service_list">
                    <li>
                            <AiFillCalendar size={14} className="service_list-icon"/>
                            <h5> September 2021 – October 2021
</h5>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p> Facilitated monthly programs focusing on
personal safety, healthcare, poverty, environmental protection, off-campus education and encouraged community interactions.
</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Participated in the 75th International
MUN conference and shared ideas and
opinions on various global issues and debated on them.
</p>
                        </li>
                        <li>
                            <BsPatchCheckFill size={14} className="service_list-icon"/>
                            <p>Opportunity to work with multiculturalism individuals and learn from their experiences.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services;