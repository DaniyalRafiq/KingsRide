'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../Context/LanguageContext';
import { downloadAppTranslations } from '../translations/downloadAppTranslations';

export const DownloadApp = () => {
    const { language } = useLanguage();
    const t = downloadAppTranslations[language] || downloadAppTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className='downloadapp'>
            <Container>
                <div className="downloadapp-main">
                    <Row>
                        {/* Left Content */}
                        <Col lg="6" md="12">
                            <div className="downloadapp-content">
                                <span data-aos="fade-up" data-aos-delay="100">{t.heading}</span>
                                <h2 data-aos="fade-up" data-aos-delay="200">{t.title}</h2>
                                <p data-aos="fade-up" data-aos-delay="300">{t.para}</p>

                                <div className="downloadapp-btn-main" data-aos="fade-up" data-aos-delay="400">
                                    <Link href="/" className='theme-btn theme-btn-secondary'>
                                        <Image
                                            src="/google-play-img.png"
                                            alt={t.googleAlt}
                                            width={100}
                                            height={50}
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <Link href="/" className='theme-btn'>
                                        <Image
                                            src="/app-store-img.png"
                                            alt={t.appstoreAlt}
                                            width={100}
                                            height={50}
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        {/* Right Image */}
                        <Col lg="6" md="12">
                            <div className="img-box-contet downloadapp-img" data-aos="zoom-in" data-aos-delay="500">
                                <Image
                                    src="/downloadapp-img.png"
                                    alt='download img'
                                    height={421}
                                    width={500}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};
