import './HomePage.css';
import photo from '../../assets/photo.jpg';
import { FaVk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from 'react';

export const HomePage = () => {
    const fullTitle = '  Абулканов Мади Булатович';
    const [displayedTitle, setDisplayedTitle] = useState("");
    
    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < fullTitle.length) {
                setDisplayedTitle(prev => prev + fullTitle.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="home-page">
            <div className="profile">
                <img src={photo} alt='photo' className="my-photo"/>
                <h1 className="profile-title">{displayedTitle}</h1>
                <p className="profile-subtitle">Web Developer</p>
            </div>
            <div className="social-networks">
                <a className="social-icon" href='https://www.linkedin.com/in/abulkanov-madi/' target="_blank"><FaLinkedin size={33} color='#fff' /></a>
                <a className="social-icon" href='https://github.com/MadiAbulkanov' target="_blank"><BsGithub size={33} color='#fff' /></a>
                <a className="social-icon" href='https://vk.com/abulkanov' target="_blank"><FaVk size={33} color='#fff' /></a>
                <a className="social-icon" href='https://t.me/Madi304' target="_blank"><FaTelegramPlane size={33} color='#fff' /></a>
            </div>
        </div>
    )
}