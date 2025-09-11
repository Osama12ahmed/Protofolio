import './Projects.css'
import '../about/About.css'
import project from './Projects-data'
import { useNavigate } from "react-router-dom";

export default function Projects() {
    // const navigate = useNavigate();

    return (
        <>
            <div id="projects" className="projects-container">
                <h1 className='header fade-in-up'>Projects</h1>
                <p className="fade-in-up animate-delay-1">A collection of projects I've worked on, showcasing my frontend development skills and creativity.</p>
                <div className="projects">
                    {project.map((proj, index) => (
                        <div
                            key={index}
                            className={`project-card scale-in animate-delay-${(index % 5) + 1}`}
                        >
                            <img src={proj.image} alt={proj.name} />
                            <div className="project-card-content">
                                <h2>{proj.name}</h2>
                                <p>{proj.description}</p>

                                {/* عرض الـ cat كـ badges */}
                                <div className="project-cat">
                                    {proj.cat.map((tech, i) => (
                                        <span key={i} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-btns">
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn primary"
                                    >
                                        <span className="project-btn-icon">🌐</span>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}