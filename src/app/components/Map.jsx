"use client";

import { RiMapPin2Line, RiSteeringLine } from '@remixicon/react';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';

import { useLanguage } from '../Context/LanguageContext';
import { mapTranslations } from '../translations/mapTranslations';

const Map = () => {
    const { language } = useLanguage();
    const t = mapTranslations[language] || mapTranslations.English;

    return (
        <section className="map-section">
            <Container>
                <div className="map-wrapper">
                    <div className="img-box">
                        <Image
                            src="/map-bg.png"
                            alt="Map Image"
                            width={1920}
                            height={600}
                        />
                    </div>

                    <div className="map-car-main">
                        {/* Top */}
                        <div className="map-car-top-main">
                            <div className="map-car-top-card">
                                <div className="icon">
                                    <RiMapPin2Line />
                                </div>
                                <div className="map-car-top-card-content">
                                    <span>{t.pickupLabel}</span>
                                    <h6>{t.pickupAddress}</h6>
                                </div>
                            </div>

                            <div className="map-car-top-card">
                                <div className="icon">
                                    <RiSteeringLine />
                                </div>
                                <div className="map-car-top-card-content">
                                    <span>{t.dropoffLabel}</span>
                                    <h6>{t.pickupAddress}</h6>
                                </div>
                            </div>
                        </div>

                        {/* Middle */}
                        <div className="map-car-middle">
                            {t.rideTypes.map((ride, index) => (
                                <div className="map-middle-card" key={index}>
                                    <div className="img-box-content">
                                        <Image
                                            src={`/map-middle-card-img-${index + 1}.png`}
                                            alt="Ride Type"
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <span>{ride}</span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom */}
                        <div className="map-car-bottom">
                            <input
                                type="text"
                                className="driver-instructions-input"
                                placeholder={t.inputPlaceholder}
                            />

                            <div className="request-select-wrapper">
                                <select className="request-select">
                                    <option value="">{t.requestSelect.default}</option>
                                    <option value="self">{t.requestSelect.self}</option>
                                    <option value="other">{t.requestSelect.other}</option>
                                </select>
                            </div>

                            <button className="theme-btn d-flex align-items-center justify-content-center">
                                {t.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Map;
