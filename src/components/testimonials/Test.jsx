import React from "react";
import "./test.css";
import img1 from '../../assets/JavaCert.png';
import img2 from '../../assets/JavaApp.png';
import img3 from '../../assets/aws.png';
import img4 from '../../assets/webrec.png';
import img5 from '../../assets/C.png';
import img6 from '../../assets/matlab.png';
import img7 from '../../assets/merit.png';
import img9 from '../../assets/iirs.png';
import img8 from '../../assets/microsoft.png';
import img12 from '../../assets/web.png';
import img11 from '../../assets/dsa.png';


const data = [
    {
        id:1,
        image:img1,
        title: 'Java Essential Training Certificate',
        demo: 'https://drive.google.com/file/d/1R1zO1_lRRN5b2VLNL_CT0NAnMPjmpkwd/view'
    },
    {
        id:2,
        image:img2,
        title: 'Java Appreciation Letter',
        demo: 'https://drive.google.com/file/d/1R2yyJ5qe7BS7C6q18VU_10RqWlym8gNx/view'
    },
    {
        id:3,
        image:img3,
        title: 'AWS Cloud Practitioner Badge',
        demo: 'https://www.credly.com/badges/8d51aaa7-bf64-4432-a8af-f26b2543556c/public_url'
    },
    {
        id:11,
        image:img11,
        title: 'Data Structures Certificate',
        demo: 'https://drive.google.com/file/d/1fGKUwTEW2FRgpt3bR03xknghwJPs19rL/view'
    },
    {
        id:12,
        image:img12,
        title: 'Web Development Bootcamp',
        demo: 'https://drive.google.com/file/d/1NJD_GNWycBCkNOWEtB8IImwXPZIr2rJL/view'
    },
    {
        id:4,
        image:img4,
        title: 'Web Development Appreciation Letter',
        demo: 'https://drive.google.com/file/d/1T7_YXMyW7SQXt_dZBI1V9PxYqKyBK1NO/view'
    },
    {
        id:5,
        image:img5,
        title: 'C/C++ Foundation Certificate',
        demo: 'https://drive.google.com/file/d/1HGnxqjze14DwClUnDfs1ny6AWchN6Uaj/view'
    },
    
    {
        id:6,
        image:img6,
        title: 'MATLAB Onramp Training',
        demo: 'https://drive.google.com/file/d/1JrI-Ft5hL9eicjAyTsTXQFc3W1qkQfGi/view'
    },
    {
        id:7,
        image:img7,
        title: '0.1% Merit Certificate',
        demo: 'https://drive.google.com/file/d/1K2nFU27sKOAU1wXoYc9ZSD_Dsv2jJVpZ/view'
    },
    {
        id:9,
        image:img9,
        title: 'IIRS Outreach Program Certificate',
        demo: 'https://drive.google.com/file/d/1LpHZxT2V531MBzNLZi1xDIyxlWqerWNh/view'
    },
    {
        id:8,
        image:img8,
        title: 'Microsoft Student Summit Certificate',
        demo: 'https://drive.google.com/file/d/1MdfScBrpjju9qYqMnU9YIE4-mBZehcr8/view'
    }
]

const Test =() => {
    return(
        <section id="testimonials">
            <h5>Want to see what I achieved</h5>
            <h2>Certifications</h2>

            <div className="testimonials test_container" id="center_me">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="test_item">
                <div className="test_item-image">
                    <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="test_item-cta">
                <a href={demo} target='_blank' className="btn btn-primary">View</a>
                </div>
                </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Test;
