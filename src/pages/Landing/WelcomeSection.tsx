import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap, Linear, Power1 } from 'gsap';

import { Button } from 'components';
import { MIN_LARGE_DEVICE_WIDTH, MAX_PHONE_DEVICE_WIDTH, COINGECKO_API_URL } from 'constant';
import { Hooks, NumbersUtils } from 'utils';
import numeral from 'numeral';
import Chart from 'kaktana-react-lightweight-charts';
import { UTCTimestamp } from 'lightweight-charts';

import downArrowIcon from 'assets/images/down-arrow.svg';
import planet from 'assets/images/planet.png';

import './WelcomeSection.scss';
import { useWindowSize } from 'utils/hooks';

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

    const [chartData, setChartData] = useState<any>([]);
    const [currentPrice, setCurrentPrice] = useState<any | null>(null);
    const [previousDayPercentage, setPreviousDayPercentage] = useState(0);

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
        gsap.to(`#welcome .planet-illustration`, {
            translateY: -125,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    useEffect(() => {
        // GSAP Section Show Animations
        if (!timeline.current) {
            const tl = gsap.timeline();
            timeline.current = tl;
            tl.fromTo(`#welcome`, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.75 });
            if (width < MAX_PHONE_DEVICE_WIDTH) {
                tl.fromTo(
                    `#welcome .section-content-title`,
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
                const titleSplit = new SplitText(`#welcome .section-content-title`, { type: 'words,chars' });
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
                        color: '#000',
                        textShadow: `0 0 10px rgba(255,255,255,0), 0 0 20px rgba(255,255,255,0), 0 0 30px rgba(255,255,255,0), 0 0 40px rgba(255,255,255,0), 0 0 50px rgba(255,255,255,0), 0 0 60px rgba(255,255,255,0), 0 0 70px rgba(255,255,255,0)`,
                        ease: Power1.easeIn,
                        stagger: 0.075,
                    },
                    '=-1',
                );
            }
            tl.fromTo(
                `#welcome .section-content-info`,
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
            /* tl.fromTo(
                `#welcome .planet-illustration`,
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
            ); */
            tl.fromTo(
                `#welcome .bg-lightning`,
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
                `#welcome .scroll-cta-container`,
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

    useEffect(() => {
        fetch(`${COINGECKO_API_URL}/coins/lum-network/market_chart?vs_currency=usd&days=14`).then(async (res) => {
            if (res.status === 200) {
                const body = await res.json();

                const chart = body.prices.map(([time, value]: [number, number]) => ({
                    time: time as UTCTimestamp,
                    value,
                }));

                setChartData(chart);
            }
        });
        fetch(`${COINGECKO_API_URL}/coins/lum-network`).then(async (res) => {
            if (res.status === 200) {
                const body = await res.json();

                if (!body || !body.market_data.current_price.usd) {
                    return;
                }

                setCurrentPrice(body.market_data.current_price.usd);
            }
        });
    }, []);

    useEffect(() => {
        if (!currentPrice || !chartData || !chartData.length) {
            return;
        }

        if (chartData && chartData.length && chartData.length - 24 >= 0 && chartData[chartData.length - 24]) {
            setPreviousDayPercentage(
                NumbersUtils.getDifferencePercentage(chartData[chartData.length - 24].value, currentPrice),
            );
        }
    }, [currentPrice, chartData]);

    const size = useWindowSize();

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
                            <div className="price-card">
                                <div className="price-card blur" />
                                <div className="price-card-content">
                                    <div className="align-self-start">
                                        <Chart
                                            height={90}
                                            width={size.width > 400 ? 150 : 100}
                                            options={{
                                                priceScale: {
                                                    position: 'none',
                                                    autoScale: true,
                                                },
                                                layout: {
                                                    textColor: '#00000000',
                                                    backgroundColor: '#00000000',
                                                },
                                                timeScale: {
                                                    visible: false,
                                                },
                                                grid: {
                                                    vertLines: {
                                                        visible: false,
                                                    },
                                                    horzLines: {
                                                        visible: false,
                                                    },
                                                },
                                                crosshair: {
                                                    vertLine: {
                                                        visible: false,
                                                        labelVisible: false,
                                                    },
                                                    horzLine: {
                                                        visible: false,
                                                        labelVisible: false,
                                                    },
                                                },
                                                handleScale: false,
                                                handleScroll: false,
                                            }}
                                            areaSeries={[
                                                {
                                                    data: chartData,
                                                    options: {
                                                        topColor: 'rgba(118, 219, 122, 100)',
                                                        bottomColor: 'rgba(118, 219, 122, 0)',
                                                        lineColor: 'rgba(118, 219, 122, 100)',
                                                        lineStyle: 0,
                                                        lineWidth: 3,
                                                        crosshairMarkerVisible: false,
                                                        priceLineVisible: false,
                                                    },
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="price-text">
                                        <span className="small-text d-flex flex-row align-items-center">
                                            <span
                                                className={`${previousDayPercentage >= 0 ? 'arrow-up' : 'arrow-down'}`}
                                            />
                                            {numeral(previousDayPercentage).format('+0.00%')} ({t('common.day')})
                                        </span>
                                        <span className="big-text">{numeral(currentPrice).format('$0,0.0000')}</span>
                                    </div>
                                    <div>
                                        <Button
                                            className="get-lum-button"
                                            data-bs-toggle="modal"
                                            data-bs-target={'#get-informed-modal'}
                                        >
                                            <strong>{t('common.buyLum')}</strong>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                        <img src={planet} className="planet-illustration" alt="planet" />
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
