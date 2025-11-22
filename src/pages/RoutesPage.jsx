import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Navigation } from 'lucide-react';
import routesImage from '../assets/scraped/vap_1.png';

const RoutesPage = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">
                <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--primary-color)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                <h1 className="gradient-text text-center" style={{ fontSize: '3.5rem', marginBottom: '30px' }}>Explore Routes</h1>
                <p className="text-center" style={{ fontSize: '1.2rem', color: '#888', maxWidth: '700px', margin: '0 auto 60px auto' }}>
                    Curated paths through the most interesting places in your city
                </p>

                <div className="grid md-grid-cols-2 gap-12 items-center" style={{ marginBottom: '60px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Discover Kyiv</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                            Our routes take you through the most interesting and beautiful places in Kyiv.
                            From historical landmarks to modern architecture, parks, and hidden gems.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Podil', 'Khreshchatyk', 'Pechersk', 'Andriivskyi Descent', 'Vozdvyzhenka'].map((place, i) => (
                                <span key={i} style={{ fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', border: '1px solid #333' }}>
                                    {place}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #333' }}>
                        <img src={routesImage} alt="Routes in Kyiv" style={{ width: '100%' }} />
                    </div>
                </div>

                <div className="grid md-grid-cols-3 gap-6">
                    <div className="glass-panel">
                        <Navigation size={30} style={{ color: 'var(--primary-color)', marginBottom: '15px' }} />
                        <h3 style={{ marginBottom: '10px' }}>Historical Routes</h3>
                        <p style={{ fontSize: '0.95rem' }}>Explore ancient streets and learn about the city's rich history.</p>
                    </div>
                    <div className="glass-panel">
                        <Navigation size={30} style={{ color: 'var(--secondary-color)', marginBottom: '15px' }} />
                        <h3 style={{ marginBottom: '10px' }}>Scenic Paths</h3>
                        <p style={{ fontSize: '0.95rem' }}>Beautiful parks, viewpoints, and natural landscapes.</p>
                    </div>
                    <div className="glass-panel">
                        <Navigation size={30} style={{ color: 'var(--primary-color)', marginBottom: '15px' }} />
                        <h3 style={{ marginBottom: '10px' }}>Urban Adventures</h3>
                        <p style={{ fontSize: '0.95rem' }}>Modern districts, street art, and contemporary culture.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoutesPage;
