"use client";

import React from 'react';
import { ServicesHero } from '../../components/ServicesHero';
import OurStory from '../../components/OurStory';
import { Testimonials } from "../../components/Testimonials.jsx";
import { DownloadApp } from "../../components/DownloadApp.jsx";
import Faq from '../../components/Faq.jsx';
import Us from '../../components/Us';
import OurImpact from '../../components/OurImpact';
import { useLanguage } from "../../Context/LanguageContext";
import { aboutHeroTranslations } from "../../translations/aboutHeroTranslations";
import Head from 'next/head';

const About = () => {
  const { language } = useLanguage();
  const t =
    aboutHeroTranslations[language] ||
    aboutHeroTranslations.English;

  return (
    <>



      <ServicesHero
        title={t.title}
        description={t.description}
      />

      <OurStory />
      <Us />
      <OurImpact />

      <div className="main-wrapepr">
        <Testimonials />
      </div>

      <DownloadApp />
      <Faq />
    </>
  );
};

export default About;
