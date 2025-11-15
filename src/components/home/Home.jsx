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
                        <a href='https://drive.google.com/file/d/1WRjmUdGOBhmxd6JgMCrmDxkaSRfCfUGl/view?usp=drive_link' className='first'>Download CV <img src={download} alt=""  /></a>
                        <button
                            className='second'
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            About Me <img src={arrow} alt="" />
                        </button>
                    </div>
                    <div className="social-icon">
                        <a href="https://github.com/Osama12ahmed"><img src={github} alt="" /></a>
                        <a href="https://wa.me/201064035699"><img src={whats} alt="" /></a>
                        <a href="http://www.linkedin.com/in/osama-ahmed-67764727b"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
                <div className="right fade-in-right">
                    <img src={me} alt="" />
                </div>
            </div>
        </>
    )
}