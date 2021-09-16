import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap, Linear } from 'gsap';

import { Button, Link } from 'components';
import { MIN_LARGE_DEVICE_WIDTH, LUM_NETWORK_WHITEPAPER } from 'constant';
import { Hooks } from 'utils';

import crystalWhiteLarge from 'assets/images/crystal_white_large.png';
import crystalWhiteMedium from 'assets/images/crystal_white_medium.png';
import crystalWhiteSmall from 'assets/images/crystal_white_small.png';
import crystalsShadows from 'assets/images/crystals_shadows.png';
import downArrowIcon from 'assets/images/down-arrow.svg';

import './WelcomeSection.scss';

const MV_PATH_COUNT = 4;

const DotsSvgPaths = (): JSX.Element => {
    return (
        <>
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
            <svg width="2006" height="469" viewBox="0 0 2006 469" fill="none">
                <path
                    id="mv-dot-path-3"
                    d="M3 385.635C68.0145 94.6193 233.131 -71.8898 406.502 36.1159C579.874 144.122 660.368 763.154 1182.55 290.129C1704.73 -182.896 1759.45 267.001 2003 240.5"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </svg>
            <svg width="2000" height="411" viewBox="0 0 2000 411" fill="none">
                <path
                    id="mv-dot-path-4"
                    d="M-4 3C65.5 288 397.448 179.773 500.5 250.5C603.552 321.227 753.917 455.949 919.5 390.5C1085.08 325.051 1205.88 -44.7372 1446.5 159C1687.12 362.737 1778 407 1999 189"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </svg>
        </>
    );
};

const CrystalIllustration = (): JSX.Element => {
    return (
        <div className="crystal-illu-container">
            <img className="crystals-shadows" src={crystalsShadows} alt="Crystals shadows" />
            <div className="crystal-wrapper crystal-small-wrapper">
                <img className="crystal-small" src={crystalWhiteSmall} alt="Small White Crystal" />
            </div>
            <div className="crystal-wrapper crystal-medium-wrapper">
                <img className="crystal-medium" src={crystalWhiteMedium} alt="Medium White Crystal" />
            </div>
            <div className="crystal-wrapper crystal-large-wrapper">
                <img className="crystal-large" src={crystalWhiteLarge} alt="Large White Crystal" />
            </div>
        </div>
    );
};

const MovingDot = (props: { uid: string }): JSX.Element => {
    useEffect(() => {
        const pathId = Math.floor(Math.random() * MV_PATH_COUNT + 1);
        const rdm = Math.random();
        gsap.timeline()
            .to(`.mv-dot-${props.uid}`, {
                opacity: 1,
                duration: 1,
            })
            .to(
                `.mv-dot-${props.uid}`,
                {
                    duration: 3.5 + rdm * 2,
                    motionPath: {
                        path: `#mv-dot-path-${pathId}`,
                        align: `#mv-dot-path-${pathId}`,
                        alignOrigin: [0.5, 0.5],
                        start: rdm / 4.0,
                        end: Math.min(rdm / 4.0 + 0.75, 1.0),
                        curviness: 2,
                        type: 'elastic',
                    },
                    ease: Linear.easeIn,
                },
                '=-1',
            )
            .to(
                `.mv-dot-${props.uid}`,
                {
                    opacity: 0,
                    duration: 1,
                },
                '=-1',
            );
    }, [props.uid]);

    return (
        <div className={`dot mv-dot-${props.uid}`}>
            <div className="dot-inner-layer-1" />
            <div className="dot-inner-layer-2" />
            <div className="dot-inner-layer-3" />
        </div>
    );
};

const WelcomeSection = (): JSX.Element => {
    const { t } = useTranslation();
    const { width } = Hooks.useWindowSize();

    const [dots, setDots] = useState<JSX.Element[]>([]);
    const [enableDots, setEnableDots] = useState<boolean>(true);

    const sendDot = useCallback(() => {
        // Create a new dot and add it to the dots array
        const newDots = dots.slice();
        const dotId = dots.length > 0 ? parseInt((dots[dots.length - 1].key || '0').toString()) + 1 : 1;
        newDots.push(<MovingDot key={`${dotId}`} uid={`${dotId}`} />);
        setDots([]); // add newDots instead of an empty array to enable dots
    }, [dots, setDots]);

    useEffect(() => {
        // Disable moving dots on small devices
        const enable = width >= MIN_LARGE_DEVICE_WIDTH;
        if (enable !== enableDots) {
            setEnableDots(enable);
        }
    }, [enableDots, width]);

    useEffect(() => {
        // Send a dot periodically
        const timer = setInterval(() => {
            if (enableDots) {
                sendDot();
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [sendDot, enableDots]);

    useEffect(() => {
        // Clear extra dots periodically
        const timer = setInterval(() => {
            if (!enableDots) {
                setDots([]);
            } else if (dots.length > 10) {
                const newDots = dots.slice(Math.max(dots.length - 25, 1));
                setDots(newDots);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [dots, setDots, enableDots]);

    useEffect(() => {
        // GSAP Section Animations
        const tl = gsap.timeline();
        tl.fromTo(`#welcome`, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.75 });
        const scrollTrigger = {
            trigger: `#welcome`,
            start: '5% top',
            end: '50% top',
            scrub: true,
        };
        gsap.to(`#welcome .section-content-title`, {
            translateY: -100,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.to(`#welcome .section-content-info`, {
            translateY: -75,
            ease: 'none',
            scrollTrigger: scrollTrigger,
            stragger: 0.25,
        });
        gsap.to(`#welcome .crystal-small-wrapper`, {
            translateY: -125,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.to(`#welcome .crystal-medium-wrapper`, {
            translateY: -100,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.to(`#welcome .crystal-large-wrapper`, {
            translateY: -75,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.to(`#welcome .crystals-shadows`, {
            translateY: -75,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <section className="dark" id="welcome">
            {dots}
            <div className="bg-lightning" />
            <div className="container" />
            <div id="welcome-content" className="container">
                <div className="row flex-lg-row flex-column-reverse align-items-center">
                    <DotsSvgPaths />

                    <div className="col-12 col-lg-7 text-center text-lg-start">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('landing.title') }}
                        />
                        <p
                            className="section-content-info"
                            dangerouslySetInnerHTML={{ __html: t('landing.description') }}
                        />
                        <div className="section-content-info d-flex align-items-center justify-content-center justify-content-lg-start">
                            <Button data-bs-toggle="modal" data-bs-target={'#get-informed-modal'}>
                                <strong>{t('common.getLum')}</strong>
                            </Button>
                            <Link
                                className="ms-5 scale-anim d-flex flex-row align-items-baseline"
                                link={LUM_NETWORK_WHITEPAPER}
                            >
                                <strong className="border-bottom border-2 pb-2 me-2">{t('landing.whitePaper')}</strong>
                                {'➤'}
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                        <CrystalIllustration />
                    </div>
                </div>
            </div>
            <div className="container">
                <a
                    onClick={() => {
                        document.getElementById('trustlayer')?.scrollIntoView();
                    }}
                    className="scroll-cta-container scale-anim d-flex flex-row align-self-end align-items-center d-none d-lg-flex"
                >
                    <div className="d-none d-md-block">{t('landing.scrollAction')}</div>
                    <div className="rounded-circle ms-md-4 arrow-icon-container">
                        <img src={downArrowIcon} alt="Scroll down arrow" width="11" height="11" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default WelcomeSection;
