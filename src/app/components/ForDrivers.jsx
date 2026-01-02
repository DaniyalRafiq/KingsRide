"use client";

import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeaturesHeading from './FeaturesHeading';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from "../Context/LanguageContext";
import { forDriversTranslations } from "../translations/forDriversTranslations";

export const ForDrivers = () => {
    const { language } = useLanguage();
    const t = forDriversTranslations[language] || forDriversTranslations.English;
    const content = t.textContent;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className='drivers'>
            <Container>
                <Row>
                    {/* Image */}
                    <Col lg={6} md={12}>
                        <div className="img-box-contet features-img" data-aos="fade-right" data-aos-delay="200">
                            <Image
                                src="/advanced-features-img2.png"
                                height={500}
                                width={600}
                                alt="For Drivers Image"
                            />
                        </div>
                    </Col>

                    {/* Text Content */}
                    <Col lg={6} md={12}>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <FeaturesHeading
                                headingSpan={t.headingSpan}
                                title={t.title}
                                para={t.para}
                                listheading={content.listheading}
                                listpara={content.listpara}
                                listheadingsec={content.listheadingsec}
                                listparasec={content.listparasec}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
