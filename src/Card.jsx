import React from 'react'
import './Card.css'
import ip from './assets/insta.jpg';
import xp from './assets/twitter.jpg';
import lp from './assets/linkedin.jpg';
import gp from './assets/github.png';

function Card(props){
    return(
        <>
        <div className = "div-class">
            <img src = {props.CardImg}  alt = {props.alt} width ="200" height = "200" className = "img-class"></img>
            <h3 className = "h3-card">Hello there! I am Rishabh Kumar, a first-year Computer Science student passionate about technology and innovation. My skills include Java, HTML, CSS, JavaScript, and React.js. I am actively seeking internship opportunities and exciting projects to grow my expertise in software development.</h3>
            <div className='social-media'>
                <a href = "https://www.instagram.com/rishabh_pandey51/?hl=en"><button href><img src = {ip} alt = "insta"/></button></a>
                <a href = "https://x.com/Rishabh78572143"><button><img src = {xp} alt='x.com'/></button></a>
                <a href = "https://www.linkedin.com/in/rishabh-kumar-064409330/"><button><img src = {lp} alt='linkedin'/></button></a>
                <a href = "https://github.com/rishabh98080"><button className='github'><img src = {gp} alt='github' className='git'/></button></a>
            </div> 
        </div>
        </>
    )
}
export default Card