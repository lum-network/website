import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';

import styles from './TrustLayerSection.module.scss';
import { AssetsSrc } from 'constant';

const TrustLayerSection = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#trustlayer`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };

        gsap.from(`#trustlayer .section-content-title`, {
            y: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#trustlayer .section-content-info`, {
            y: 150,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#trustlayer .trust-layers-wrapper`, {
            y: 200,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <section id="dark" className={styles.trustlayer}>
            <div className={`container ${styles['trust-layers']}`}>
                <div className="row d-flex flex-lg-row flex-column justify-content-between">
                    <div className="col-12 col-lg-6 col-xl-7 d-flex justify-content-center justify-content-lg-start">
                        <div className={styles['trust-layers-wrapper']}>
                            <Image
                                className={styles['trust-layers']}
                                src={AssetsSrc.images.trustLayers}
                                alt="Trust layers"
                                layout="fill"
                            />
                            <Image
                                className={styles['trust-layers-shadows']}
                                src={AssetsSrc.images.trustLayersShadows}
                                alt="Trust layers shadows"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('business.title') }}
                        />
                        <div className="row">
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <Image
                                        src={AssetsSrc.images.contentStamping}
                                        alt="Content stamping"
                                        layout="fill"
                                    />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.store.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.store.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <Image src={AssetsSrc.images.traceabilityIcon} alt="Traceability" layout="fill" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.tracability.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.tracability.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <Image src={AssetsSrc.images.transparencyIcon} alt="Transparency" layout="fill" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.transparency.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.transparency.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <Image
                                        src={AssetsSrc.images.businessIcon}
                                        alt="Business application"
                                        layout="fill"
                                    />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.practices.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.practices.description') }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustLayerSection;
