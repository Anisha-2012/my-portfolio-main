import React from "react"
import "./portfolio.css"
import IMG1 from '../../assets/portfolio2.png';
import IMG2 from '../../assets/travelo.png';
import IMG3 from '../../assets/password.png';
import IMG4 from '../../assets/snake.png';
import IMG5 from '../../assets/spotify.png';
import IMG6 from '../../assets/scramble.png';
import IMG7 from '../../assets/weather.png';
import IMG8 from '../../assets/cheatsheet.png';
import IMG9 from '../../assets/survey.png';
import IMG10 from '../../assets/landing.png';
import IMG11 from '../../assets/customer.jpg';
import IMG12 from '../../assets/doctor.png';

const data = [
    {
        id:1,
        image:IMG1,
        title: 'Fashion hub',
        github: 'https://github.com/Anisha-2012/Fashion-hub',
        demo: 'https://anisha-2012.github.io/Fashion-hub/'
    },
    {
        id:2,
        image:IMG2,
        title: 'Travelo',
        github: 'https://github.com/Anisha-2012/Tourism-website/tree/main/Tourism',
        demo: 'https://anisha-2012.github.io/Tourism-website/Tourism/'
    },
    {
        id:3,
        image:IMG3,
        title: 'Password Generator',
        github: 'https://github.com/Anisha-2012/Javascript-mini-projects/tree/main/Password-Generator',
        demo: 'https://anisha-2012.github.io/Javascript-mini-projects/Password-Generator/'
    },
    // {
    //     id:12,
    //     image:IMG12,
    //     title: 'Chikitsa Seva',
    //     github: 'https://github.com/Anisha-2012/Chikitsa-Seva',
    //     demo: ''
    // },
    {
        id:4,
        image:IMG4,
        title: 'Snake Game',
        github: 'https://github.com/Anisha-2012/Javascript-mini-projects/tree/main/Snake%20Game',
        demo: 'https://anisha-2012.github.io/Javascript-mini-projects/Snake%20Game/'
    },
    {
        id:5,
        image:IMG5,
        title: 'Spotify Clone',
        github: 'https://github.com/Anisha-2012/Javascript-mini-projects/tree/main/Spotify_clone',
        demo: 'https://anisha-2012.github.io/Javascript-mini-projects/Spotify_clone/'
    },
    {
        id:6,
        image:IMG6,
        title: 'Word Scramble',
        github: 'https://github.com/Anisha-2012/Javascript-mini-projects/tree/main/word_scramble',
        demo: 'https://anisha-2012.github.io/Javascript-mini-projects/word_scramble/'
    },
    {
        id:7,
        image:IMG7,
        title: 'Weather App',
        github: 'https://github.com/Anisha-2012/Javascript-mini-projects/tree/main/Weather-App',
        demo: 'https://anisha-2012.github.io/Javascript-mini-projects/Weather-App/'
    },
    {
        id:8,
        image:IMG8,
        title: 'HTML Cheatsheet',
        github: 'https://github.com/Anisha-2012/Javascript-mini-projects/tree/main/Cheatsheet',
        demo: 'https://anisha-2012.github.io/Javascript-mini-projects/Cheatsheet/'
    },
    {
        id:9,
        image:IMG9,
        title: 'Personal Survey From',
        github: 'https://github.com/Anisha-2012/HTML-projects/tree/main/Personal%20survey%20form',
        demo: 'https://anisha-2012.github.io/HTML-projects/Personal%20survey%20form/'
    },
    {
        id:10,
        image:IMG10,
        title: 'Landing Page',
        github: 'https://github.com/Anisha-2012/HTML-projects/tree/main/Landing%20page',
        demo: 'https://anisha-2012.github.io/HTML-projects/Landing%20page/'
    }

]

const Portfolio =() => {
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                <a href={github} className="btn" target='_blank'>Github</a>
                <a href={demo} target='_blank' className="btn btn-primary">Live Demo</a>
                </div>
                </article>
                        )
                    })
                }
                <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG12}></img>
                </div>
                <h3>Chikitsa-Seva</h3>
                <div className="portfolio_item-cta">
                <a href='https://github.com/Anisha-2012/Chikitsa-Seva' className="btn" target='_blank'>Github</a>
                </div>
                </article>
                <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG11}></img>
                </div>
                <h3>Customer Satisfaction Prediction</h3>
                <div className="portfolio_item-cta">
                <a href='https://github.com/Anisha-2012/Consumer-Satisfaction' className="btn" target='_blank'>Github</a>
                </div>
                </article>
                

            </div>
        </section>
    )
}

export default Portfolio;