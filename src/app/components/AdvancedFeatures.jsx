"use client";

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainHeading from "./MainHeading";
import FeaturesHeading from './FeaturesHeading.jsx';
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { useLanguage } from "../Context/LanguageContext";
import { advancedFeaturesTranslations } from "../translations/advancedFeaturesTranslations";

export const AdvancedFeatures = () => {
    const { language } = useLanguage();
    const t =
        advancedFeaturesTranslations[language] ||
        advancedFeaturesTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: false,
            mirror: false,
        });
    }, []);

    const content = t.textContent;

    return (
        <section className="advanced-features">
            <Container>
                {/* Main Heading */}
                <div data-aos="fade-up" data-aos-delay="100">

                    <MainHeading
                        headingspan={t.headingSpan}
                        title={t.title}
                        para={t.para}
                    />
                </div>

                <Row>
                    {/* Text */}
                    <Col lg={6} md={12}>
                        <div data-aos="fade-right" data-aos-delay="200">
                            <FeaturesHeading
                                headingSpan={content.headingSpan}
                                title={content.title}
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
                        <div
                            className="img-box-contet features-img"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <Image
                                src="/advanced-features-img1.png"
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
