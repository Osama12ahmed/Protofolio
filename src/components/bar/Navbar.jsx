import './navbar.css';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="nav-container">
                <nav className="nav-bar">
                    <div className="nav-content">
                        <div className="nav-logo">
                            <h1 className="logo-icon">Osama</h1>
                        </div>
                        <button
                            className={`hamburger ${menuOpen ? 'active' : ''}`}
                            aria-label="Toggle navigation"
                            aria-expanded={menuOpen}
                            aria-controls="primary-navigation"
                            onClick={handleToggleMenu}
                        >
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                        </button>

                        <div id="primary-navigation" className={`nav-actions ${menuOpen ? 'open' : ''}`} onClick={handleCloseMenu}>
                            <a className="nav-button" href="#home">Home</a>
                            <a className="nav-button" href="#about">About</a>
                            <a className="nav-button" href="#skills">Skills</a>
                            <a className="nav-button" href="#projects">Projects</a>
                            <a className="nav-button" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
