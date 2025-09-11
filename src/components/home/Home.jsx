import './Home.css'
import TextType from '../TextType'
import download from '../../assets/arrow.png'
import arrow from '../../assets/right-arrow.png'
import me from '../../assets/me.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/outline.png'
import whats from '../../assets/whatsapp.png'

export default function Home() {
    return (
        <>
            <div id="home" className="home-container">
                <div className="left fade-in-left">
                    <div className="custom-text">
                        <p>Frontend</p>
                        <p className="gradient-text">Developer</p>
                    </div>
                    <TextType
                        text={["Building modern, responsive, and interactive websites that bring ideas to life.", "Designing intuitive, user-friendly interfaces that deliver seamless experiences."]}
                        typingSpeed={45}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className='type-text'
                    />
                    <p className="details">I craft user-friendly, responsive, and visually appealing websites that bring ideas to life on the web.</p>
                    <div className="btn">
                        <button className='first'>Download CV <img src={download} alt="" /></button>
                        <button className='second'>About Me <img src={arrow} alt="" /></button>
                    </div>
                    <div className="social-icon">
                        <img src={github} alt="" />
                        <img src={whats} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="right fade-in-right">
                    <img src={me} alt="" />
                </div>
            </div>
        </>
    )
}