"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainHeading from "./MainHeading";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from "../Context/LanguageContext";
import { aboutTranslations } from "../translations/about";

export const About = () => {
  const { language } = useLanguage();
  const t = aboutTranslations[language] || aboutTranslations.English;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section className="about-section">
      <Container>
        <div className="about-us-section-main">

          {/* Animated heading */}
          <div data-aos="fade-up" data-aos-delay="100">
            <MainHeading
              headingspan={t.headingSpan}
              title={t.title}
            />
          </div>

          <Row>
            {/* LEFT circles */}
            <Col lg={4} md={12}>
              <div className="about-circle-wrapepr">
                <div className="about-circle-main">
                  {t.stats.slice(0, 2).map((item, index) => (
                    <div
                      key={index}
                      className="about-circle"
                      data-aos="zoom-in"
                      data-aos-delay={200 + index * 150}
                      data-aos-offset="100"
                    >
                      <h5>{item.value}</h5>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="about-circle-main verticle">
                  {t.stats.slice(2).map((item, index) => (
                    <div
                      key={index}
                      className="about-circle"
                      data-aos="zoom-in"
                      data-aos-delay={500 + index * 150}
                      data-aos-offset="100"
                    >
                      <h5>{item.value}</h5>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* RIGHT content */}
            <Col lg={8} md={12}>
              <div className="mobile-card">
                <div className="mobile-img" data-aos="fade-up" data-aos-delay="600">
                  <Image
                    src="/mobile-ing.png"
                    alt="Mobile Image"
                    width={300}
                    height={200}
                    className="img-fluid"
                  />
                </div>

                <div className="about-sec-content" data-aos="fade-up" data-aos-delay="700">
                  {t.paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </Container>
    </section>
  );
};
  