import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mail } from 'lucide-react';
import tiktokIcon from '../assets/scraped/1641853397_1-abrakadabra-fun-p-logo-tiktok-png-1.png';
import twitterIcon from '../assets/scraped/pngimg_com_-_twitter_PNG15.png';
import telegramIcon from '../assets/scraped/tel.png';
import instagramIcon from '../assets/scraped/33.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="contacts" style={{ background: '#000', padding: '80px 0 40px 0', borderTop: '1px solid #222' }}>
            <div className="container">
                <div className="grid md-grid-cols-2 gap-8" style={{ marginBottom: '60px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{t('footer.beta')}</h2>
                        <div className="flex" style={{ maxWidth: '400px' }}>
                            <input
                                type="email"
                                placeholder={t('footer.emailPlaceholder')}
                                style={{
                                    flex: 1,
                                    background: '#111',
                                    border: '1px solid #333',
                                    borderRight: 'none',
                                    borderRadius: '30px 0 0 30px',
                                    padding: '12px 24px',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                            <button style={{
                                background: 'var(--primary-color)',
                                color: 'white',
                                padding: '12px 30px',
                                borderRadius: '0 30px 30px 0',
                                fontWeight: 'bold'
                            }}>
                                {t('footer.send')}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center" style={{ alignItems: 'flex-end', gap: '20px' }}>
                        <div className="flex gap-6 items-center">
                            <a href="https://docs.openbisea.com/dexgo-white-paper/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>WhitePaper</a>
                            <a href="/pitchdeck.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>PitchDeck</a>
                        </div>
                        <div className="flex gap-6">
                            <a href="https://www.tiktok.com/@dexgo.ua" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }} title="Tik-Tok">
                                <img src={tiktokIcon} alt="TikTok" style={{ width: '24px', height: '24px' }} />
                            </a>
                            <a href="https://twitter.com/dexgo_official" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }} title="Twitter">
                                <img src={twitterIcon} alt="Twitter" style={{ width: '24px', height: '24px' }} />
                            </a>
                            <a href="https://t.me/dexgo_ua" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }} title="Telegram">
                                <img src={telegramIcon} alt="Telegram" style={{ width: '24px', height: '24px' }} />
                            </a>
                            <a href="https://www.instagram.com/dexgo.ua/" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }} title="Instagram">
                                <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #222', paddingTop: '30px', textAlign: 'center', color: '#555', fontSize: '0.9rem' }}>
                    {t('footer.rights')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
