import './About.css'
import '../home/Home.css'
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/Programming Computer.json";
import arrow from '../../assets/right-arrow.png'

export default function About() {
    return (
        <>
            <div id="about" className="about-container">
                <h1 className='header fade-in-up'>About Me</h1>
                <div className="about">
                    <div className="left-about fade-in-left">
                        <h2 className='edit'>Hello, I'm</h2>
                        <h2>Osama Ahmed</h2>
                        <p>I am a 22-year-old Frontend Developer and UI/UX Designer with over two years of hands-on experience in modern web technologies. Currently pursuing my Bachelor's degree at the Faculty of Computers and Information, Egyptian E-Learning University (EELU), Assiut branch – expected graduation in 2026. I am passionate about creating responsive, user-friendly, and visually appealing web applications that combine solid technical development with thoughtful design principles.</p>
                        <div className="btn">
                            <button className='second'>Projects <img src={arrow} alt="" /></button>
                            <button className='second'>Skills <img src={arrow} alt="" /></button>
                        </div>
                    </div>
                    <div className="right-about fade-in-right">
                        <Player
                            autoplay
                            loop
                            src={animationData}
                            className='lottie-player'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}