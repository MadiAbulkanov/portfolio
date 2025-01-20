import './AboutMe.css';
import { FaVk } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

export const AboutMe = ({ id }:{ id: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className={`about-me-section ${isVisible ? 'fade-in' : ''}`} id={id} ref={ref}>
            <h1 className="about-me-section-title">Обо Мне</h1>
            <div className={`my-details-block ${isVisible ? 'fade-in' : ''}`} ref={ref}>
                <div className="title-column">
                    <p className="my-details-title">ФИО</p>
                    <p className="my-details-title">Телефон</p>
                    <p className="my-details-title">Почта</p>
                    <p className="my-details-title">Город</p>
                </div>
                <div className="desc-column">
                    <p className="my-details-desc">Абулканов Мади Булатович</p>
                    <p className="my-details-desc">8 705 304 88 06</p>
                    <p className="my-details-desc">abulkanov.madi@gmail.com</p>
                    <p className="my-details-desc">Алматы</p>
                </div>
            </div>
            <div className={`description-about-me-block ${isVisible ? 'fade-in' : ''}`} ref={ref}>
                <h4 className="about-me-block-title">Приветствую!</h4>
                <p className="about-me-block-subtitle">Меня зовут Мади Абулканов, мне 27 лет. Я инженер-теплоэнергетик по образованию, но моя страсть к технологиям и желание создавать полезные продукты привели меня в мир IT. Я закончил курсы Full Stack разработчика, где освоил современные технологии, такие как React и Node.js.
                Вместе с командой я участвовал в разработке проекта Adal-Zan — платформы, предоставляющей юридическую помощь гражданам. Этот опыт позволил мне не только улучшить свои технические навыки, но и научиться работать в команде, решать сложные задачи и создавать продукты, которые действительно помогают людям.</p>
                <p className="about-me-block-subtitle">Я стремлюсь к постоянному развитию, изучаю новые технологии и подходы к разработке. Моя цель — создавать качественные, удобные и полезные приложения, которые делают жизнь людей проще и лучше.
                Если вы ищете ответственного и увлеченного разработчика, готового внести вклад в ваш проект, — давайте работать вместе!</p>
                <div className="social_networks">
                    <a className="social_icon" href='https://www.linkedin.com/in/abulkanov-madi/' target="_blank"><FaLinkedinIn size={27} color='#fff' /></a>
                    <a className="social_icon" href='https://github.com/MadiAbulkanov' target="_blank"><RiGithubLine size={27} color='#fff' /></a>
                    <a className="social_icon" href='https://vk.com/abulkanov' target="_blank"><FaVk size={27} color='#fff' /></a>
                    <a className="social_icon" href='https://t.me/Madi304' target="_blank"><FaTelegramPlane size={27} color='#fff' /></a>
                </div>
            </div>
        </div>
    )
}