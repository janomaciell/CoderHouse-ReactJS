import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CardWidget/CardWidget'; 

const FAKE_CATEGORIES = [
    { id: 1, label: 'Electrodomésticos' },
    { id: 2, label: 'Tecnología' },
    { id: 3, label: 'Hogar' },
    { id: 4, label: 'Deportes' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleColorMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : ''} navbar-expand-lg navbar-light bg-light`}>
            <div className="container-fluid navbar-container">
                <Link to="/" className="navbar-logo navbar-brand">
                    Mi Logo
                </Link>

                <button
                    className={`hamburger navbar-toggler ${isOpen ? 'active' : ''}`}
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto"> 
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorías
                            </Link>
                            <ul className="dropdown-menu">
                                {FAKE_CATEGORIES.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            to={`/category/${category.id}`}
                                            className="dropdown-item"
                                            onClick={closeMenu}
                                        >
                                            {category.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={toggleColorMode}
                                className="theme-toggle nav-link btn btn-link"
                                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {isDarkMode ? '☀️ Dia' : '🌙 Noche'}
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="navbar-actions">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;