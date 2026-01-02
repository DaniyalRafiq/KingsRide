"use client";

import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import MainHeading from './MainHeading';

import { useLanguage } from "../Context/LanguageContext";
import { ourStoryTranslations } from "../translations/ourStoryTranslations";

const OurStory = () => {
    const { language } = useLanguage();
    const t =
        ourStoryTranslations[language] ||
        ourStoryTranslations.English;

    return (
        <section className='our-story'>
            <Container>
                <Row className='align-items-center'>
                    {/* Image */}
                    <Col lg={6} md={12}>
                        <div className="img-box our-story-img">
                            <Image
                                src="/our-story-img.png"
                                alt="Our Story Image"
                                width={536}
                                height={420}
                            />
                        </div>
                    </Col>

                    {/* Content */}
                    <Col lg={6} md={12}>
                        <div className="our-story-content">
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
