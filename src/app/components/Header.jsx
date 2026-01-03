"use client";

import Link from "next/link";
import { Container, Offcanvas, Button } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiMenuLine } from "@remixicon/react";
import { CountrySelector } from "../components/CountrySelector.jsx";
import { useLanguage } from "../Context/LanguageContext";
import { headerTranslations } from "../translations/header";

export const Header = () => {
    const { language } = useLanguage();
    const t = headerTranslations[language] || headerTranslations.English;

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const mountedRef = useRef(false);

    const handleClose = () => mountedRef.current && setShowOffcanvas(false);
    const handleShow = () => mountedRef.current && setShowOffcanvas(true);

    useEffect(() => {
        mountedRef.current = true;

        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
        });

        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mountedRef.current = false;
        };
    }, []);

    return (
        <header className={`header ${isSticky ? "sticky-header animate-header" : ""}`}>
            <Container>
                <div className="header-top d-flex justify-content-between align-items-center">

                    {/* Logo */}
                    <div className="logo-wrapper" data-aos="fade-down">
                        <Link href="/">
                            <Image src="/headerlogooo.png" alt="Logo" width={170} height={63} />
                        </Link>
                    </div>

                    {/* Desktop buttons */}
                    <div className="d-none d-md-flex align-items-center gap-3">
                        <Link href="/about" className="theme-btn theme-btn-secondary theme-btn-secondary-border">
                            {t.about}
                        </Link>
                        <Link href="/Ride" className="theme-btn">
                            {t.bookRide}
                        </Link>
                        <CountrySelector />
                    </div>

                    {/* MOBILE MENU BUTTON (FIXED) */}
                    <div className="d-md-none mobile-menu-btn">
                        <Button variant="outline-primary" onClick={handleShow}>
                            <RiMenuLine size={40} />
                        </Button>
                    </div>

                    {/* Offcanvas */}
                    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <Image src="/headerlogooo.png" alt="Logo" width={170} height={63} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="d-flex flex-column gap-3">
                                <Link href="/about" className="theme-btn theme-btn-secondary theme-btn-secondary-border" onClick={handleClose}>
                                    {t.about}
                                </Link>
                                <Link href="/Ride" className="theme-btn" onClick={handleClose}>
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
