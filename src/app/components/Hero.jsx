"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from "../Context/LanguageContext";
import { heroTranslations } from "../translations/hero";

const Hero = () => {
    const { language } = useLanguage();
    const t = heroTranslations[language] || heroTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className="hero-section">
            <Container>
                <div className="hero-main">

                    <div className="hero-content-main">
                        <Row>
                            <Col lg={8} md={12}>
                                <div className="hero-content">
                                    <h1 className='hero-title' data-aos="fade-up" data-aos-delay="100">
                                        <span>{t.titleMain}</span> {t.titleSub}
                                    </h1>

                                    <p className="hero-paragraph" data-aos="fade-up" data-aos-delay="200">
                                        {t.description}
                                    </p>
                                </div>
                            </Col>

                            <Col lg={4} md={12}>
                                <div className="hero-content hero-content-right">
                                    <div className="hero-btm-main" data-aos="fade-left" data-aos-delay="300">
                                        <div data-aos="zoom-in" data-aos-delay="400">
                                            <Link href="/" className='theme-btn theme-btn-secondary'>
                                                <Image src="/google-play-img.png" alt="Google Play" width={100} height={50} />
                                            </Link>
                                        </div>
                                        <div data-aos="zoom-in" data-aos-delay="500">
                                            <Link href="/" className='theme-btn'>
                                                <Image src="/app-store-img.png" alt="App Store" width={100} height={50} />
                                            </Link>
                                        </div>
                                    </div>

                                    <p data-aos="fade-left" data-aos-delay="600">
                                        {t.appText}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="hero-img-main" data-aos="fade-up" data-aos-delay="700">
                        <Image src="/hero-img.png" alt="Hero Image" width={950} height={400} className="hero-img img-fluid" />
                    </div>

                    <div className="hero-bottom-main">
                        <Row>
                            {t.cards.map((card, i) => (
                                <Col key={i} lg={4} md={6} sm={12}>
                                    <div className="hero-bottom-card">
                                        <div className="icon">
                                            <Image
                                                src={`/hero-bottom-icon${i + 1}.png`}
                                                alt="Icon"
                                                width={72}
                                                height={72}
                                            />
                                        </div>
                                        <div className="hero-bottom-card-content">
                                            <h6>{card.title}</h6>
                                            <p>{card.text}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;
