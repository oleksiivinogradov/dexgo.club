import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import sneaker1 from '../assets/scraped/Type1.png';
import sneaker2 from '../assets/scraped/Type2_2.png';
import sneaker3 from '../assets/scraped/Type3.png';
import sneaker4 from '../assets/scraped/Type4.png';
import sneaker5 from '../assets/scraped/Type5_2.png';

const Marketplace = () => {
    const sneakers = [
        { id: 1, name: 'Space Pioneers', price: 'USD 15.60', distance: '10 km', image: sneaker1, link: '/spacepioneers' },
        { id: 2, name: 'Trailblazer', price: 'USD 29.90', distance: '20 km', image: sneaker2, link: '/trailblazer' },
        { id: 3, name: 'Top Tokers', price: 'USD 46.80', distance: '30 km', image: sneaker3, link: '/toptokers' },
        { id: 4, name: 'Cyberwarriors', price: 'USD 72.80', distance: '40 km', image: sneaker4, link: '/cyberwarriors' },
        { id: 5, name: 'Robots', price: 'USD 117.00', distance: 'Unlimited', image: sneaker5, link: '/robots' }
    ];

    return (
        <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">
                <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--primary-color)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                <h1 className="gradient-text text-center" style={{ fontSize: '3.5rem', marginBottom: '30px' }}>NFT Marketplace</h1>
                <p className="text-center" style={{ fontSize: '1.2rem', color: '#888', maxWidth: '700px', margin: '0 auto 60px auto' }}>
                    Choose your perfect NFT sneakers and start earning while exploring
                </p>

                <div className="grid md-grid-cols-2 md-grid-cols-3 gap-8">
                    {sneakers.map((sneaker) => (
                        <div key={sneaker.id} className="glass-panel" style={{ textAlign: 'center' }}>
                            <div style={{
                                aspectRatio: '1/1', background: '#111', borderRadius: '15px', marginBottom: '20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '20px'
                            }}>
                                <img src={sneaker.image} alt={sneaker.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <h3 style={{ marginBottom: '10px' }}>{sneaker.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '10px' }}>Stamina: {sneaker.distance}</p>
                            <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '20px' }}>{sneaker.price}</p>
                            <Link
                                to={sneaker.link}
                                className="btn-primary"
                                style={{ width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            >
                                <ShoppingCart size={18} />
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
