"use client";

import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import MainHeading from './MainHeading';
import Link from 'next/link';

import { useLanguage } from "../Context/LanguageContext";
import { ourImpactTranslations } from "../translations/ourImpactTranslations";

const OurImpact = () => {
    const { language } = useLanguage();
    const t = ourImpactTranslations[language] || ourImpactTranslations.English;

    return (
        <section>
            <Container>
                <MainHeading
                    headingspan={t.headingspan}
                    title={t.title}
                    para={t.para}
                />

                <Row className='align-items-center'>
                    <Col lg={6} md={12}>
                        <div className="impact-content">
                            <strong>{t.strongText}</strong>

                            <p>{t.paragraphs[0]}</p>
                            <p>{t.paragraphs[1]}</p>

                            <div className="hero-content hero-content-right">
                                <div className="hero-btm-main">
                                    <div>
                                        <Link href="/" className='theme-btn theme-btn-secondary'>
                                            <Image
                                                src="/google-play-img.png"
                                                alt="Google Play"
                                                width={100}
                                                height={50}
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/" className='theme-btn'>
                                            <Image
                                                src="/app-store-img.png"
                                                alt="App Store"
                                                width={100}
                                                height={50}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12}>
                        <Image
                            src="/our-impact-img.png"
                            alt="Our Impact Image"
                            width={536}
                            height={420}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurImpact;
