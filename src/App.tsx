import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Trans, useTranslation } from 'react-i18next';

import Assets from 'assets';
import { LUM_NETWORK_WHITEPAPER } from 'constant';
import { Button, Footer, Header, Link, SpotlightImage } from 'components';

import './styles/App.scss';
import './styles/Welcome.scss';
import './styles/TrustLayer.scss';
import './styles/Partnering.scss';
import './styles/Rewards.scss';
import './styles/LumPowered.scss';
import './styles/Green.scss';

export function Welcome(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section data-scroll-section className="dark" id="welcome">
            <div className="container" />
            <div className="container">
                <div className="row flex-lg-row flex-column-reverse align-items-center">
                    <div className="col-lg-7 text-center text-md-start">
                        <h1>{t('landing.title')}</h1>
                        <p>{t('landing.description')}</p>
                        <div className="d-flex align-items-center">
                            <Button onClick={() => window.alert('TODO')}>
                                <strong className="px-3">{t('common.getLum')}</strong>
                            </Button>
                            <Link
                                className="ms-5 scale-anim d-flex flex-row align-items-baseline"
                                link={LUM_NETWORK_WHITEPAPER}
                            >
                                <strong className="border-bottom border-2 pb-2 me-2">{t('landing.whitePaper')}</strong>
                                {'>'}
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-end">
                        <img
                            src={Assets.images.glowingBubble}
                            alt="Lum Network Enlightment"
                            className="glowing-bubble"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <a
                    href="#trustlayer"
                    className="scroll-cta-container scale-anim d-flex flex-row align-self-center align-self-md-end align-items-center mb-5 mt-4 mt-lg-0"
                >
                    <div className="d-none d-md-block">{t('landing.scrollAction')}</div>
                    <div className="border rounded-circle ms-md-4 arrow-icon-container">
                        <img src={Assets.images.downArrowIcon} alt="Scroll down arrow" width="11" height="11" />
                    </div>
                </a>
            </div>
        </section>
    );
}

export function TrustLayer(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section data-scroll-section className="dark" id="trustlayer">
            <div className="container">
                <div className="row flex-lg-row flex-column justify-content-between">
                    <div className="col-lg-6">
                        <SpotlightImage
                            uid={'trustlayer'}
                            imgSrc={Assets.images.doubleMirror}
                            imgAlt="Business Trust Layer"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1>
                            <Trans i18nKey="business.title" />
                        </h1>
                        <div className="row">
                            <div className="col-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.contentStamping} alt="Content stamping" />
                                </div>
                                <h2>{t('business.store.title')}</h2>
                                <p>{t('business.store.description')}</p>
                            </div>
                            <div className="col-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.traceabilityIcon} alt="Traceability" />
                                </div>
                                <h2>{t('business.tracability.title')}</h2>
                                <p>{t('business.tracability.description')}</p>
                            </div>
                            <div className="col-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.transparencyIcon} alt="Transparency" />
                                </div>
                                <h2>{t('business.transparency.title')}</h2>
                                <p>{t('business.transparency.description')}</p>
                            </div>
                            <div className="col-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.businessIcon} alt="Business application" />
                                </div>
                                <h2>{t('business.practices.title')}</h2>
                                <p>{t('business.practices.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Partnering(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section data-scroll-section className="dark" id="partnering">
            <div className="container">
                <div className="row flex-md-row flex-column-reverse justify-content-between">
                    <div className="col-lg-5">
                        <h1>
                            <Trans i18nKey="qAndA.title" />
                        </h1>
                        <div className="row">
                            <div className="col-12 d-flex uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.diamondIcon} className="section-icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h2>{t('qAndA.companies.title')}</h2>
                                    <p>{t('qAndA.companies.description')}</p>
                                </div>
                            </div>
                            <div className="col-12 d-flex uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.scaleIcon} className="section-icon" />
                                </div>
                                <div>
                                    <h2>{t('qAndA.trust.title')}</h2>
                                    <p>{t('qAndA.trust.description')}</p>
                                </div>
                            </div>
                            <div className="col-12 d-flex uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.communityIcon} className="section-icon" />
                                </div>
                                <div>
                                    <h2>{t('qAndA.community.title')}</h2>
                                    <p>{t('qAndA.community.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center justify-content-end">
                        <SpotlightImage
                            uid={'partnering'}
                            imgSrc={Assets.images.businessLayer}
                            imgAlt="Partnering with third parties"
                            direction={-1}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Rewards(): JSX.Element {
    return (
        <section data-scroll-section className="dark" id="rewards">
            <div className="container">
                <div className="row flex-md-row flex-column justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <SpotlightImage
                            uid={'lumreward'}
                            imgSrc={Assets.images.diamondIllu}
                            imgAlt="Universal LUM reward"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1>
                            <Trans i18nKey="rewards.title" />
                        </h1>
                        <p>
                            <Trans i18nKey="rewards.description" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function LumPowered(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section data-scroll-section className="dark" id="lum">
            <div className="container">
                <div className="row title-desc">
                    <div className="col-lg-4">
                        <h1>
                            {t('poweredBy.title')}
                            <strong>Lum.</strong>
                        </h1>
                    </div>
                    <div className="col-lg-8">
                        <p>{t('poweredBy.description')}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="power-card">
                            <img src={Assets.images.paperIllu} alt="Become the future" />
                            <div>
                                <h2>{t('poweredBy.security.title')}</h2>
                                <p>{t('poweredBy.security.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="power-card">
                            <img src={Assets.images.cubeIllu} alt="Secure the chain" />
                            <div>
                                <h2>{t('poweredBy.stake.title')}</h2>
                                <p>{t('poweredBy.stake.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="power-card">
                            <img src={Assets.images.coinsIllu} alt="Stake and earn" />
                            <div>
                                <h2>{t('poweredBy.future.title')}</h2>
                                <p>{t('poweredBy.future.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex align-items-center justify-content-center">
                        <Button className="align-self-center" onClick={() => window.alert('TODO')}>
                            <strong className="px-3">{t('common.getLum')}</strong>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Green(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section data-scroll-section className="light" id="green">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>
                            <Trans i18nKey="greenSection.title" />
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="green-dot" />
                                <h2>{t('greenSection.pOfS.titleCosmos')}</h2>
                                <p>{t('greenSection.pOfS.description')}</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="green-dot" />
                                <h2>{t('greenSection.carbon.title')}</h2>
                                <p>{t('greenSection.carbon.description')}</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="green-dot" />
                                <h2>{t('greenSection.costs.title')}</h2>
                                <p>{t('greenSection.costs.description')}</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="green-dot" />
                                <h2>{t('greenSection.blocks.title')}</h2>
                                <p>{t('greenSection.blocks.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const App = (): JSX.Element => {
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.1,
            }}
            containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef}>
                <Header modalId="#getInformedModal" />
                <Welcome />
                <TrustLayer />
                <Partnering />
                <Rewards />
                <LumPowered />
                <Green />
                <Footer />
            </main>
        </LocomotiveScrollProvider>
    );
};

export default App;
