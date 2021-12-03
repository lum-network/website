import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import Image from 'next/image';

import './PartneringSection.module.scss';
import { AssetsSrc } from 'constant';

const LenseIllustration = (): JSX.Element => {
    return (
        <div className="lense-illu-container">
            <div className="lense-wrapper lense-large-wrapper">
                <Image className="lense-large" src={AssetsSrc.images.lenseWhiteLarge} alt="Large White Lense" />
            </div>
            <div className="lense-wrapper lense-medium-wrapper">
                <Image className="lense-medium" src={AssetsSrc.images.lenseWhiteMedium} alt="Medium White Lense" />
            </div>
            <div className="lense-wrapper lense-small-wrapper">
                <Image className="lense-small" src={AssetsSrc.images.lenseWhiteSmall} alt="Small White Lense" />
            </div>
        </div>
    );
};

const PartneringSection = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#partnering`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };
        gsap.from(`#partnering .section-content-title`, {
            y: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#partnering .section-content-info`, {
            y: 150,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#partnering .lense-small-wrapper`, {
            y: 300,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#partnering .lense-medium-wrapper`, {
            y: 250,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#partnering .lense-large-wrapper`, {
            y: 200,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <section className="dark" id="partnering">
            <div id="partnering-content" className="container">
                <div className="row d-flex flex-column-reverse flex-lg-row justify-content-between">
                    <div className="col-lg-6 col-xl-5">
                        <h1 className="section-content-title" dangerouslySetInnerHTML={{ __html: t('qAndA.title') }} />
                        <div className="row">
                            <div className="section-content-info col-12 d-flex uvp-container">
                                <div className="blue-icon-wrapper">
                                    <Image src={AssetsSrc.images.diamondIcon} className="section-icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.companies.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.companies.description') }} />
                                </div>
                            </div>
                            <div className="section-content-info col-12 d-flex uvp-container">
                                <div className="blue-icon-wrapper">
                                    <Image src={AssetsSrc.images.layersIcon} className="section-icon" />
                                </div>
                                <div>
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.trust.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.trust.description') }} />
                                </div>
                            </div>
                            <div className="section-content-info col-12 d-flex uvp-container">
                                <div className="blue-icon-wrapper">
                                    <Image src={AssetsSrc.images.communityIcon} className="section-icon" />
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
