import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/scraped/Black_White_Simple_Monochrome_Initial_Name_Logo.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = () => {
        const newLang = i18n.language === 'en' ? 'ua' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.gameplay'), href: '/gameplay' },
        { name: t('nav.cities'), href: '/cities' },
        { name: t('nav.routes'), href: '/routes' },
        { name: t('nav.contacts'), href: '#contacts' },
        { name: t('nav.whitepaper'), href: 'https://docs.openbisea.com/dexgo-white-paper/' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={logo} alt="dexGO" style={{ height: '40px' }} />
                    <span>dex<span>GO</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="md-flex items-center gap-6 hidden">
                    {navLinks.map((link, index) => {
                        const isExternal = link.href.startsWith('http');
                        return isExternal ? (
                            <a
                                key={index}
                                href={link.href}
                                className="nav-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={index}
                                to={link.href}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <button onClick={toggleLang} className="nav-link flex items-center" style={{ textTransform: 'uppercase' }}>
                        <Globe size={18} style={{ marginRight: '5px' }} />
                        {i18n.language === 'en' ? 'UA' : 'EN'}
                    </button>

                    <Link to="/marketplace" className="btn-primary" style={{ textDecoration: 'none' }}>
                        {t('nav.marketplace')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md-hidden" style={{ color: 'white' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'rgba(0,0,0,0.95)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    borderBottom: '1px solid #333'
                }}>
                    {navLinks.map((link, index) => {
                        const isExternal = link.href.startsWith('http');
                        return isExternal ? (
                            <a
                                key={index}
                                href={link.href}
                                className="nav-link"
                                style={{ fontSize: '1.2rem' }}
                                onClick={() => setIsOpen(false)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={index}
                                to={link.href}
                                className="nav-link"
                                style={{ fontSize: '1.2rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <div className="flex justify-between items-center">
                        <button onClick={toggleLang} className="nav-link flex items-center">
                            <Globe size={18} style={{ marginRight: '5px' }} />
                            <span style={{ textTransform: 'uppercase' }}>{i18n.language === 'en' ? 'UA' : 'EN'}</span>
                        </button>
                        <Link to="/marketplace" className="btn-primary" style={{ textDecoration: 'none' }}>
                            {t('nav.marketplace')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
