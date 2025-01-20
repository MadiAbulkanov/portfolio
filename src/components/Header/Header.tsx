import './Header.css';

export const Header = ({ id }:{ id: string }) => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header id={id}>
            <div className="header-wrap">
                <button className="nav-button" onClick={() => handleScroll('about')}>Обо Мне</button>
                <button className="nav-button" onClick={() => handleScroll('resume')}>Опыт работы</button>
                <button className="nav-button" onClick={() => handleScroll('skills')}>Навыки</button>
                <button className="nav-button" onClick={() => handleScroll('work')}>Мои работы</button>
            </div>
        </header>
    )
}