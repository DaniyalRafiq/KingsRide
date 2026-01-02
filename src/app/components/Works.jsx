"use client";

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainHeading from './MainHeading';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from '../Context/LanguageContext';
import { worksTranslations } from '../translations/worksTranslations';

export const Works = () => {
    const { language } = useLanguage();
    const t = worksTranslations[language] || worksTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className='works'>
            <Container>
                <div className="works-wrapper">
                    <div className="white-main-heading">
                        <MainHeading
                            headingspan={t.headingspan}
                            title={t.title}
                            para={t.para}
                        />
                    </div>

                    <div className="works-card-main">
                        <Row>
                            {t.cards.map((item, index) => (
                                <Col lg="4" md="6" sm="12" key={index}>
                                    <div className='works-card-wrapper' data-aos="fade-up" data-aos-delay={100 + index * 150}>
                                        <div className="works-card">
                                            <div className="icon">
                                                <Image
                                                    src={item.iconsrc || '/works-icon1.png'}
                                                    alt={item.title}
                                                    height={72}
                                                    width={69}
                                                />
                                            </div>
                                            <div className="works-card-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.para}</p>
                                                <div className="works-card-num">{item.num}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                        <div className="works-bottom" data-aos="fade-up" data-aos-delay={600}>
                            <strong>{t.bottomText}</strong>
                            <div className="works-btn-main">
                                <Link href="/" className='theme-btn theme-btn-secondary' data-aos="zoom-in" data-aos-delay={650}>
                                    <Image
                                        src="/google-play-img.png"
                                        alt="Google Play"
                                        width={100}
                                        height={50}
                                        className="img-fluid"
                                    />
                                </Link>
                                <Link href="/" className='theme-btn' data-aos="zoom-in" data-aos-delay={700}>
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
                    </div>
                </div>
            </Container>
        </section>
    );
};
