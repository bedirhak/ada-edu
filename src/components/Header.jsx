import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/adaLogo.jpg";
import "../styles/header.scss";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { path: "/", label: "Ana Sayfa" },
        { path: "/about", label: "Hakkımızda" },
        { path: "/services", label: "Hizmetlerimiz" },
        { path: "/contact", label: "İletişim" },
    ];

    return (
        <header className="header">
            <div className="header__container">
                {/* Logo and Brand */}
                <Link to="/" className="header__logo-link">
                    <img src={logo} alt="Ada Edu Logo" className="header__logo" />
                    <div className="header__brand">
                        <h1 className="header__title">Ada Edu</h1>
                        <span className="header__subtitle">Italya Egitim Danismanligi</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header__nav">
                    <ul className="header__menu">
                        {menuItems.map((item) => (
                            <li key={item.path} className="header__menu-item">
                                <Link
                                    to={item.path}
                                    className={`header__menu-link ${isActive(item.path) ? "active" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Buttons */}
                <div className="header__cta">
                    <Link to="/services" className="header__button header__button--outline">
                        Hizmetlerimiz
                    </Link>
                    <Link to="/contact" className="header__button header__button--primary">
                        Bilgi Al
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`header__mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`header__mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <ul className="header__mobile-menu-list">
                    {menuItems.map((item) => (
                        <li key={item.path} className="header__mobile-menu-item">
                            <Link
                                to={item.path}
                                className={`header__mobile-menu-link ${isActive(item.path) ? "active" : ""}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="header__mobile-cta">
                    <Link
                        to="/services"
                        className="header__button header__button--outline"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Hizmetlerimiz
                    </Link>
                    <Link
                        to="/contact"
                        className="header__button header__button--primary"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Bilgi Al
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
