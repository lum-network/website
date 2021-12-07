import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { gsap } from 'utils';

import { AssetsSrc } from 'constant';

import styles from './PartneringSection.module.scss';

const LenseIllustration = (): JSX.Element => {
    return (
        <div className={styles['lense-illu-container']}>
            <div className={`${styles['lense-wrapper']} lense-large-wrapper`}>
                <img className={styles['lense-large']} src={AssetsSrc.images.lenseWhiteLarge} alt="Large White Lense" />
            </div>
            <div className={`${styles['lense-wrapper']} lense-medium-wrapper`}>
                <img
                    className={styles['lense-medium']}
                    src={AssetsSrc.images.lenseWhiteMedium}
                    alt="Medium White Lense"
                />
            </div>
            <div className={`${styles['lense-wrapper']} lense-small-wrapper`}>
                <img className={styles['lense-small']} src={AssetsSrc.images.lenseWhiteSmall} alt="Small White Lense" />
            </div>
        </div>
    );
};

const PartneringSection = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const q = gsap.utils.selector('#partnering');
        const scrollTrigger = {
            trigger: '#partnering',
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };
        gsap.from(q(`.section-content-title`), {
            y: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
        gsap.from(q(`.section-content-info`), {
            y: 150,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
        gsap.from(q(`.lense-small-wrapper`), {
            y: 300,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
        gsap.from(q(`.lense-medium-wrapper`), {
            y: 250,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
        gsap.from(q(`.lense-large-wrapper`), {
            y: 200,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
    }, []);

    return (
        <section id="partnering" className={styles.partnering}>
            <div id="partnering-content" className="container">
                <div className="row d-flex flex-column-reverse flex-lg-row justify-content-between">
                    <div className="col-lg-6 col-xl-5">
                        <h1 className="section-content-title" dangerouslySetInnerHTML={{ __html: t('qAndA.title') }} />
                        <div className="row">
                            <div className={`section-content-info col-12 d-flex ${styles['uvp-container']}`}>
                                <div className={styles['blue-icon-wrapper']}>
                                    <img src={AssetsSrc.images.diamondIcon} className="section-icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.companies.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.companies.description') }} />
                                </div>
                            </div>
                            <div className={`section-content-info col-12 d-flex ${styles['uvp-container']}`}>
                                <div className={styles['blue-icon-wrapper']}>
                                    <img src={AssetsSrc.images.layersIcon} className="section-icon" />
                                </div>
                                <div>
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.trust.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.trust.description') }} />
                                </div>
                            </div>
                            <div className={`section-content-info col-12 d-flex ${styles['uvp-container']}`}>
                                <div className={styles['blue-icon-wrapper']}>
                                    <img src={AssetsSrc.images.communityIcon} className="section-icon" />
                                </div>
                                <div>
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.community.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.community.description') }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7 d-flex align-items-center justify-content-center">
                        <LenseIllustration />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartneringSection;
