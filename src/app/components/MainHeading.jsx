"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainHeading = ({ headingspan, title, para }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,          // smooth speed
            easing: "ease-out-cubic",// consistent easing
            once: false,             // repeat on scroll
            mirror: false,           // subtle effect
        });
    }, []);

    return (
        <div className="main-heading">
            <span data-aos="fade-up" data-aos-delay="100">{headingspan}</span>
            <h2 data-aos="fade-up" data-aos-delay="200">{title}</h2>
            {para && <p data-aos="fade-up" data-aos-delay="300">{para}</p>}
        </div>
    );
};

export default MainHeading;
