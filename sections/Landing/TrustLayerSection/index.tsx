import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { gsap } from 'utils';

import { AssetsSrc } from 'constant';

import styles from './TrustLayerSection.module.scss';

const TrustLayerSection = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const q = gsap.utils.selector(`#trustlayer`);

        const scrollTrigger = {
            trigger: `#trustlayer`,
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
        gsap.from(q(`#layers-wrapper`), {
            y: 200,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
    }, []);

    return (
        <section id="trustlayer" className={styles.trustlayer}>
            <div className={`container ${styles['trust-layers']}`}>
                <div className="row d-flex flex-lg-row flex-column justify-content-between">
                    <div className="col-12 col-lg-6 col-xl-7 d-flex justify-content-center justify-content-lg-start">
                        <div id="layers-wrapper" className={styles['trust-layers-wrapper']}>
                            <img
                                className={styles['trust-layers']}
                                src={AssetsSrc.images.trustLayers}
                                alt="Trust layers"
                            />
                            <img
                                className={styles['trust-layers-shadows']}
                                src={AssetsSrc.images.trustLayersShadows}
                                alt="Trust layers shadows"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('business.title') }}
                        />
                        <div className="row">
                            <div
                                className={`section-content-info col-12 col-sm-6 d-flex flex-column ${styles['uvp-container']}`}
                            >
                                <div className={styles['light-icon-wrapper']}>
                                    <img src={AssetsSrc.images.contentStamping} alt="Content stamping" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.store.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.store.description') }} />
                            </div>
                            <div
                                className={`section-content-info col-12 col-sm-6 d-flex flex-column ${styles['uvp-container']}`}
                            >
                                <div className={styles['light-icon-wrapper']}>
                                    <img src={AssetsSrc.images.traceabilityIcon} alt="Traceability" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.tracability.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.tracability.description') }} />
                            </div>
                            <div
                                className={`section-content-info col-12 col-sm-6 d-flex flex-column ${styles['uvp-container']}`}
                            >
                                <div className={styles['light-icon-wrapper']}>
                                    <img src={AssetsSrc.images.transparencyIcon} alt="Transparency" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.transparency.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.transparency.description') }} />
                            </div>
                            <div
                                className={`section-content-info col-12 col-sm-6 d-flex flex-column ${styles['uvp-container']}`}
                            >
                                <div className={styles['light-icon-wrapper']}>
                                    <img src={AssetsSrc.images.businessIcon} alt="Business application" />
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