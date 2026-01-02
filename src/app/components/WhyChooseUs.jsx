"use client";

import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainHeading from "./MainHeading";

import { useLanguage } from "../Context/LanguageContext";
import { whyChooseUsTranslations } from "../translations/whyChooseUsTranslations";

export const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = whyChooseUsTranslations[language] || whyChooseUsTranslations.English;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section className='why-choose-us'>
      <Container>

        {/* ✅ MAIN HEADING (SPAN → H2 → PARA) */}
        <div data-aos="fade-up" data-aos-delay="100">
          <MainHeading
            headingspan={t.headingSpan}
            title={t.title}
            para={t.para}
          />
        </div>

        <div className="why-choose-us-wrapper">
          <Row>

            {/* Left Image */}
            <Col lg={4} md={12}>
              <div
                className="img-box-contet"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Image
                  src="/why-choose-us-img.png"
                  height={580}
                  width={400}
                  alt="Why Choose Us Image"
                />
              </div>
            </Col>

            {/* Right Cards */}
            <Col lg={8} md={12}>
              <div className="why-choose-us-cards-main">
                {t.cards.map((card, index) => (
                  <div
                    className="why-choose-us-card"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 150}
                  >
                    <div
                      className="icon"
                      data-aos="zoom-in"
                      data-aos-delay={350 + index * 150}
                    >
                      <Image
                        alt="why choose us icon"
                        src="/why-choose-us-icon.png"
                        height={72}
                        width={72}
                      />
                    </div>

                    <div
                      className="why-choose-us-card-content"
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 150}
                    >
                      <h6>{card.title}</h6>
                      <p>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};
