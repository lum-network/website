import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import './GreenSection.scss';

const GreenSection = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#green`,
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
        };
        gsap.from(`#green .section-content-title`, {
            y: 25,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#green .section-content-info`, {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
            stagger: 0.1,
        });
    }, []);

    return (
        <section className="light" id="green">
            <div id="green-content" className="container">
                <div className="row">
                    <div className="col-lg-5 col-xl-6">
                        <h1
                            className="section-content-info"
                            dangerouslySetInnerHTML={{ __html: t('greenSection.title') }}
                        />
                    </div>
                    <div className="col-lg-7 col-xl-6">
                        <div className="row">
                            <div className="section-content-info col-lg-6">
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.pOfS.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.pOfS.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.carbon.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.carbon.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.costs.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.costs.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.blocks.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.blocks.description') }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreenSection;
