import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, Mail } from 'lucide-react';

const Section = ({ children, className = "", id = "" }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={className}
        style={{ padding: '40px 0' }}
    >
        {children}
    </motion.section>
);

const PrivacyPolicySeaBattle = () => {
    return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff' }}>
            {/* Hero Section */}
            <div style={{ 
                background: 'linear-gradient(to bottom, rgba(0,220,255,0.1), transparent)', 
                padding: '80px 0 40px 0',
                borderBottom: '1px solid #222'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <Shield size={60} style={{ color: 'var(--primary-color)', marginBottom: '20px' }} />
                        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
                            Privacy Policy
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#888' }}>
                            SeaBattle VR - Meta Quest Experience
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                            Last Updated: December 14, 2025
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '900px', padding: '40px 20px' }}>
                {/* Introduction */}
                <Section>
                    <div className="glass-panel">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>1. Introduction</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            Welcome to SeaBattle VR ("we," "our," or "us"). This Privacy Policy explains how we collect, 
                            use, disclose, and safeguard your information when you use our virtual reality gaming experience 
                            available on Meta Quest platform.
                        </p>
                        <p style={{ lineHeight: '1.8' }}>
                            By accessing or using SeaBattle VR, you agree to the collection and use of information in 
                            accordance with this Privacy Policy. If you do not agree with our policies and practices, 
                            please do not use our application.
                        </p>
                    </div>
                </Section>

                {/* Information We Collect */}
                <Section>
                    <div className="glass-panel">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <Database size={30} style={{ color: 'var(--primary-color)' }} />
                            <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>2. Information We Collect</h2>
                        </div>
                        
                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>2.1 Personal Information</h3>
                        <p style={{ lineHeight: '1.8', marginBottom: '10px' }}>
                            We may collect the following types of personal information:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Meta Quest account information (username, user ID)</li>
                            <li>Profile information (avatar, display name)</li>
                            <li>Email address (if provided)</li>
                            <li>Age verification data</li>
                        </ul>

                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>2.2 Gameplay Data</h3>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Game progress and achievements</li>
                            <li>Scores and leaderboard rankings</li>
                            <li>In-game purchases and transactions</li>
                            <li>Multiplayer session data and interactions</li>
                            <li>Game settings and preferences</li>
                        </ul>

                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>2.3 Device and Technical Information</h3>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Device identifiers (Meta Quest device ID)</li>
                            <li>Hardware specifications and capabilities</li>
                            <li>Operating system version</li>
                            <li>IP address and general location data</li>
                            <li>Session duration and frequency of use</li>
                            <li>Performance metrics and crash reports</li>
                        </ul>

                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>2.4 VR-Specific Data</h3>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Head and controller movement data (for gameplay mechanics only)</li>
                            <li>Play area dimensions (for safety purposes)</li>
                            <li>Hand tracking data (when applicable)</li>
                        </ul>
                    </div>
                </Section>

                {/* How We Use Your Information */}
                <Section>
                    <div className="glass-panel">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <Eye size={30} style={{ color: 'var(--primary-color)' }} />
                            <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>3. How We Use Your Information</h2>
                        </div>
                        
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            We use the collected information for the following purposes:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>To provide and maintain the SeaBattle VR gaming experience</li>
                            <li>To enable multiplayer functionality and matchmaking</li>
                            <li>To process in-game purchases and transactions</li>
                            <li>To track game progress and achievements</li>
                            <li>To maintain leaderboards and competitive features</li>
                            <li>To improve game performance and user experience</li>
                            <li>To detect and prevent technical issues or bugs</li>
                            <li>To provide customer support and respond to inquiries</li>
                            <li>To send important updates about the game</li>
                            <li>To ensure compliance with our Terms of Service</li>
                            <li>To prevent fraud and maintain security</li>
                        </ul>
                    </div>
                </Section>

                {/* Data Sharing and Disclosure */}
                <Section>
                    <div className="glass-panel">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <Users size={30} style={{ color: 'var(--primary-color)' }} />
                            <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>4. Data Sharing and Disclosure</h2>
                        </div>
                        
                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>4.1 Third-Party Services</h3>
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            We may share your information with:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li><strong>Meta Platforms:</strong> As required by the Meta Quest platform</li>
                            <li><strong>Analytics Providers:</strong> To analyze game performance and user behavior</li>
                            <li><strong>Cloud Services:</strong> For data storage and hosting</li>
                            <li><strong>Payment Processors:</strong> To process in-game purchases</li>
                        </ul>

                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>4.2 Legal Requirements</h3>
                        <p style={{ lineHeight: '1.8' }}>
                            We may disclose your information if required by law, regulation, legal process, or governmental 
                            request, or to protect the rights, property, or safety of SeaBattle VR, our users, or others.
                        </p>

                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>4.3 Business Transfers</h3>
                        <p style={{ lineHeight: '1.8' }}>
                            In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                            to the acquiring entity.
                        </p>
                    </div>
                </Section>

                {/* Data Security */}
                <Section>
                    <div className="glass-panel">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <Lock size={30} style={{ color: 'var(--primary-color)' }} />
                            <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>5. Data Security</h2>
                        </div>
                        
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            We implement appropriate technical and organizational security measures to protect your information, including:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Encryption of data in transit and at rest</li>
                            <li>Secure authentication protocols</li>
                            <li>Regular security audits and updates</li>
                            <li>Access controls and monitoring</li>
                            <li>Secure cloud infrastructure</li>
                        </ul>
                        <p style={{ lineHeight: '1.8', marginTop: '15px', color: '#888' }}>
                            However, no method of transmission over the internet or electronic storage is 100% secure. 
                            While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </div>
                </Section>

                {/* Data Retention */}
                <Section>
                    <div className="glass-panel">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>6. Data Retention</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            We retain your information for as long as necessary to:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Provide the SeaBattle VR service</li>
                            <li>Comply with legal obligations</li>
                            <li>Resolve disputes and enforce agreements</li>
                            <li>Maintain game integrity and leaderboards</li>
                        </ul>
                        <p style={{ lineHeight: '1.8', marginTop: '15px' }}>
                            When you delete your account, we will delete or anonymize your personal information within 
                            a reasonable timeframe, except where retention is required by law.
                        </p>
                    </div>
                </Section>

                {/* Your Rights and Choices */}
                <Section>
                    <div className="glass-panel">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>7. Your Rights and Choices</h2>
                        
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            Depending on your location, you may have the following rights:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li><strong>Access:</strong> Request access to your personal information</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                            <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
                            <li><strong>Restriction:</strong> Request restriction of processing</li>
                        </ul>
                        
                        <p style={{ lineHeight: '1.8', marginTop: '20px' }}>
                            To exercise these rights, please contact us using the information provided in Section 11.
                        </p>
                    </div>
                </Section>

                {/* Children's Privacy */}
                <Section>
                    <div className="glass-panel">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>8. Children's Privacy</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            SeaBattle VR is intended for users aged 13 and above, in accordance with Meta Quest platform policies. 
                            We do not knowingly collect personal information from children under 13 without parental consent.
                        </p>
                        <p style={{ lineHeight: '1.8' }}>
                            If we become aware that we have collected personal information from a child under 13 without 
                            parental consent, we will take steps to delete that information promptly.
                        </p>
                    </div>
                </Section>

                {/* International Data Transfers */}
                <Section>
                    <div className="glass-panel">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>9. International Data Transfers</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            Your information may be transferred to and processed in countries other than your country of 
                            residence. These countries may have data protection laws different from your jurisdiction.
                        </p>
                        <p style={{ lineHeight: '1.8' }}>
                            We ensure appropriate safeguards are in place for such transfers, including standard contractual 
                            clauses and other legally recognized transfer mechanisms.
                        </p>
                    </div>
                </Section>

                {/* Changes to Privacy Policy */}
                <Section>
                    <div className="glass-panel">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>10. Changes to This Privacy Policy</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for 
                            other operational, legal, or regulatory reasons.
                        </p>
                        <p style={{ lineHeight: '1.8' }}>
                            We will notify you of any material changes by posting the new Privacy Policy in the app and 
                            updating the "Last Updated" date. Your continued use of SeaBattle VR after changes are posted 
                            constitutes acceptance of the updated policy.
                        </p>
                    </div>
                </Section>

                {/* Contact Information */}
                <Section>
                    <div className="glass-panel" style={{ background: 'linear-gradient(135deg, rgba(0,220,255,0.1), rgba(138,43,226,0.1))' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <Mail size={30} style={{ color: 'var(--primary-color)' }} />
                            <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>11. Contact Us</h2>
                        </div>
                        
                        <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                            practices, please contact us:
                        </p>
                        
                        <div style={{ 
                            background: 'rgba(0,0,0,0.3)', 
                            padding: '20px', 
                            borderRadius: '10px',
                            borderLeft: '3px solid var(--primary-color)'
                        }}>
                            <p style={{ marginBottom: '10px' }}>
                                <strong>SeaBattle VR Support</strong>
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Email: <a href="mailto:support@seabattle-vr.com" style={{ color: 'var(--primary-color)' }}>
                                    support@seabattle-vr.com
                                </a>
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Website: <a href="https://www.dexgo.club" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                                    www.dexgo.club
                                </a>
                            </p>
                            <p>
                                Meta Quest Store: <a 
                                    href="https://www.meta.com/experiences/seabattle-vr/6986229381496565/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ color: 'var(--primary-color)' }}
                                >
                                    SeaBattle VR on Meta Quest
                                </a>
                            </p>
                        </div>

                        <div style={{ 
                            marginTop: '30px', 
                            padding: '20px', 
                            background: 'rgba(0,220,255,0.1)', 
                            borderRadius: '10px',
                            borderLeft: '3px solid var(--secondary-color)'
                        }}>
                            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '10px' }}>Additional Resources</h3>
                            <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                                <li>
                                    <a href="https://www.meta.com/legal/quest/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                                        Meta Quest Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.meta.com/help/quest/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                                        Meta Quest Help Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* GDPR/CCPA Notice */}
                <Section>
                    <div className="glass-panel" style={{ borderLeft: '3px solid var(--secondary-color)' }}>
                        <h2 style={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>
                            12. Specific Privacy Rights (GDPR/CCPA)
                        </h2>
                        
                        <h3 style={{ color: '#fff', marginTop: '20px', marginBottom: '15px' }}>For EU/EEA Residents (GDPR)</h3>
                        <p style={{ lineHeight: '1.8', marginBottom: '10px' }}>
                            Under the General Data Protection Regulation (GDPR), you have enhanced rights including:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Right to object to processing</li>
                            <li>Right to withdraw consent at any time</li>
                            <li>Right to lodge a complaint with a supervisory authority</li>
                        </ul>

                        <h3 style={{ color: '#fff', marginTop: '25px', marginBottom: '15px' }}>For California Residents (CCPA)</h3>
                        <p style={{ lineHeight: '1.8', marginBottom: '10px' }}>
                            Under the California Consumer Privacy Act (CCPA), you have the right to:
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', color: '#ccc' }}>
                            <li>Know what personal information is collected</li>
                            <li>Know whether your information is sold or disclosed and to whom</li>
                            <li>Opt-out of the sale of personal information</li>
                            <li>Access your personal information</li>
                            <li>Request deletion of your information</li>
                            <li>Not be discriminated against for exercising your rights</li>
                        </ul>
                    </div>
                </Section>

                {/* Footer Note */}
                <div style={{ 
                    marginTop: '60px', 
                    padding: '30px', 
                    textAlign: 'center', 
                    borderTop: '1px solid #222',
                    color: '#666'
                }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                        © 2025 SeaBattle VR. All rights reserved.
                    </p>
                    <p style={{ fontSize: '0.85rem' }}>
                        This privacy policy is specific to the SeaBattle VR experience on Meta Quest platform.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicySeaBattle;

