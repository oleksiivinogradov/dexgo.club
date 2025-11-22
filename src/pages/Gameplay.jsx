import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, TrendingUp, Smartphone } from 'lucide-react';
import gameplayImage from '../assets/scraped/without_background_1.png';

const Gameplay = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">
                <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--primary-color)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                <h1 className="gradient-text text-center" style={{ fontSize: '3.5rem', marginBottom: '60px' }}>Gameplay</h1>

                <div className="grid md-grid-cols-2 gap-12 items-center" style={{ marginBottom: '80px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>How to Play dexGO</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                            dexGO is a move-to-earn game that combines physical activity with blockchain rewards.
                            Explore your city, discover interesting routes, and earn crypto while staying active.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="glass-panel">
                                <h3 style={{ color: 'var(--secondary-color)', marginBottom: '10px' }}>
                                    <MapPin size={24} style={{ display: 'inline', marginRight: '10px' }} />
                                    Explore Routes
                                </h3>
                                <p>Choose from curated routes in your city and start walking or running.</p>
                            </div>
                            <div className="glass-panel">
                                <h3 style={{ color: 'var(--secondary-color)', marginBottom: '10px' }}>
                                    <Smartphone size={24} style={{ display: 'inline', marginRight: '10px' }} />
                                    Track Progress
                                </h3>
                                <p>Your NFT sneakers track your movement and distance traveled.</p>
                            </div>
                            <div className="glass-panel">
                                <h3 style={{ color: 'var(--secondary-color)', marginBottom: '10px' }}>
                                    <TrendingUp size={24} style={{ display: 'inline', marginRight: '10px' }} />
                                    Earn Rewards
                                </h3>
                                <p>Complete routes to earn tokens and unlock achievements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={gameplayImage} alt="Gameplay" style={{ width: '100%', maxWidth: '500px' }} />
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '60px' }}>
                    <Link to="/marketplace" className="btn-primary" style={{ textDecoration: 'none' }}>
                        Get Started with NFT Sneakers
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gameplay;
