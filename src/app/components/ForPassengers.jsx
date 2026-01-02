"use client";

import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeaturesHeading from './FeaturesHeading';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLanguage } from '../Context/LanguageContext';
import { forPassengersTranslations } from '../translations/forPassengersTranslations';

export const ForPassengers = () => {
    const { language } = useLanguage();
    const t = forPassengersTranslations[language] || forPassengersTranslations.English;
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
        <section className='passengers'>
            <Container>
                <Row>
                    {/* Text Content */}
                    <Col lg={6} md={12}>
                        <div data-aos="fade-right" data-aos-delay="200">
                            <FeaturesHeading
                                headingspan={t.headingspan}
                                title={t.title}
                                para={content.para}
                                listheading={content.listheading}
                                listpara={content.listpara}
                                listheadingsec={content.listheadingsec}
                                listparasec={content.listparasec}
                            />
                        </div>
                    </Col>

                    {/* Image */}
                    <Col lg={6} md={12}>
                        <div className="img-box-contet features-img" data-aos="fade-left" data-aos-delay="300">
                            <Image
                                src="/advanced-features-img3.png"
                                height={500}
                                width={600}
                                alt="Advanced Features Image"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
