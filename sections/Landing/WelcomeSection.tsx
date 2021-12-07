import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { gsap, Linear, Power1 } from 'gsap';

import { Button, Link } from 'components';
import { AssetsSrc, MIN_LARGE_DEVICE_WIDTH, LUM_NETWORK_WHITEPAPER, MAX_PHONE_DEVICE_WIDTH } from 'constant';
import { Hooks } from 'utils';

import styles from './WelcomeSection.module.scss';
import globalStyles from '../sections.module.scss';

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
        <div id="crystals-container" className={styles['crystal-illu-container']}>
            <img className={styles['crystals-shadows']} src={AssetsSrc.images.crystalsShadows} alt="Crystals shadows" />
            <div className={styles['crystal-wrapper']}>
                <img
                    className={styles['crystal-small']}
                    src={AssetsSrc.images.crystalWhiteSmall}
                    alt="Small White Crystal"
                />
            </div>
            <div className={`${styles['crystal-wrapper']} crystal-medium-wrapper`}>
                <img
                    className={styles['crystal-medium']}
                    src={AssetsSrc.images.crystalWhiteMedium}
                    alt="Medium White Crystal"
                />
            </div>
            <div className={`${styles['crystal-wrapper']} crystal-large-wrapper`}>
                <img
                    className={styles['crystal-large']}
                    src={AssetsSrc.images.crystalWhiteLarge}
                    alt="Large White Crystal"
                />
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

    const timeline = useRef<gsap.core.Timeline>();
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
        // GSAP Section Scroll Animations
        const q = gsap.utils.selector('#welcome');
        const scrollTrigger = {
            trigger: '#welcome',
            start: '5% top',
            end: '50% top',
            scrub: true,
        };
        gsap.to(q('.section-content-title'), {
            translateY: -100,
            ease: 'none',
            scrollTrigger,
        });
        gsap.to(q('.section-content-info'), {
            translateY: -75,
            ease: 'none',
            scrollTrigger,
            stagger: 0.25,
        });
        gsap.to(q(`.crystal-wrapper`), {
            translateY: -125,
            ease: 'none',
            scrollTrigger,
        });
        gsap.to(q(`.crystal-medium-wrapper`), {
            translateY: -100,
            ease: 'none',
            scrollTrigger,
        });
        gsap.to(q(`.crystal-large-wrapper`), {
            translateY: -75,
            ease: 'none',
            scrollTrigger,
        });
        gsap.to(q(`${styles['crystals-shadows']}`), {
            translateY: -75,
            ease: 'none',
            scrollTrigger,
        });
    }, []);

    useEffect(() => {
        // GSAP Section Show Animations

        if (!timeline.current) {
            const tl = gsap.timeline();
            const q = gsap.utils.selector('#welcome');

            timeline.current = tl;

            tl.fromTo('#welcome', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.75 });

            if (width < MAX_PHONE_DEVICE_WIDTH) {
                tl.fromTo(
                    q(`.section-content-title`),
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                        duration: 0.85,
                        opacity: 1,
                        y: 0,
                    },
                    '=-1',
                );
            } else {
                const titleSplit = new SplitText(q(`.section-content-title`), { type: 'words,chars' });

                tl.fromTo(
                    titleSplit.chars,
                    {
                        opacity: 0,
                        color: '#FFFFFF',
                        textShadow: `0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 50px #ffffff, 0 0 60px #ffffff, 0 0 70px #ffffff`,
                        ease: Power1.easeIn,
                    },
                    {
                        duration: 0.85,
                        opacity: 1,
                        color: '#515151',
                        textShadow: `0 0 10px rgba(255,255,255,0), 0 0 20px rgba(255,255,255,0), 0 0 30px rgba(255,255,255,0), 0 0 40px rgba(255,255,255,0), 0 0 50px rgba(255,255,255,0), 0 0 60px rgba(255,255,255,0), 0 0 70px rgba(255,255,255,0)`,
                        ease: Power1.easeIn,
                        stagger: 0.075,
                    },
                    '=-1',
                );
            }
            tl.fromTo(
                q('.section-content-info'),
                {
                    opacity: 0,
                    y: 10,
                },
                {
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                    stagger: 0.25,
                },
                '=-0.3',
            );
            tl.fromTo(
                q(`#crystals-container > *`),
                {
                    opacity: 0,
                    y: 10,
                },
                {
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                },
                '=-0.5',
            );
            tl.fromTo(
                q('#background'),
                {
                    opacity: 0,
                    y: 10,
                },
                {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                },
                '=-1',
            );
            tl.fromTo(
                q(`#scroll-cta`),
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    duration: 0.25,
                    opacity: 1,
                    y: 0,
                },
            );
        }
    }, [width]);

    return (
        <section id="welcome" className={styles.welcome}>
            {dots}
            <div id="background" className={styles['bg-lightning']} />
            <div className="container" />
            <div className={`container ${styles['welcome-content']}`}>
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
                            <Link className="ms-5 d-flex flex-row align-items-baseline" link={LUM_NETWORK_WHITEPAPER}>
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
                        if (typeof document !== 'undefined') {
                            document.getElementById('trustlayer')?.scrollIntoView();
                        }
                    }}
                    id="scroll-cta"
                    className={`${styles['scroll-cta-container']} ${globalStyles['scale-anim']} d-flex flex-row align-self-end align-items-center d-none d-lg-flex`}
                >
                    <div className="d-none d-md-block">{t('landing.scrollAction')}</div>
                    <div className={`rounded-circle ms-md-4 ${styles['arrow-icon-container']}`}>
                        <img
                            src={AssetsSrc.images.downArrowIcon}
                            alt="Scroll down arrow"
                            className={styles['arrow-icon']}
                            width="11"
                            height="11"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default WelcomeSection;
