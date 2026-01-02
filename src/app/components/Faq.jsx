'use client';

import React, { useState, useEffect } from 'react';
import { Accordion, Row, Col, Container } from 'react-bootstrap';
import MainHeading from './MainHeading';
import { useLanguage } from '../Context/LanguageContext';
import { faqTranslations } from '../translations/faqTranslations';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    const { language } = useLanguage();
    const t = faqTranslations[language] || faqTranslations.English;

    const [activeTab, setActiveTab] = useState('faq');

    // Map activeTab to the correct content array
    const content = activeTab === 'faq' ? t.faqContent : t.driverContent;

    // Split content into two columns
    const midIndex = Math.ceil(content.length / 2);
    const leftColumn = content.slice(0, midIndex);
    const rightColumn = content.slice(midIndex);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const faqItems = document.querySelectorAll('.faq-main [data-aos]');
            faqItems.forEach((el) => el.classList.remove('aos-animate'));
            AOS.refreshHard();
        }, 50);

        return () => clearTimeout(timeout);
    }, [activeTab]);

    return (
        <section className="faq-section py-5">
            <Container>
                <MainHeading
                    headingspan={t.headingSpan}
                    title={t.title}
                    para={t.para}
                />

                <div className="faq-tabs-main mb-4 text-center" data-aos="fade-down" data-aos-duration="800">
                    <button
                        className={`faq-tab ${activeTab === 'faq' ? 'active' : ''}`}
                        onClick={() => setActiveTab('faq')}
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="600"
                    >
                        {t.tabs.faq}
                    </button>
                    <button
                        className={`faq-tab ${activeTab === 'drivers' ? 'active' : ''}`}
                        onClick={() => setActiveTab('drivers')}
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="600"
                    >
                        {t.tabs.drivers}
                    </button>
                </div>

                <div className="faq-main">
                    <Accordion defaultActiveKey="0">
                        <Row>
                            <Col lg={6} md={12}>
                                {leftColumn.map((item, index) => (
                                    <Accordion.Item
                                        key={index}
                                        eventKey={index.toString()}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        data-aos-once="true"
                                    >
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>{item.body}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Col>
                            <Col lg={6} md={12}>
                                {rightColumn.map((item, index) => (
                                    <Accordion.Item
                                        key={index + midIndex}
                                        eventKey={(index + midIndex).toString()}
                                        data-aos="fade-up"
                                        data-aos-delay={(index + midIndex) * 100}
                                        data-aos-once="true"
                                    >
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>{item.body}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Col>
                        </Row>
                    </Accordion>
                </div>
            </Container>
        </section>
    );
};

export default Faq;
