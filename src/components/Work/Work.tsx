import './Work.css';
import adalZan from '../../assets/adal-zan.jpg'
import droneStore from '../../assets/drone-store.jpg'
import pokemonList from '../../assets/pokemon-list.jpg'
import tvSeriesSearch from '../../assets/tv-series-search.jpg'
import countryData from '../../assets/country-data.jpg'
import weatherBot from '../../assets/weather-bot.jpg'
import { useEffect, useRef, useState } from 'react';

export const Work = ({ id }: { id: string }) => {
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
        <div className={`works-section ${isVisible ? 'fade-in' : ''}`} ref={ref} id={id}>
            <h1 className="works-section-title">Мои работы</h1>
            <div className="work-cards">
                <div className="project-card">
                    <a className="project-img" href='https://adalzan.kz/' target="_blank">
                        <img src={adalZan} alt="project-img" className="project-page-img" />
                    </a>
                    <h3 className="project-title">Adal zan</h3>
                    <a className="project-repo" href='https://github.com/MadiAbulkanov/adal-zan.git' target="_blank"><p>Репозиторий проекта</p></a>
                    <p className="project-desc">Проект "Adal zan" - предоставляет пользователям удобный и доступный способ получения
                        квалифицированной юридической помощи.</p>
                </div>
                <div className="project-card">
                    <a className="project-img" href='https://online-store-liard-alpha.vercel.app/' target="_blank">
                        <img src={droneStore} alt="project-img" className="project-page-img" />
                    </a>
                    <h3 className="project-title">Drone store</h3>
                    <a className="project-repo" href='https://github.com/MadiAbulkanov/onlineStore.git' target="_blank"><p>Репозиторий проекта</p></a>
                    <p className="project-desc">Этот проект представляет собой онлайн-магазин дронов, позволяющий пользователям просматривать, сравнивать и добавлять в корзину различные модели дронов.</p>
                </div>
                <div className="project-card">
                    <a className="project-img" href='https://list-of-pokemon-two.vercel.app/#' target="_blank">
                        <img src={pokemonList} alt="project-img" className="project-page-img" />
                    </a>
                    <h3 className="project-title">Pokemon list</h3>
                    <a className="project-repo" href='https://github.com/MadiAbulkanov/listOfPokemon.git' target="_blank"><p>Репозиторий проекта</p></a>
                    <p className="project-desc">Программа - список покемонов.</p>
                </div>
                <div className="project-card">
                    <a className="project-img" href='https://country-data-indol.vercel.app/' target="_blank">
                        <img src={countryData} alt="project-img" className="project-page-img" />
                    </a>
                    <h3 className="project-title">Country data</h3>
                    <a className="project-repo" href='https://github.com/MadiAbulkanov/countryData.git' target="_blank"><p>Репозиторий проекта</p></a>
                    <p className="project-desc">Приложение отображающее данные выбранной страны</p>
                </div>
                <div className="project-card">
                    <a className="project-img" href='https://tv-series-search-application.vercel.app/' target="_blank">
                        <img src={tvSeriesSearch} alt="project-img" className="project-page-img" />
                    </a>
                    <h3 className="project-title">TV Series Search</h3>
                    <a className="project-repo" href='https://github.com/MadiAbulkanov/TVSeriesSearchApplication.git' target="_blank"><p>Репозиторий проекта</p></a>
                    <p className="project-desc">Приложение по поиску информации о телевизионных сериалах</p>
                </div>
                <div className="project-card">
                    <a className="project-img" href='https://t.me/mdiweatherbot' target="_blank">
                        <img src={weatherBot} alt="project-img" className="project-page-img" />
                    </a>
                    <h3 className="project-title">Weather Bot</h3>
                    <a className="project-repo" href='https://github.com/MadiAbulkanov/weather-bot' target="_blank"><p>Репозиторий проекта</p></a>
                    <p className="project-desc">Telegram-бот для получения текущей погоды по вашей геопозиции.</p>
                </div>
            </div>
        </div>
    )
}