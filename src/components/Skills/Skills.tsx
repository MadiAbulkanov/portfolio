import './Skills.css';
import htmlIcon from '../../assets/html-icon.png';
import cssIcon from '../../assets/icon-css.png';
import jsIcon from '../../assets/icon-js.png';
import sassIcon from '../../assets/icon-sass.png';
import bootstrapIcon from '../../assets/icons-bootstrap.png';
import viteIcon from '../../assets/icons-vite.png';
import reactIcon from '../../assets/icons-react.png';
import muiIcon from '../../assets/icons-material-ui.png';
import redaxIcon from '../../assets/icons-redax.png';
import firebaseIcon from '../../assets/icons-firebase.png';
import tsIcon from '../../assets/icons-typescript.png';

import nodeIcon from '../../assets/icons-node-js.png';
import expressIcon from '../../assets/icons-express-js.png';
import mysqlIcon from '../../assets/icons-mysql.png';
import postgressIcon from '../../assets/icons-postgresql.png';
import postmanIcon from '../../assets/icons-postman.png';
import jestIcon from '../../assets/Jest.png';
import { useEffect, useRef, useState } from 'react';

export const Skills = ({ id }:{ id: string }) => {
    const [isVisible, setIsVisible] = useState(false); 
    const skillsRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                    observer.unobserve(entry.target); 
                }
            },
            {
                threshold: 0.2, 
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current); 
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current); 
            }
        };
    }, []);

    return (
        <div className={`skills-section ${isVisible ? 'visible' : ''}`} id={id} ref={skillsRef}>
            <h1 className="skills-section-title">Навыки</h1>
            <div className="skills-section-wrap">
                <div className="skills">
                    <h3 className="skills-title">Frontend</h3>
                    <div className="skills-card">
                        <img src={htmlIcon} alt="html-icon" className="skills-icon" />
                        <img src={cssIcon} alt="css-icon" className="skills-icon" />
                        <img src={jsIcon} alt="js-icon" className="skills-icon" />
                        <img src={sassIcon} alt="sass-icon" className="skills-icon" />
                        <img src={bootstrapIcon} alt="bootstrap-icon" className="skills-icon" />
                        <img src={viteIcon} alt="vite-icon" className="skills-icon" />
                        <img src={reactIcon} alt="react-icon" className="skills-icon" />
                        <img src={muiIcon} alt="mui-icon" className="skills-icon" />
                        <img src={redaxIcon} alt="redax-icon" className="skills-icon" />
                        <img src={firebaseIcon} alt="firebase-icon" className="skills-icon" />
                        <img src={tsIcon} alt="ts-icon" className="skills-icon" />
                    </div>
                </div>
                <div className="skills">
                    <h3 className="skills-title">Backend</h3>
                    <div className="skills-card">
                        <img src={nodeIcon} alt="node-icon" className="skills-icon" />
                        <img src={expressIcon} alt="express-icon" className="skills-icon" />
                        <img src={mysqlIcon} alt="mysql-icon" className="skills-icon" />
                        <img src={postgressIcon} alt="postgress-icon" className="skills-icon" />
                        <img src={postmanIcon} alt="postman-icon" className="skills-icon" />
                        <img src={jestIcon} alt="jest-icon" className="skills-icon" />
                    </div>
                </div>
            </div>    
        </div>
    )
}