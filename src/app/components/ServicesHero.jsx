
import { Container } from 'react-bootstrap'

export const ServicesHero = ({ title, description, subtitle }) => {
    return (

        <section className='services-hero hero-section' >
            <Container>
                <div className="hero-content services-hero-content">
                    <h1 className='hero-title' data-aos="fade-up" data-aos-delay="100">
                        <span>{subtitle}</span>  {title}
                    </h1>

                    <p className="hero-paragraph" data-aos="fade-up" data-aos-delay="200">
                        {description}
                    </p>
                </div>
            </Container>
        </section >
    )
}
