import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import citiesImage from '../assets/scraped/cities-map.png';

const Cities = () => {
    const cities = [
        { flag: '🇺🇦', name: 'Kyiv, Ukraine', tiktok: 'https://www.tiktok.com/@dexgo.ua' },
        { flag: '🇺🇦', name: 'Lviv, Ukraine', tiktok: 'https://www.tiktok.com/@dexgo.lviv' },
        { flag: '🇪🇸', name: 'Madrid, Spain', tiktok: 'https://www.tiktok.com/@dexgo.es' },
        { flag: '🇬🇧', name: 'London, UK', tiktok: 'https://www.tiktok.com/@dexgo.uk' },
        { flag: '🇰🇷', name: 'Seoul, South Korea', tiktok: 'https://www.tiktok.com/@dexgo_krw' },
        { flag: '🇺🇸', name: 'Los Angeles, USA', tiktok: 'https://www.tiktok.com/@dexgo.la' },
        { flag: '🇨🇭', name: 'Zurich, Switzerland', tiktok: 'https://www.tiktok.com/@dexgo.ch' }
    ];

    return (
        <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">
                <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--primary-color)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                <h1 className="gradient-text text-center" style={{ fontSize: '3.5rem', marginBottom: '30px' }}>DexGO world locations</h1>
                <p className="text-center" style={{ fontSize: '1.2rem', color: '#888', maxWidth: '800px', margin: '0 auto 20px auto' }}>
                    Currently, DexGO is represented in 21 countries of the world: USA, United Kingdom, Canada, Ukraine, Switzerland, Spain, South Korea and others.
                </p>

                <div className="grid md-grid-cols-2 gap-12 items-center" style={{ marginTop: '60px' }}>
                    <div className="flex justify-center">
                        <img src={citiesImage} alt="Cities" style={{ width: '100%', maxWidth: '500px', borderRadius: '20px' }} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Our representative in cities:</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {cities.map((city, i) => (
                                <div key={i} className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ fontSize: '1.5rem' }}>{city.flag}</span>
                                        <span style={{ fontSize: '1.1rem' }}>{city.name}</span>
                                    </div>
                                    <a
                                        href={city.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}
                                    >
                                        TikTok
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cities;
