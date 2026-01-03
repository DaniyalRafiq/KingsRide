"use client";

import { RiMapPin2Line, RiSteeringLine } from '@remixicon/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Map = () => {

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-out-cubic',
            once: true,          // animate once when scrolled into view
            mirror: false,
            anchorPlacement: 'top-bottom',
        })
    }, [])

    return (
        <section className="map-section">
            <Container>
                <div
                    className="map-wrapper"
                    data-aos="fade-up"
                >

                    {/* Map Background */}
                    <div className="img-box">
                        <Image
                            src="/map-bg.png"
                            alt="Map Image"
                            width={1920}
                            height={600}
                        />
                    </div>

                    {/* Main Card Container */}
                    <div className='data-aos="fade-up" data-aos-delay="200"' >

                        <div className="map-car-main" >

                            {/* Top Cards */}
                            <div className="map-car-top-main">
                                <div className="map-car-top-card">
                                    <div className="icon">
                                        <RiMapPin2Line />
                                    </div>
                                    <div className="map-car-top-card-content">
                                        <span>Pickup</span>
                                        <h6>143 Rogers Kittery, New York</h6>
                                    </div>
                                </div>
                                <div className="map-car-top-card">
                                    <div className="icon">
                                        <RiSteeringLine />
                                    </div>
                                    <div className="map-car-top-card-content">
                                        <span>Pickup</span>
                                        <h6>143 Rogers Kittery, New York</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Ride Cards */}
                            <div className="map-car-middle">
                                {[
                                    "/map-middle-card-img-1.png",
                                    "/map-middle-card-img-2.png",
                                    "/map-middle-card-img-3.png",
                                    "/map-middle-card-img-5.png"
                                ].map((img, idx) => (
                                    <div className="map-middle-card" key={idx}>
                                        <div className="img-box-content">
                                            <Image src={img} alt="Ride Type" width={80} height={80} />
                                        </div>
                                        <span>Ride AC</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Form */}
                            <div className="map-car-bottom" >
                                <input
                                    type="text"
                                    className="driver-instructions-input"
                                    placeholder="Driver Instructions..."
                                />
                                <div className="request-select-wrapper">
                                    <select className="request-select">
                                        <option value="">Request for Someone Else</option>
                                        <option value="self">For Me</option>
                                        <option value="other">For Someone Else</option>
                                    </select>
                                </div>
                                <button className="theme-btn d-flex align-items-center">
                                    Continue
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Map
