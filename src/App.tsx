import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { gsap, Linear, Power1 } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Assets from 'assets';
import { Hooks } from 'utils';
import { LUM_NETWORK_WHITEPAPER, MIN_LARGE_DEVICE_WIDTH } from 'constant';
import { Button, Footer, Header, Link, SpotlightImage } from 'components';

import './styles/App.scss';
import './styles/Welcome.scss';
import './styles/TrustLayer.scss';
import './styles/Partnering.scss';
import './styles/Rewards.scss';
import './styles/LumPowered.scss';
import './styles/Green.scss';
import './styles/SectionLineEffects.scss';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

const MV_PATH_COUNT = 6;

const buildSectionTimeline = (sectionId: string): gsap.core.Timeline => {
    const titleSplit = new SplitText(`#${sectionId} .section-content-title`, { type: 'words,chars' });
    gsap.to(`#${sectionId} .section-content-title`, {
        y: -200,
        ease: 'none',
        scrollTrigger: {
            trigger: `#${sectionId}`,
            start: 'top 30%',
            end: 'bottom top',
            scrub: true,
        },
    });
    gsap.to(`#${sectionId} .section-content-info`, {
        y: -150,
        ease: 'none',
        scrollTrigger: {
            trigger: `#${sectionId}`,
            start: 'top 30%',
            end: 'bottom top',
            scrub: true,
        },
    });
    gsap.from(`#${sectionId} .section-content-title`, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
            trigger: `#${sectionId}`,
            start: 'top bottom',
            end: 'top 40%',
            scrub: true,
        },
    });
    gsap.from(`#${sectionId} .section-content-info`, {
        y: 200,
        ease: 'none',
        scrollTrigger: {
            trigger: `#${sectionId}`,
            start: 'top bottom',
            end: 'top 40%',
            scrub: true,
        },
    });
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(`#${sectionId}`, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl.from(titleSplit.chars, {
        duration: 1.0,
        opacity: 0,
        textShadow: `0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 50px #ffffff, 0 0 60px #ffffff, 0 0 70px #ffffff`,
        ease: Power1.easeIn,
        stagger: 0.075,
    });
    tl.from(
        `#${sectionId} .section-content-info`,
        {
            duration: 1,
            opacity: 0,
            ease: Power1.easeIn,
            stagger: 0.2,
        },
        '=-1',
    );
    tl.add(() => {
        titleSplit.revert();
    }, 6);
    return tl;
};

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
    const { width } = Hooks.useWindowSize();
    const [enableDots, setEnableDots] = useState<boolean>(true);

    const bubbleRef = useRef<HTMLImageElement>(null);
    const glowContainerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const [dots, setDots] = useState<JSX.Element[]>([]);
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        const enable = width >= MIN_LARGE_DEVICE_WIDTH;
        if (enable !== enableDots) {
            setEnableDots(enable);
        }
    }, [enableDots, width]);

    useEffect(() => {
        if (scroll && !timeline.current) {
            timeline.current = buildSectionTimeline('welcome-content');
            timeline.current.to(
                `#welcome .glowing-bubble`,
                {
                    opacity: 1,
                    duration: 1.0,
                    ease: Power1.easeIn,
                },
                '2.25',
            );
            timeline.current.fromTo(
                `#welcome .scroll-cta-container`,
                {
                    opacity: 0,
                    translateY: 30,
                    ease: Linear.easeNone,
                },
                {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.4,
                    ease: Linear.easeNone,
                },
                '=-2.75',
            );
            timeline.current.fromTo(
                'header',
                {
                    opacity: 0,
                    translateY: -30,
                },
                {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.4,
                    ease: Linear.easeNone,
                },
                '=-2.75',
            );
            timeline.current.fromTo(
                'footer',
                {
                    opacity: 0,
                    translateY: 30,
                },
                {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.4,
                    ease: Linear.easeNone,
                },
                '=-2.75',
            );
            timeline.current.resume();
        }
    }, [scroll]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!enableDots) {
                setDots([]);
            } else if (dots.length > 10) {
                const newDots = dots.slice(Math.max(dots.length - 25, 1));
                setDots(newDots);
            }
        }, 500);
        return () => clearInterval(timer);
    }, [dots, setDots, enableDots]);

    const sendDot = useCallback(() => {
        const newDots = dots.slice();
        const dotId = dots.length > 0 ? parseInt((dots[dots.length - 1].key || '0').toString()) + 1 : 1;
        newDots.push(<MvDot key={`${dotId}`} uid={`${dotId}`} glowContainerRef={glowContainerRef} glowRef={glowRef} />);
        setDots(newDots);
    }, [dots, setDots]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (enableDots) {
                sendDot();
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [sendDot, enableDots]);

    return (
        <section data-scroll-section className="dark" id="welcome">
            <div className="container" />
            <div
                id="welcome-content"
                className="container"
                data-scroll
                data-scroll-id="welcome-content"
                data-scroll-call="section-content-call"
            >
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
                            <Button onClick={() => window.alert('TODO')}>
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
                    <div
                        className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end"
                        onClick={sendDot}
                    >
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
                    className="scroll-cta-container scale-anim d-flex flex-row align-self-end align-items-center d-none d-lg-flex"
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
    const { scroll } = useLocomotiveScroll();
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (scroll && !timeline.current) {
            timeline.current = buildSectionTimeline('trustlayer-content');
        }
        if (scroll && timeline.current) {
            scroll.on('scroll', (args: any) => {
                if (typeof args.currentElements['trustlayer-content'] === 'object' && timeline.current) {
                    const progress = args.currentElements['trustlayer-content'].progress;
                    timeline.current.seek(Math.max(0, progress - 0.05) * 10);
                }
            });
        }
    }, [scroll]);

    return (
        <section data-scroll-section className="dark" id="trustlayer">
            <div
                id="trustlayer-content"
                className="container"
                data-scroll
                data-scroll-id="trustlayer-content"
                data-scroll-call="section-content-call"
            >
                <div className="row d-flex flex-lg-row flex-column justify-content-between">
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <SpotlightImage
                            uid={'trustlayer'}
                            imgSrc={Assets.images.doubleMirror}
                            imgAlt="Business Trust Layer"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('business.title') }}
                        />
                        <div className="row">
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.contentStamping} alt="Content stamping" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.store.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.store.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.traceabilityIcon} alt="Traceability" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.tracability.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.tracability.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.transparencyIcon} alt="Transparency" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.transparency.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.transparency.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.businessIcon} alt="Business application" />
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
}

export function Partnering(): JSX.Element {
    const { t } = useTranslation();
    const { scroll } = useLocomotiveScroll();
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (scroll && !timeline.current) {
            timeline.current = buildSectionTimeline('partnering-content');
        }
        if (scroll && timeline.current) {
            scroll.on('scroll', (args: any) => {
                if (typeof args.currentElements['partnering-content'] === 'object' && timeline.current) {
                    const progress = args.currentElements['partnering-content'].progress;
                    timeline.current.seek(Math.max(0, progress - 0.1) * 10);
                }
            });
        }
    }, [scroll]);

    return (
        <section data-scroll-section className="dark" id="partnering">
            <div
                id="partnering-content"
                className="container"
                data-scroll
                data-scroll-id="partnering-content"
                data-scroll-call="section-content-call"
            >
                <div className="row d-flex flex-column-reverse flex-lg-row justify-content-between">
                    <div className="col-lg-6 col-xl-5">
                        <h1 className="section-content-title" dangerouslySetInnerHTML={{ __html: t('qAndA.title') }} />
                        <div className="row">
                            <div className="section-content-info col-12 d-flex uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.diamondIcon} className="section-icon" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.companies.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.companies.description') }} />
                                </div>
                            </div>
                            <div className="section-content-info col-12 d-flex uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.scaleIcon} className="section-icon" />
                                </div>
                                <div>
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.trust.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.trust.description') }} />
                                </div>
                            </div>
                            <div className="section-content-info col-12 d-flex uvp-container">
                                <div className="dark-icon-wrapper">
                                    <img src={Assets.images.communityIcon} className="section-icon" />
                                </div>
                                <div>
                                    <h2 dangerouslySetInnerHTML={{ __html: t('qAndA.community.title') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('qAndA.community.description') }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7 d-flex align-items-center justify-content-center justify-content-lg-end">
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
    const { t } = useTranslation();
    const { scroll } = useLocomotiveScroll();
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (scroll && !timeline.current) {
            timeline.current = buildSectionTimeline('rewards-content');
        }
        if (scroll && timeline.current) {
            scroll.on('scroll', (args: any) => {
                if (typeof args.currentElements['rewards-content'] === 'object' && timeline.current) {
                    const progress = args.currentElements['rewards-content'].progress;
                    timeline.current.seek(Math.max(0, progress - 0.125) * 10);
                }
            });
        }
    }, [scroll]);

    return (
        <section data-scroll-section className="dark" id="rewards">
            <div
                id="rewards-content"
                className="container"
                data-scroll
                data-scroll-id="rewards-content"
                data-scroll-call="section-content-call"
            >
                <div className="row flex-md-row flex-column justify-content-between align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <SpotlightImage
                            uid={'lumreward'}
                            imgSrc={Assets.images.diamondIllu}
                            imgAlt="Universal LUM reward"
                            beamSize={0.9}
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('rewards.title') }}
                        />
                        <p
                            className="section-content-info"
                            dangerouslySetInnerHTML={{ __html: t('rewards.description') }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function LumPowered(): JSX.Element {
    const { t } = useTranslation();
    const { scroll } = useLocomotiveScroll();
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (scroll && !timeline.current) {
            timeline.current = buildSectionTimeline('lum-content');
        }
        if (scroll && timeline.current) {
            scroll.on('scroll', (args: any) => {
                if (typeof args.currentElements['lum-content'] === 'object' && timeline.current) {
                    const progress = args.currentElements['lum-content'].progress;
                    timeline.current.seek(Math.max(0, progress - 0.05) * 10);
                }
            });
        }
    }, [scroll]);

    return (
        <section data-scroll-section className="dark" id="lum">
            <div
                id="lum-content"
                className="container"
                data-scroll
                data-scroll-id="lum-content"
                data-scroll-call="section-content-call"
            >
                <div className="row title-desc">
                    <div className="col-lg-4">
                        <h1
                            className="section-content-info"
                            dangerouslySetInnerHTML={{ __html: t('poweredBy.title') }}
                        />
                    </div>
                    <div className="col-lg-8">
                        <p
                            className="section-content-info"
                            dangerouslySetInnerHTML={{ __html: t('poweredBy.description') }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="section-content-info power-card">
                            <img src={Assets.images.paperIllu} alt="Become the future" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.security.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.security.description') }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="section-content-info power-card">
                            <img src={Assets.images.cubeIllu} alt="Secure the chain" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.stake.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.stake.description') }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="section-content-info power-card">
                            <img src={Assets.images.coinsIllu} alt="Stake and earn" />
                            <div className="text-center text-lg-start">
                                <h2 dangerouslySetInnerHTML={{ __html: t('poweredBy.future.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('poweredBy.future.description') }} />
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
        </section>
    );
}

export function Green(): JSX.Element {
    const { t } = useTranslation();
    const { scroll } = useLocomotiveScroll();
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (scroll && !timeline.current) {
            timeline.current = buildSectionTimeline('green-content');
        }
        if (scroll && timeline.current) {
            scroll.on('scroll', (args: any) => {
                if (typeof args.currentElements['green-content'] === 'object' && timeline.current) {
                    const progress = args.currentElements['green-content'].progress;
                    timeline.current.seek(Math.max(0, progress - 0.1) * 10);
                }
            });
        }
    }, [scroll]);

    return (
        <section data-scroll-section className="light" id="green">
            <div
                id="green-content"
                className="container"
                data-scroll
                data-scroll-id="green-content"
                data-scroll-call="section-content-call"
            >
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
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.pOfS.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.pOfS.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.carbon.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.carbon.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.costs.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.costs.description') }} />
                            </div>
                            <div className="section-content-info col-lg-6">
                                <div className="green-dot" />
                                <h2 dangerouslySetInnerHTML={{ __html: t('greenSection.blocks.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('greenSection.blocks.description') }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function SectionLineEffect1(): JSX.Element {
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (!timeline.current) {
            timeline.current = gsap
                .timeline({ paused: true })
                .fromTo(
                    '#section-line-effect-1 path',
                    {
                        opacity: 0.0,
                        drawSVG: '0% 0%',
                    },
                    {
                        opacity: 1.0,
                        drawSVG: '0% 10%',
                        duration: 0.15,
                        ease: 'linear',
                    },
                )
                .to('#section-line-effect-1 path', {
                    opacity: 1,
                    drawSVG: '10% 30%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-1 path', {
                    opacity: 1,
                    drawSVG: '30% 50%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-1 path', {
                    opacity: 1,
                    drawSVG: '50% 70%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-1 path', {
                    opacity: 1,
                    drawSVG: '70% 90%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-1 path', {
                    opacity: 0.0,
                    drawSVG: '100% 100%',
                    duration: 0.15,
                    ease: 'linear',
                });
            ScrollTrigger.create({
                trigger: '#section-line-effect-1',
                start: 'top 30%',
                end: '30% top',
                onToggle: (self) => {
                    if (self.isActive && timeline.current && window.innerWidth >= MIN_LARGE_DEVICE_WIDTH) {
                        if (self.direction === -1) {
                            timeline.current.reverse();
                        } else {
                            timeline.current.play();
                        }
                    }
                },
            });
        }
    }, [timeline]);

    return (
        <div id="section-line-effect-1">
            <div className="container">
                <svg width="100%" height="100%" viewBox="0 0 646 470" preserveAspectRatio="none" fill="none">
                    <path
                        d="M610.5 35.5C537 63 183 50.5 35.5 434.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <g opacity="0.3" filter="url(#filter0_f)">
                        <path
                            d="M610.5 35.5C537 63 183 50.5 35.5 434.5"
                            stroke="white"
                            strokeWidth="21"
                            strokeLinecap="round"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f"
                            x="0.998047"
                            y="0.997131"
                            width="644.006"
                            height="468.006"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export function SectionLineEffect2(): JSX.Element {
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (!timeline.current) {
            timeline.current = gsap
                .timeline({ paused: true })
                .fromTo(
                    '#section-line-effect-2 path',
                    {
                        opacity: 0.0,
                        drawSVG: '0% 0%',
                    },
                    {
                        opacity: 1.0,
                        drawSVG: '0% 10%',
                        duration: 0.15,
                        ease: 'linear',
                    },
                )
                .to('#section-line-effect-2 path', {
                    opacity: 1,
                    drawSVG: '10% 30%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-2 path', {
                    opacity: 1,
                    drawSVG: '30% 50%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-2 path', {
                    opacity: 1,
                    drawSVG: '50% 70%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-2 path', {
                    opacity: 1,
                    drawSVG: '70% 90%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-2 path', {
                    opacity: 0.0,
                    drawSVG: '100% 100%',
                    duration: 0.15,
                    ease: 'linear',
                });
            ScrollTrigger.create({
                trigger: '#section-line-effect-2',
                start: 'top 30%',
                end: '30% top',
                onToggle: (self) => {
                    if (self.isActive && timeline.current && window.innerWidth >= MIN_LARGE_DEVICE_WIDTH) {
                        if (self.direction === -1) {
                            timeline.current.reverse();
                        } else {
                            timeline.current.play();
                        }
                    }
                },
            });
        }
    }, [timeline]);

    return (
        <div id="section-line-effect-2">
            <div className="container">
                <svg width="100%" height="100%" viewBox="0 0 793 642" preserveAspectRatio="none" fill="none">
                    <path
                        d="M34.5 34.5C34.5 558.5 758.5 345 758.5 607.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <g opacity="0.3" filter="url(#filter0_f)">
                        <path
                            d="M34.5 34.5C34.5 558.5 758.5 345 758.5 607.5"
                            stroke="white"
                            strokeWidth="21"
                            strokeLinecap="round"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f"
                            x="0"
                            y="0"
                            width="793"
                            height="642"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export function SectionLineEffect3(): JSX.Element {
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        if (!timeline.current) {
            timeline.current = gsap
                .timeline({ paused: true })
                .fromTo(
                    '#section-line-effect-3 path',
                    {
                        opacity: 0.0,
                        drawSVG: '0% 0%',
                    },
                    {
                        opacity: 1.0,
                        drawSVG: '0% 10%',
                        duration: 0.15,
                        ease: 'linear',
                    },
                )
                .to('#section-line-effect-3 path', {
                    opacity: 1,
                    drawSVG: '10% 30%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-3 path', {
                    opacity: 1,
                    drawSVG: '30% 50%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-3 path', {
                    opacity: 1,
                    drawSVG: '50% 70%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-3 path', {
                    opacity: 1,
                    drawSVG: '70% 90%',
                    duration: 0.25,
                    ease: 'linear',
                })
                .to('#section-line-effect-3 path', {
                    opacity: 0.0,
                    drawSVG: '100% 100%',
                    duration: 0.15,
                    ease: 'linear',
                });
            ScrollTrigger.create({
                trigger: '#section-line-effect-3',
                start: 'top 30%',
                end: '30% top',
                onToggle: (self) => {
                    if (self.isActive && timeline.current && window.innerWidth >= MIN_LARGE_DEVICE_WIDTH) {
                        if (self.direction === -1) {
                            timeline.current.reverse();
                        } else {
                            timeline.current.play();
                        }
                    }
                },
            });
        }
    }, [timeline]);

    return (
        <div id="section-line-effect-3">
            <div className="container">
                <svg width="100%" height="100%" viewBox="0 0 645 469" fill="none" preserveAspectRatio="none">
                    <path
                        d="M610 35C456.5 372.5 156.5 207.5 35 434"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <g opacity="0.3" filter="url(#filter0_f)">
                        <path
                            d="M610 35C472.5 362.5 156.5 211 35 434"
                            stroke="white"
                            strokeWidth="21"
                            strokeLinecap="round"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f"
                            x="0.498047"
                            y="0.497314"
                            width="644.005"
                            height="468.005"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
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
                <SectionLineEffect1 />
                <SectionLineEffect2 />
                <SectionLineEffect3 />
                <Footer />
            </main>
        </LocomotiveScrollProvider>
    );
};

export default App;
