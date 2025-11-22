import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Smartphone, TrendingUp, Users, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/cyberpunk_city.png';
import appStore from '../assets/scraped/vecteezy_app-store-download-button-in-white-colors-download-on-the_12871374_558.png';
import googlePlay from '../assets/scraped/vecteezy_google-play-store-download-button-in-white-colors-download_12871364_282.png';
import gameplayImage from '../assets/scraped/without_background_1.png';
import routesImage from '../assets/scraped/vap_1.png';
import designImage from '../assets/scraped/Дизайн_для_сайта.png';
import arImage from '../assets/scraped/without_background_3.png';
import sneaker1 from '../assets/scraped/Type1.png';
import sneaker2 from '../assets/scraped/Type2_2.png';
import sneaker3 from '../assets/scraped/Type3.png';
import sneaker4 from '../assets/scraped/Type4.png';
import sneaker5 from '../assets/scraped/Type5_2.png';
import founder333 from '../assets/scraped/photo_2023-02-28_18_07_04.jpeg';
import founderPhoto from '../assets/scraped/2023-02-28_18_06_01.jpg';
import oleksiiPhoto from '../assets/scraped/oleksii-vinogradov.jpg';
import eugenePhoto from '../assets/scraped/Evgen_Luzgin.jpeg';
import linkedinIcon from '../assets/scraped/287f6f_a10e1f67922d4eb58c6294d5c3cacf10~mv2.jpeg';

const Section = ({ children, className = "", id = "" }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={className}
        style={{ padding: '80px 0' }}
    >
        {children}
    </motion.section>
);

const Home = () => {
    const { t } = useTranslation();
    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* Chat Widget */}
            <a href="https://t.me/dexgo_ua" target="_blank" rel="noopener noreferrer" className="chat-widget">
                <MessageCircle size={30} color="white" />
            </a>

            {/* Hero Section */}
            <div className="hero-section">
                <img src={bgImage} alt="Cyberpunk City" className="hero-bg" />
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-title"
                        >
                            {t('hero.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hero-subtitle"
                        >
                            {t('hero.subtitle')}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex gap-4"
                            style={{ flexWrap: 'wrap' }}
                        >
                            <a href="https://dexgo.onelink.me/Vav2/web" target="_blank" rel="noopener noreferrer">
                                <img src={appStore} alt="Download on App Store" style={{ height: '60px', cursor: 'pointer' }} />
                            </a>
                            <a href="https://dexgo.onelink.me/Vav2/web" target="_blank" rel="noopener noreferrer">
                                <img src={googlePlay} alt="Get it on Google Play" style={{ height: '60px', cursor: 'pointer' }} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* What Is / Mission */}
            <Section id="gameplay">
                <div className="container grid md-grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="gradient-text">{t('whatIs.title')}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {t('whatIs.desc')}
                        </p>
                        <h3 style={{ fontSize: '1.2rem', margin: '20px 0', color: 'var(--secondary-color)' }}>
                            {t('whatIs.gameplayTitle')}
                        </h3>
                        <div className="glass-panel" style={{ marginTop: '30px' }}>
                            <h3 style={{ color: 'white' }}>{t('mission.title')}</h3>
                            <p>{t('mission.desc')}</p>
                            <div className="flex items-center gap-4" style={{ marginTop: '20px' }}>
                                <div style={{ width: '50px', height: '50px', background: '#333', borderRadius: '50%', overflow: 'hidden' }}>
                                    <img src={oleksiiPhoto} alt="Oleksii Vynogradov" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold', color: 'white', marginBottom: '0' }}>{t('mission.founder')}</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginBottom: '0' }}>{t('mission.role')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative" style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #333' }}>
                            <img src={routesImage} alt="Routes in Kyiv" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}></div>
                            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                                <h3 style={{ fontSize: '2rem' }}>{t('routes.title')}</h3>
                                <p style={{ color: 'var(--primary-color)' }}>{t('routes.subtitle')}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {t('routes.places', { returnObjects: true }).map((place, i) => (
                                        <span key={i} style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px' }}>{place}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="glass-panel">
                            <h3>{t('routes.descTitle')}</h3>
                            <p>{t('routes.desc')}</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* AR Section */}
            <Section>
                <div className="container text-center">
                    <h2>{t('features.ar.title')}</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 50px auto' }}>{t('features.ar.desc')}</p>
                </div>
            </Section>

            {/* Earn Section */}
            <Section style={{ background: 'linear-gradient(to bottom, #050505, #111)' }}>
                <div className="container flex flex-col md-flex md-grid-cols-2 gap-8 items-center">
                    <div className="md-w-half">
                        <h2>{t('features.earn.title')}</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-6">
                                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#222' }}>01</span>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{t('features.earn.step1')}</h4>
                                    <p>Complete routes and earn tokens instantly.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#222' }}>02</span>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{t('features.earn.step2')}</h4>
                                    <p>Build your network and earn from referrals.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#222' }}>03</span>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{t('features.earn.step3')}</h4>
                                    <p>Trade and upgrade your NFT assets.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '40px' }}>
                            <a href="https://t.me/dexgo_ua" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 style={{ color: 'var(--primary-color)', cursor: 'pointer' }}>{t('features.earn.cta')}</h3>
                            </a>
                        </div>
                    </div>
                    <div className="md-w-half relative">
                        <img
                            src={designImage}
                            alt="Earn with dexGO"
                            style={{ width: '100%', borderRadius: '20px', border: '1px solid #333' }}
                        />
                    </div>
                </div>
            </Section>

            {/* Advantages */}
            <Section>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '50px' }}>{t('advantages.title')}</h2>
                    <div className="grid md-grid-cols-2 md-grid-cols-4 gap-6">
                        {t('advantages.list', { returnObjects: true }).map((item, index) => (
                            <div key={index} className="glass-panel">
                                <h3 style={{ color: 'var(--secondary-color)', fontSize: '1.2rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Sneakers */}
            <Section style={{ background: '#000' }}>
                <div className="container text-center">
                    <h2>{t('sneakers.title')}</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 50px auto' }}>{t('sneakers.desc')}</p>

                    <div className="flex gap-6" style={{ overflowX: 'auto', paddingBottom: '20px', justifyContent: 'flex-start' }}>
                        {t('sneakers.types', { returnObjects: true }).map((type, index) => {
                            const sneakerImages = [sneaker1, sneaker2, sneaker3, sneaker4, sneaker5];
                            return (
                                <div key={index} className="glass-panel" style={{ minWidth: '280px', textAlign: 'left' }}>
                                    <div style={{
                                        aspectRatio: '1/1', background: '#111', borderRadius: '15px', marginBottom: '20px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
                                    }}>
                                        <img src={sneakerImages[index]} alt={type.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                    <h3>{type.name}</h3>
                                    <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '5px' }}>Stamina</p>
                                    <div className="flex justify-between items-center" style={{ marginTop: '15px' }}>
                                        <span style={{ fontSize: '0.9rem', color: '#666' }}>{type.dist}</span>
                                        <Link
                                            to={[
                                                '/spacepioneers',
                                                '/trailblazer',
                                                '/toptokers',
                                                '/cyberwarriors',
                                                '/robots'
                                            ][index]}
                                            style={{ color: 'var(--primary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                                        >
                                            Details <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                                        </Link>
                                    </div>
                                    <Link
                                        to={[
                                            '/spacepioneers',
                                            '/trailblazer',
                                            '/toptokers',
                                            '/cyberwarriors',
                                            '/robots'
                                        ][index]}
                                        className="btn-primary"
                                        style={{ width: '100%', marginTop: '10px', textDecoration: 'none', display: 'block', textAlign: 'center' }}
                                    >
                                        Buy
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <div style={{ marginTop: '50px', textAlign: 'left', maxWidth: '800px', margin: '50px auto 0 auto' }}>
                        <p>{t('sneakers.details')}</p>
                        <Link to="/marketplace" className="btn-primary" style={{ marginTop: '20px', textDecoration: 'none', display: 'inline-block' }}>{t('sneakers.marketplace')}</Link>
                    </div>
                </div>
            </Section>

            {/* Roadmap */}
            <Section>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '50px' }}>{t('roadmap.title')}</h2>
                    <div style={{ borderLeft: '2px solid #333', marginLeft: '20px', paddingLeft: '30px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {t('roadmap.items', { returnObjects: true }).map((item, index) => (
                            <div key={index} className="relative">
                                <div style={{ position: 'absolute', left: '-39px', top: '0', width: '16px', height: '16px', background: index === 0 ? 'var(--primary-color)' : '#333', borderRadius: '50%', boxShadow: index === 0 ? '0 0 10px var(--primary-color)' : 'none' }}></div>
                                <h3>{item.year}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Team */}
            <Section style={{ background: 'rgba(0,0,0,0.5)' }}>
                <div className="container text-center">
                    <h2 style={{ marginBottom: '10px' }}>{t('team.title')}</h2>
                    <p style={{ marginBottom: '50px', color: '#888' }}>{t('team.subtitle')}</p>
                    <div className="grid md-grid-cols-3 gap-8">
                        {t('team.members', { returnObjects: true }).map((member, index) => {
                            const teamPhotos = [oleksiiPhoto, founder333, eugenePhoto];
                            return (
                                <div key={index} className="glass-panel">
                                    <div style={{ width: '100px', height: '100px', background: '#333', borderRadius: '50%', margin: '0 auto 20px auto', overflow: 'hidden' }}>
                                        <img src={teamPhotos[index]} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{member.role}</p>
                                    <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>{member.bio}</p>
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '15px' }}>
                                            <img src={linkedinIcon} alt="LinkedIn" style={{ width: '25px', height: '25px', cursor: 'pointer', opacity: 0.8, transition: '0.3s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8} />
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
