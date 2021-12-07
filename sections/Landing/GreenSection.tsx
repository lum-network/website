import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { gsap } from 'utils';

import styles from './GreenSection.module.scss';

const GreenSection = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const q = gsap.utils.selector('#green');
        const scrollTrigger = {
            trigger: '#green',
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
        };
        gsap.from(q(`.section-content-title`), {
            y: 25,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
        gsap.from(q(`.section-content-info`), {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
            stagger: 0.1,
        });
    }, []);

    return (
        <section id="green" className={`light ${styles.green}`}>
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
                                <div className={styles['green-dot']} />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.pOfS.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.pOfS.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className={styles['green-dot']} />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.carbon.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.carbon.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className={styles['green-dot']} />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.costs.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.costs.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className={styles['green-dot']} />
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
