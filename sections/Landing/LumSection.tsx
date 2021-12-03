import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import { gsap } from 'gsap';

import { AssetsSrc } from 'constant';
import { Button, SpotlightImage } from 'components';

import './LumSection.module.scss';

const UniversalReward = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#lum .universal-reward`,
            start: 'top 65%',
            end: 'top 30%',
            scrub: true,
        };
        gsap.from(`#lum .universal-reward .section-content-title`, {
            y: 40,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#lum .universal-reward .section-content-info`, {
            y: 80,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#lum .universal-reward .section-content-illu`, {
            y: 120,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <div className="universal-reward row flex-md-row flex-column justify-content-between align-items-center">
            <div className="section-content-illu col-lg-6 d-flex justify-content-center">
                <SpotlightImage
                    uid={'lumreward'}
                    imgSrc={AssetsSrc.images.rewardBlueLarge}
                    imgAlt="Universal LUM reward"
                    beamSize={0.75}
                    animated={true}
                    scrollTrigger={`#lum .universal-reward`}
                >
                    <Image
                        className="reward-blue-medium"
                        src={AssetsSrc.images.rewardBlueMedium}
                        alt="Blue medium diamond"
                    />
                    <Image
                        className="reward-blue-small"
                        src={AssetsSrc.images.rewardBlueSmall}
                        alt="Blue small diamond"
                    />
                </SpotlightImage>
            </div>
            <div className="col-12 col-lg-6">
                <h1 className="section-content-title" dangerouslySetInnerHTML={{ __html: t('rewards.title') }} />
                <p className="section-content-info" dangerouslySetInnerHTML={{ __html: t('rewards.description') }} />
            </div>
        </div>
    );
};

const PoweredBy = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#lum .powered-by`,
            start: 'top 65%',
            end: 'top 30%',
            scrub: true,
        };
        gsap.from(`#lum .powered-by .section-content-title`, {
            y: 40,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
            stagger: 0.2,
        });
        gsap.from(`#lum .powered-by .section-content-info`, {
            y: 80,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#lum .powered-by .section-content-illu`, {
            y: 120,
            scale: 0.75,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <div className="row powered-by d-flex justify-content-center">
            <div
                className="col-12 d-flex align-items-center justify-content-start justify-content-sm-center flex-wrap"
                style={{ position: 'relative' }}
            >
                <h1
                    className="section-content-title part-1"
                    dangerouslySetInnerHTML={{ __html: t('poweredBy.title1') }}
                />
                <h1
                    className="section-content-title part-2"
                    dangerouslySetInnerHTML={{ __html: t('poweredBy.title2') }}
                />
                <Image className="section-content-title part-3" src={AssetsSrc.images.lumLogoTextWhite} alt="Lum" />
                <Image className="section-content-illu" src={AssetsSrc.images.poweredByLum} alt="Huge Lum Coin" />
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
                <p className="section-content-info" dangerouslySetInnerHTML={{ __html: t('poweredBy.description1') }} />
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
                <p className="section-content-info" dangerouslySetInnerHTML={{ __html: t('poweredBy.description2') }} />
            </div>
        </div>
    );
};

const LumSection = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className="dark" id="lum">
            <div id="lum-content" className="container">
                <UniversalReward />
                <PoweredBy />
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="section-content-info power-card">
                            <Image src={AssetsSrc.images.stakeEarn} alt="Stake and earn" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.future.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.future.description') }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="section-content-info power-card">
                            <Image src={AssetsSrc.images.secureChain} alt="Secure the chain" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.stake.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.stake.description') }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="section-content-info power-card">
                            <Image src={AssetsSrc.images.rewardBlueLarge} alt="Become the future" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.security.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.security.description') }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content-info row">
                    <div className="col-12 d-flex align-items-center justify-content-center cta">
                        <Button
                            className="align-self-center"
                            data-bs-toggle="modal"
                            data-bs-target={'#get-informed-modal'}
                        >
                            <strong className="px-3">{t('common.getLum')}</strong>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LumSection;
