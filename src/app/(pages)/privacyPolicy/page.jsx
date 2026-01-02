'use client'

import React from 'react'
import { Container } from 'react-bootstrap'
import { ServicesHero } from '../../components/ServicesHero'
import { useLanguage } from '../../Context/LanguageContext'
import { privacyPolicyTranslations } from '../../translations/privacyPolicyTranslations'

const PrivacyPolicy = () => {
    const { language } = useLanguage()
    const t = privacyPolicyTranslations[language] || privacyPolicyTranslations.English

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
                            <h3>{t.introduction.heading}</h3>
                            <p>{t.introduction.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.dataCollection.heading}</h3>
                            <p>{t.dataCollection.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.dataSharing.heading}</h3>
                            <p>{t.dataSharing.para}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.userRights.heading}</h3>
                            <p>{t.userRights.para}</p>
                        </div>

                        <div className="privacy-section no-border">
                            <h3>{t.policyUpdates.heading}</h3>
                            <p>{renderParagraphWithEmail(t.policyUpdates.para)}</p>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default PrivacyPolicy
