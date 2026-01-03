"use client";

import React, { useEffect } from 'react';
import MainHeading from './MainHeading';
import { Col, Container, Image, Row } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from "../Context/LanguageContext";
import { usTranslations } from "../translations/usTranslations";

const Us = () => {
    const { language } = useLanguage();
    const t = usTranslations[language] || usTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className="us">
            <Container>
                <Row>

                    {/* Left Content */}
                    <Col lg={8} md={12}>
                        <div
                            className="us-cont"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            {/* ❌ Already animated */}
                            <MainHeading
                                headingspan={t.headingspan}
                                title={t.title}
                                para={t.para}
                            />
                        </div>
                    </Col>

                    {/* Image */}
                    <Col lg={4} md={12}>
                        <div
                            className="img-box us-img"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <Image
                                src="/us-img.png"
                                alt="Why Choose Us Image"
                                width={536}
                                height={420}
                            />
                        </div>
                    </Col>

                    {/* Card 1 */}
                    <Col lg={4} md={12}>
                        <div
                            className="us-cards"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="us-card">
                                <h6>{t.cards[0].title}</h6>
                                <p>{t.cards[0].para}</p>
                            </div>
                            <div className="img-box uscacrd-img">
                                <Image src="/us-card-img1.png" alt="" width={80} height={80} />
                            </div>
                        </div>
                    </Col>

                    {/* Card 2 */}
                    <Col lg={4} md={12}>
                        <div
                            className="us-cards"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="img-box uscacrd-img">
                                <Image src="/us-card-img2.png" alt="" width={80} height={80} />
                            </div>
                            <div className="us-card">
                                <h6>{t.cards[1].title}</h6>
                                <p>{t.cards[1].para}</p>
                            </div>
                        </div>
                    </Col>

                    {/* Card 3 */}
                    <Col lg={4} md={12}>
                        <div
                            className="us-cards"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="us-card">
                                <h6>{t.cards[2].title}</h6>
                                <p>{t.cards[2].para}</p>
                            </div>
                            <div className="img-box uscacrd-img">
                                <Image src="/us-card-img3.png" alt="" width={80} height={80} />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Us;
