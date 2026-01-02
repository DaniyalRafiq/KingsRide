'use client'

import React from 'react'
import { Container } from 'react-bootstrap'
import { ServicesHero } from '../../components/ServicesHero'
import { useLanguage } from '../../Context/LanguageContext'
import { termsConditionsTranslations } from '../../translations/termsConditionsTranslations'

const TermsConditions = () => {
    const { language } = useLanguage()
    const t =
        termsConditionsTranslations[language] ||
        termsConditionsTranslations.English

    const renderParagraphWithEmail = (para) => {
        const email = "support@cabquik.com"
        return para.split(email).map((part, index, arr) => (
            <React.Fragment key={index}>
                {part}
                {index < arr.length - 1 && (
                    <a href={`mailto:${email}`} className="text-blue-600 underline">{email}</a>
                )}
            </React.Fragment>
        ))
    }

    return (
        <>
            <ServicesHero
                title={t.hero.title}
                description={t.hero.description}
            />

            <section className="privacy-wrapper">
                <Container>
                    <div className="privacy-content">

                        <div className="privacy-section">
                            <h3>{t.overview.heading}</h3>
                            <p>{t.overview.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.usageRules.heading}</h3>
                            <p>{t.usageRules.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.serviceScope.heading}</h3>
                            <p>{t.serviceScope.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.userConduct.heading}</h3>
                            <p>{t.userConduct.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.driverStatus.heading}</h3>
                            <p>{t.driverStatus.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.pricing.heading}</h3>
                            <p>{t.pricing.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.liability.heading}</h3>
                            <p>{t.liability.para}</p>
                        </div>

                        <div className="privacy-section no-border">
                            <h3>{t.termination.heading}</h3>
                            <p>{renderParagraphWithEmail(t.termination.para)}</p>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default TermsConditions
