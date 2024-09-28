import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header bg-light py-3">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        {/* Menu cho Desktop */}
                        <nav className="d-none d-lg-block">
                            <ul className="list-unstyled d-flex mb-0 gap-4">
                                <li><Link to="/" style={{ color: '#000', textDecoration: 'none' }}>Home</Link></li>
                                <li><Link to="/about" style={{ color: '#000', textDecoration: 'none' }}>About us</Link></li>
                                <li><Link to="/ListProduct" style={{ color: '#000', textDecoration: 'none' }}>List Product</Link></li>
                                <li><Link to="/contact" style={{ color: '#000', textDecoration: 'none' }}>Contact</Link></li>
                                <li><Link to="/Create" style={{ color: '#000', textDecoration: 'none' }}>Add new Product</Link></li>
                            </ul>
                        </nav>
                        {/* Button toggle cho mobile */}
                        <button className="btn d-lg-none" onClick={toggleMenu} style={{ fontSize: '1.5rem', background: 'none', border: 'none' }}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                {/* Menu cho mobile */}
                {isMenuOpen && (
                    <nav className="d-lg-none mt-3" style={{ backgroundColor: '#f8f9fa', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <ul className="list-unstyled">
                            <li><Link to="/" style={{ color: '#000', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }}>Home</Link></li>
                            <li><Link to="/about" style={{ color: '#000', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }}>About us</Link></li>
                            <li><Link to="/ListProduct" style={{ color: '#000', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }}>List Product</Link></li>
                            <li><Link to="/contact" style={{ color: '#000', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }}>Contact</Link></li>
                            <li><Link to="/Create" style={{ color: '#000', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }}>Add new Product</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
