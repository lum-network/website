import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import { Button, SpotlightImage } from 'components';

import universalRewardIllu from 'assets/images/universal_reward.png';
import poweredByIllu from 'assets/images/power_by_the_lum.png';
import stakeEarnIllu from 'assets/images/stake_earn.png';
import secureIllu from 'assets/images/secure_chain.png';
import rewardIllu from 'assets/images/reward.png';

import './LumSection.scss';

const UniversalReward = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#lum`,
            start: 'top 90%',
            end: 'top 50%',
            scrub: true,
        };
        gsap.from(`#lum .universal-reward .section-content-title`, {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#lum .universal-reward .section-content-info`, {
            y: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#lum .universal-reward .section-content-illu`, {
            y: 150,
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
                    imgSrc={universalRewardIllu}
                    imgAlt="Universal LUM reward"
                    beamSize={0.9}
                />
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
            trigger: `#lum`,
            start: 'top 60%',
            end: 'top 5%',
            scrub: true,
        };
        gsap.from(`#lum .powered-by .section-content-title`, {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
            stagger: 0.25,
        });
        gsap.from(`#lum .powered-by .section-content-info`, {
            y: 150,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#lum .powered-by .section-content-illu`, {
            y: 200,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <div className="row powered-by">
            <div className="col-12">
                <h1 className="section-content-title" dangerouslySetInnerHTML={{ __html: t('poweredBy.title1') }} />
                <img className="section-content-illu" src={poweredByIllu} alt="Huge Lum Coin" />
                <h1 className="section-content-title" dangerouslySetInnerHTML={{ __html: t('poweredBy.title2') }} />
            </div>
            <div className="col-lg-6">
                <p className="section-content-info" dangerouslySetInnerHTML={{ __html: t('poweredBy.description1') }} />
            </div>
            <div className="col-lg-6">
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
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="section-content-info power-card">
                            <img src={stakeEarnIllu} alt="Stake and earn" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.future.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.future.description') }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="section-content-info power-card">
                            <img src={secureIllu} alt="Secure the chain" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.stake.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.stake.description') }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="section-content-info power-card">
                            <img src={rewardIllu} alt="Become the future" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.security.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.security.description') }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content-info row">
                    <div className="col-12 d-flex align-items-center justify-content-center cta">
                        <Button className="align-self-center" onClick={() => window.alert('TODO')}>
                            <strong className="px-3">{t('common.getLum')}</strong>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LumSection;
