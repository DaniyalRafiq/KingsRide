"use client";

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import MainHeading from "./MainHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Autoplay } from "swiper/modules";

import { useLanguage } from "../Context/LanguageContext";
import { servicesTranslations } from "../translations/servicesTranslations";

// Static image + link data
const servicesData = [
    { img: "/bike-img.png", link: "/" },
    { img: "/comfort-img.png", link: "/" },
    { img: "/economy-img.png", link: "/" },
    { img: "/rickshaw-img.png", link: "/" },
];

export const ServicesSection = () => {
    const { language } = useLanguage();
    const t = servicesTranslations[language] || servicesTranslations.English;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className="services-sections">
            <Container>
                {/* Heading */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <MainHeading headingspan={t.headingSpan} title={t.title} />
                </div>

                {/* Swiper Cards */}
                <Swiper
                    spaceBetween={25}
                    slidesPerView="auto"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {servicesData.map((item, index) => {
                        const serviceText = t.services[index]; // get translated text for this index
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className="services-card"
                                    data-aos="fade-up"
                                    data-aos-delay={200 + index * 150}
                                    data-aos-offset="100"
                                >
                                    {/* Image */}
                                    <div data-aos="zoom-in" data-aos-delay={250 + index * 150}>
                                        <Image src={item.img} alt={serviceText.title} height={200} width={200} />
                                    </div>

                                    {/* Content */}
                                    <div className="services-card-content" data-aos="fade-up" data-aos-delay={300 + index * 150}>
                                        <h4>{serviceText.title}</h4>
                                        <span>{serviceText.subtitle}</span>
                                        <p>{serviceText.desc}</p>
                                        <Link className="theme-btn theme-btn-secondary theme-btn-secondary-border" href={item.link}>
                                            Book a Ride
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
        </section>
    );
};
