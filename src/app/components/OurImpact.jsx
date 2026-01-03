"use client";

import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import MainHeading from './MainHeading';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from "../Context/LanguageContext";
import { ourImpactTranslations } from "../translations/ourImpactTranslations";

const OurImpact = () => {
    const { language } = useLanguage();
    const t = ourImpactTranslations[language] || ourImpactTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section>
            <Container>

                {/* ❌ Already animated */}
                <MainHeading
                    headingspan={t.headingspan}
                    title={t.title}
                    para={t.para}
                />

                <Row className="align-items-center">

                    {/* Left Content */}
                    <Col lg={6} md={12}>
                        <div className="impact-content">

                            <strong
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                {t.strongText}
                            </strong>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                {t.paragraphs[0]}
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                {t.paragraphs[1]}
                            </p>

                            <div
                                className="hero-content hero-content-right"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="hero-btm-main">
                                    <div>
                                        <Link href="/" className="theme-btn theme-btn-secondary">
                                            <Image
                                                src="/google-play-img.png"
                                                alt="Google Play"
                                                width={100}
                                                height={50}
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/" className="theme-btn">
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

                    {/* Right Image */}
                    <Col lg={6} md={12}>
                        <div
                            className="img-box impact-img"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <Image
                                src="/our-impact-img.png"
                                alt="Our Impact Image"
                                width={536}
                                height={420}
                            />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default OurImpact;
