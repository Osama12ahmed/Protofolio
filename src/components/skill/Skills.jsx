import './Skills.css'
import '../about/About.css'
import skill from './Skills-data'

export default function Skills() {
    return (
        <>
            <div id="skills" className="skill-container">
                <h1 className='header fade-in-up'>Skills</h1>
                <p className="fade-in-up animate-delay-1">Here are the technologies, tools, and frameworks I use to design and <br /> develop high-quality web applications.</p>
                <div className="skills">
                    {skill.map((item, index) => (
                        <div
                            key={index}
                            className='cont'
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                        </div>
                    ))}
                </div>

            </div>


        </>
    )
}