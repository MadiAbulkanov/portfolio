import './Resume.css';
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';

export const Resume = ({ id }:{ id: string }) => {
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
        <div className={`resume-section ${isVisible ? 'fade-in' : ''}`} ref={ref} id={id}>
            <h1 className="resume-section-title">Опыт работы</h1>
            <div className="timeline-section">
                <ul className="timeline">
                    <li className="timeline-heading">
                        <h3>Опыт работы</h3>
                    </li>
                    <li className="timeline-box timeline-unverted">
                        <div className="timeline-badge"><MdOutlineWorkOutline className="badge-icon"/></div>
                        <div className="timeline-panel">
                            <div className="timeline-panel-heading">
                                <h3>Программист-разработчик</h3>
                                <p>Attractor School Almaty - Сентябрь 2024 - Декабрь 2024</p>
                            </div>
                            <p className="timeline-body">Написание проекта "Adalzan" - предоставляющий пользователям удобный и доступный способ получения квалифицированной юридической помощи</p>
                        </div>
                    </li>
                    <li className="timeline-box timeline-inverted">
                        <div className="timeline-badge"><MdOutlineWorkOutline className="badge-icon"/></div>
                        <div className="timeline-panel">
                            <div className="timeline-panel-heading">
                                <h3>Учебный мастер, Руководитель ОП "Теплоэнергетика"</h3>
                                <p>КИнЭУ им. М.Дулатова - Январь 2019 - Июнь 2021</p>
                            </div>
                            <p className="timeline-body">Обязанности на должности учебного мастера:
Работал с документами кафедры, следил за состоянием учебных мест, техники, приборов,
оборудования, за их обновлением.
Следил за обновлением учебно-методических пособий, макетов, стендов.
Обязанности на должности руководителя ОП "Теплоэнергетика":
Составление и обновление образовательной программы.
Разработка учебных программ и методических материалов.
Составление силлабусов.
Контроль за правильным составлением силлабусов преподавателями кафедры.
</p>
                        </div>
                    </li>
                    <li className="timeline-heading">
                        <h3>Образование</h3>
                    </li>
                    <li className="timeline-box timeline-unverted">
                        <div className="timeline-badge"><FaUserGraduate className="badge-icon" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-panel-heading">
                                <h3>JavaScript веб-разработчик</h3>
                                <p>Attractor School Almaty - Сентябрь 2023 - Декабрь 2024</p>
                            </div>
                            <p className="timeline-body">За 15 месяцев обучения в Attractor School Almaty я
получил теоретические знания и практический опыт в разработке проектов. Я активно
изучал HTML, CSS, JavaScript, React и Node.js а также работал с современными
инструментами разработки, такими как Git и REST API.</p>
                        </div>
                    </li>
                    <li className="timeline-box timeline-inverted">
                        <div className="timeline-badge"><FaUserGraduate className="badge-icon" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-panel-heading">
                                <h3>Инженер-теплоэнергетик</h3>
                                <p>КИнЭУ им. М.Дулатова - Сентябрь 2017 - Июнь 2020</p>
                            </div>
                            <p className="timeline-body">Бакалавр технических наук, Теплоэнергетика</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}