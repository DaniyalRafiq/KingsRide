"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from '../Context/LanguageContext';
import { taxiTranslations } from '../translations/taxiTranslations';

const Taxi = () => {
    const { language } = useLanguage();
    const t = taxiTranslations[language] || taxiTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-out-cubic',
            once: false, // animate once
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <section>
            <Container>

                {/* Heading */}
                <div className="taxi-heading" data-aos="fade-up">
                    <h2>{t.heading}</h2>
                </div>

                <Row className="justify-content-center">

                    {/* Taxi Cards */}
                    {t.cards.map((card, index) => (
                        <Col lg="4" md="6" sm="12" key={index} data-aos="fade-up" data-aos-delay={100 + index * 100}>
                            <div className="taxi-card">
                                <h6>{card.title}</h6>
                                <p>{card.para}</p>
                            </div>
                        </Col>
                    ))}

                    {/* Google Play */}
                    <Col lg="6" md="12" data-aos="fade-up" data-aos-delay="500">
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
                    <Col lg="6" md="12" data-aos="fade-up" data-aos-delay="600">
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
