import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { gsap, Linear } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

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

gsap.registerPlugin(MotionPathPlugin);

const MV_PATH_COUNT = 6;

export function MvDot(props: {
    uid: string;
    glowContainerRef: RefObject<HTMLDivElement>;
    glowRef: RefObject<HTMLDivElement>;
}): JSX.Element {
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        if (scroll && props.glowContainerRef.current && props.glowRef.current) {
            const pathId = Math.floor(Math.random() * MV_PATH_COUNT + 1);
            gsap.timeline()
                .to(`.mv-dot-${props.uid}`, {
                    duration: 3.0 + Math.random() * 2,
                    motionPath: {
                        path: `#mv-dot-path-${pathId}`,
                        align: `#mv-dot-path-${pathId}`,
                        alignOrigin: [0.5, 0.5],
                        start: 0,
                        end: 1,
                        curviness: 2,
                        type: 'elastic',
                    },
                    ease: Linear.easeIn,
                })
                .add(() => {
                    if (props.glowRef.current && props.glowContainerRef.current) {
                        const classes = props.glowRef.current.classList.toString().split(' ');
                        const lastCls = classes[classes.length - 1];
                        const popId = parseInt(lastCls.substr(3));
                        props.glowRef.current.classList.add(`pop${popId ? popId + 1 : 1}`);
                        props.glowContainerRef.current.classList.add(`pop`);
                    }
                }, '-=0.2')
                .add(() => {
                    if (props.glowContainerRef.current) {
                        props.glowContainerRef.current.classList.remove(`pop`);
                    }
                }, '+=0.025')
                .add(() => {
                    if (props.glowRef.current) {
                        const classes = props.glowRef.current.classList.toString().split(' ');
                        const lastCls = classes[classes.length - 1];
                        const popId = parseInt(lastCls.substr(3));
                        if (popId) {
                            props.glowRef.current.classList.remove(`pop${popId}`);
                        }
                    }
                }, '+=0.4');
        }
    }, [scroll, props.uid, props.glowContainerRef, props.glowRef]);

    return (
        <div className={`dot mv-dot-${props.uid}`}>
            <div className="dot-inner-layer-1" />
            <div className="dot-inner-layer-2" />
            <div className="dot-inner-layer-3" />
        </div>
    );
}
export function Welcome(): JSX.Element {
    const { t } = useTranslation();
    const { scroll } = useLocomotiveScroll();
    const bubbleRef = useRef<HTMLImageElement>(null);
    const glowContainerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const [dots, setDots] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (scroll && bubbleRef.current) {
            setDots([<MvDot key="1" uid="1" glowContainerRef={glowContainerRef} glowRef={glowRef} />]);
        }
    }, [scroll]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (dots.length > 10) {
                const newDots = dots.slice(Math.max(dots.length - 25, 1));
                setDots(newDots);
            }
        }, 500);
        return () => clearInterval(timer);
    }, [dots, setDots]);

    const sendDot = useCallback(() => {
        const newDots = dots.slice();
        const dotId = dots.length > 0 ? parseInt((dots[dots.length - 1].key || '0').toString()) + 1 : 1;
        newDots.push(<MvDot key={`${dotId}`} uid={`${dotId}`} glowContainerRef={glowContainerRef} glowRef={glowRef} />);
        setDots(newDots);
    }, [dots, setDots]);

    useEffect(() => {
        const timer = setInterval(() => {
            sendDot();
        }, 3000);
        return () => clearInterval(timer);
    }, [sendDot]);

    return (
        <section data-scroll-section className="dark" id="welcome">
            <div className="container" />
            <div className="container">
                <div className="row flex-lg-row flex-column-reverse align-items-center">
                    <svg width="2005" height="195" viewBox="0 0 2005 195" fill="none">
                        <path
                            id="mv-dot-path-1"
                            d="M2.5 192.369C65.4056 142.747 143.289 59.7061 284.078 49.5791C424.866 39.4522 488.271 186.293 648.531 186.293C808.791 186.293 877.687 36.9205 1074.39 6.53973C1271.1 -23.8411 1420.87 174.14 1648.53 172.115C1876.19 170.09 1975.54 108.822 2002.5 95.6567"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <svg width="2006" height="194" viewBox="0 0 2006 194" fill="none">
                        <path
                            id="mv-dot-path-2"
                            d="M3 2.5C28.5128 36.8636 134.566 137.991 306.652 133.573C478.738 129.155 581.789 40.7909 783.39 46.6818C984.991 52.5727 1162.58 191.5 1292.64 191.5C1422.71 191.5 1541.77 64.8455 1720.36 52.5727C1863.23 42.7545 1968.32 76.7091 2003 97"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <svg width="1754" height="991" viewBox="0 0 1754 991" fill="none">
                        <path
                            id="mv-dot-path-3"
                            d="M3 3C76.5 197 277 961.5 631 987.5C985 1013.5 987.998 272 1205.5 251C1423 230 1478.5 491.5 1751 494"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <svg width="1942" height="783" viewBox="0 0 1942 783" fill="none">
                        <path
                            id="mv-dot-path-4"
                            d="M2.5 780.5C65.5 489.5 98 19.0001 494 3.00002C890 -13.0001 863.5 535 1217.5 585C1571.5 635 1703 419 1939 392.5"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <svg width="2006" height="469" viewBox="0 0 2006 469" fill="none">
                        <path
                            id="mv-dot-path-5"
                            d="M3 385.635C68.0145 94.6193 233.131 -71.8898 406.502 36.1159C579.874 144.122 660.368 763.154 1182.55 290.129C1704.73 -182.896 1759.45 267.001 2003 240.5"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <svg width="2000" height="411" viewBox="0 0 2000 411" fill="none">
                        <path
                            id="mv-dot-path-6"
                            d="M-4 3C65.5 288 397.448 179.773 500.5 250.5C603.552 321.227 753.917 455.949 919.5 390.5C1085.08 325.051 1205.88 -44.7372 1446.5 159C1687.12 362.737 1778 407 1999 189"
                            stroke="white"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>

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
                    <div className="col-lg-5 d-flex justify-content-end" onClick={sendDot}>
                        <div className="glowing-bubble" ref={glowContainerRef}>
                            <div className="glow" ref={glowRef} />
                            <img src={Assets.images.glowingBubble} alt="Lum Network Enlightment" ref={bubbleRef} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <a
                    onClick={() => {
                        scroll.scrollTo(document.getElementById('trustlayer'));
                    }}
                    className="scroll-cta-container scale-anim d-flex flex-row align-self-center align-self-md-end align-items-center mb-5 mt-4 mt-lg-0"
                >
                    <div className="d-none d-md-block">{t('landing.scrollAction')}</div>
                    <div className="border rounded-circle ms-md-4 arrow-icon-container">
                        <img src={Assets.images.downArrowIcon} alt="Scroll down arrow" width="11" height="11" />
                    </div>
                </a>
            </div>
            {dots}
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
                            beamSize={0.9}
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
                smooth: false,
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
