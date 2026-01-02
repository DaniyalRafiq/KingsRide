'use client';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row, Form, Button, Image } from 'react-bootstrap';
import { useLanguage } from '../Context/LanguageContext';
import { footerTranslations } from '../translations/footerTranslations';

export default function Footer() {
  const { language } = useLanguage();
  const t = footerTranslations[language] || footerTranslations.English;
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="6" md="12">
            <div className="footer-main">
              <Image
                src="/footer-logo.png"
                width={150}
                height={50}
              />

              <strong>{t.newsletter.heading}</strong>
              <p>{t.newsletter.text}</p>
              <Form>
                <Form.Group className="mb-3 footer-form" controlId="newsletterEmail">
                  <Form.Control type="email" placeholder={t.newsletter.placeholder} />
                  <Button className='theme-btn'>{t.newsletter.button}</Button>
                </Form.Group>
                <div className="footer-contact">
                  <a href={`mailto:${t.newsletter.contactEmail}`}>{t.newsletter.contactEmail}</a> <span>|</span>
                  <a href={`tel:${t.newsletter.contactPhone}`}>{t.newsletter.contactPhone}</a>
                </div>
              </Form>
            </div>
          </Col>

          <Col lg="3" md="12">
            <div className="footer-content">
              <h4>{t.quickLinks.heading}</h4>
              <div className="footer-links">
                {t.quickLinks.links.map((link, i) => (
                  <Link key={i} href={link.href}>{link.title}</Link>
                ))}
              </div>
            </div>
          </Col>

          <Col lg="3" md="12">
            <div className="footer-content">
              <h4>{t.downloadApp.heading}</h4>
              <div className="hero-btm-main">
                <Link href="/about" className='theme-btn theme-btn-secondary'>
                  <Image
                    src="/google-play-img.png"
                    alt="Google Play"
                    width={100}
                    height={50}
                    className="img-fluid"
                  />
                </Link>
                <Link href="/" className='theme-btn'>
                  <Image
                    src="/app-store-img.png"
                    alt="App Store"
                    width={100}
                    height={50}
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="footer-tex">{t.copyright(year)}</p>
          <div className="terms">
            <Link href="privacyPolicy" >
              {t.Privicy.Pr}
            </Link>
            <Link href="Terms" >
              {t.Privicy.Tr}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
