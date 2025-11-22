import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import sneakerImage from '../assets/scraped/Type5_2.png';

const Robots = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">
                <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--primary-color)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                <div className="grid md-grid-cols-2 gap-8 items-center">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#111', borderRadius: '20px', padding: '40px' }}>
                        <img src={sneakerImage} alt="Robots" style={{ width: '100%', maxWidth: '400px' }} />
                    </div>

                    <div>
                        <h6 style={{ color: '#888', marginBottom: '10px' }}>Home / <Link to="/marketplace" style={{ color: 'var(--primary-color)' }}>Marketplace</Link></h6>
                        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>Robots</h1>
                        <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '30px' }}>USD 117.00</h2>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
                            The ultimate elite sneakers. With unlimited stamina capacity, these are for
                            professional explorers who never stop discovering new routes and locations.
                        </p>

                        <a
                            href="https://pay.fondy.eu/s/AiGI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                        >
                            <ShoppingCart size={20} />
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Robots;
