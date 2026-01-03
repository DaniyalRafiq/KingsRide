"use client";
import Link from 'next/link';
import { Container, Offcanvas, Button } from 'react-bootstrap';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiMenuLine } from '@remixicon/react';
import { CountrySelector } from '../components/CountrySelector.jsx';
import { useLanguage } from "../Context/LanguageContext";
import { headerTranslations } from "../translations/header";

export const Header = () => {
    const { language } = useLanguage();
    const t = headerTranslations[language] || headerTranslations.English;

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const mountedRef = useRef(false);

    const handleClose = () => { if (mountedRef.current) setShowOffcanvas(false); };
    const handleShow = () => { if (mountedRef.current) setShowOffcanvas(true); };

    useEffect(() => {
        mountedRef.current = true;

        // Initialize AOS
        AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: false, mirror: false });

        // Scroll listener for sticky header
        const handleScroll = () => setIsSticky(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            mountedRef.current = false;
        };
    }, []);

    return (
        <header className={`header ${isSticky ? 'sticky-header animate-header' : ''}`}>
            <Container>
                <div className="header-top d-flex justify-content-between align-items-center">

                    {/* Logo */}
                    <div className="logo-wrapper" data-aos="fade-down" data-aos-delay="100">
                        <Link href="/">
                            <Image src="/headerlogooo.png" alt="Logo" width={170} height={63} />
                        </Link>
                    </div>

                    <div className="d-none d-md-flex header-btn-main align-items-center gap-3">
                        {/* <div data-aos="fade-right" data-aos-delay="200">
                            <Link href="/about" className='header-link'>{t.about}</Link>
                        </div> */}
                        <div className="header-btn-wrapper d-flex gap-2">
                            <div data-aos="zoom-in-up" data-aos-delay="300">
                                <Link href="/about" className='theme-btn theme-btn-secondary theme-btn-secondary-border'>{t.about}</Link>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-delay="400">
                                <Link href="/Ride" className='theme-btn'>{t.bookRide}</Link>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-delay="600">
                                <CountrySelector />
                            </div>
                        </div>
                    </div>

                    <div className="d-md-none">
                        <Button variant="outline-primary" onClick={handleShow}>
                            <RiMenuLine size={50} />
                        </Button>
                    </div>

                    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <Image src="/headerlogooo.png" alt="Logo" width={170} height={63} />

                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="d-flex flex-column gap-3">
                                <Link href="/about" className='theme-btn theme-btn-secondary theme-btn-secondary-border' onClick={handleClose}>
                                    {t.about}
                                </Link>
                                <Link href="/Ride" className='theme-btn' onClick={handleClose}>
                                    {t.bookRide}
                                </Link>
                                <CountrySelector />
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>

                </div>
            </Container>
        </header>
    );
};
