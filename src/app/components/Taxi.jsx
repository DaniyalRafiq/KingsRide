"use client";

import Link from 'next/link';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import { useLanguage } from '../Context/LanguageContext';
import { taxiTranslations } from '../translations/taxiTranslations';

const Taxi = () => {
    const { language } = useLanguage();
    const t = taxiTranslations[language] || taxiTranslations.English;

    return (
        <section>
            <Container>
                <div className="taxi-heading">
                    <h2>{t.heading}</h2>
                </div>

                <Row className="justify-content-center">
                    {t.cards.map((card, index) => (
                        <Col lg="4" md="6" sm="12" key={index}>
                            <div className="taxi-card">
                                <h6>{card.title}</h6>
                                <p>{card.para}</p>
                            </div>
                        </Col>
                    ))}

                    {/* Google Play */}
                    <Col lg="6" md="12">
                        <div className="taxi-main-card">
                            <h4>{t.download.title}</h4>
                            <p>{t.download.para}</p>
                            <div className="downloadapp-btn-main">
                                <Link href="/" className="theme-btn theme-btn-secondary">
                                    <Image
                                        src="/google-play-img.png"
                                        alt="Google Play"
                                        width={100}
                                        height={50}
                                        className="img-fluid"
                                    />
                                </Link>
                            </div>
                        </div>
                    </Col>

                    {/* App Store */}
                    <Col lg="6" md="12">
                        <div className="taxi-main-card seconnd">
                            <h4>{t.download.title}</h4>
                            <p>{t.download.para}</p>
                            <div className="downloadapp-btn-main">
                                <Link href="/" className="theme-btn">
                                    <Image
                                        src="/app-store-img.png"
                                        alt="App Store"
                                        width={100}
                                        height={50}
                                        className="img-fluid"
                                    />
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Taxi;
