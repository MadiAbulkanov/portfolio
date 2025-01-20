import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { HomePage } from "../../components/HomePage/HomePage";
import { Resume } from "../../components/Resume/Resume";
import { Skills } from "../../components/Skills/Skills";
import { Work } from "../../components/Work/Work";

export const MainPage = () => {
    
    return (
        <div className="main-container">
            <Header id="header"/>
            <HomePage/>
            <AboutMe id="about"/>
            <Resume id="resume"/>
            <Skills id="skills"/>
            <Work id="work"/>
            <Footer />
        </div>
    )
};