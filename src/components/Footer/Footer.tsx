import './Footer.css';

export const Footer = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer>
            <div className="footer-wrap">
                <button className="nav-button" onClick={() => handleScroll('header')}>Главная</button>
                <button className="nav-button" onClick={() => handleScroll('about')}>Обо Мне</button>
                <button className="nav-button" onClick={() => handleScroll('resume')}>Опыт работы</button>
                <button className="nav-button" onClick={() => handleScroll('skills')}>Навыки</button>
                <button className="nav-button" onClick={() => handleScroll('work')}>Мои работы</button>
            </div>
        </footer>
    )
}