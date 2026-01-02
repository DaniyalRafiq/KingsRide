"use client";

import { Container } from 'react-bootstrap';
import MainHeading from './MainHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from "swiper/modules";
import { useLanguage } from '../Context/LanguageContext';
import { testimonialsTranslations } from '../translations/testimonialsTranslations';

export const Testimonials = () => {
    const { language } = useLanguage();
    const t = testimonialsTranslations[language] || testimonialsTranslations.English;

    return (
        <section className='testimonials'>
            <Container>
                <MainHeading
                    headingspan={t.headingspan}
                    title={t.title}
                    para={t.para}
                />
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto"
                    loop={true}
                    centeredSlides={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {[...t.reviews, ...t.reviews].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testi-card">
                                <div className="testi-top">
                                    <div className="testi-img-main">
                                        <div className="test-img">
                                            <Image
                                                src={item.imgsrc}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="testi-img-content">
                                            <h6>{item.name}</h6>
                                            <span>{item.position}</span>
                                        </div>
                                    </div>
                                    <div className="img-quote">
                                        <Image
                                            src="/quote.png"
                                            alt="Testimonial Image"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </div>
                                <div className="testi-content">
                                    <p>{item.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Container>
        </section>
    )
}
