"use client";

import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import MainHeading from './MainHeading';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from "../Context/LanguageContext";
import { ourStoryTranslations } from "../translations/ourStoryTranslations";

const OurStory = () => {
    const { language } = useLanguage();
    const t =
        ourStoryTranslations[language] ||
        ourStoryTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className="our-story">
            <Container>
                <Row className="align-items-center">
                    
                    <Col lg={6} md={12}>
                        <div
                            className="img-box our-story-img"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <Image
                                src="/our-story-img.png"
                                alt="Our Story Image"
                                width={536}
                                height={420}
                            />
                        </div>
                    </Col>

                    <Col lg={6} md={12}>
                        <div
                            className="our-story-content"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <MainHeading
                                headingspan={t.headingspan}
                                title={t.title}
                                para={t.para}
                            />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default OurStory;
