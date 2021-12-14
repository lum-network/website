import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import confetti from 'canvas-confetti';

import { gsap } from 'utils';

import styles from './MainnetSection.module.scss';
import { AssetsSrc, FIREBASE } from 'constant';

const colors = ['#C2E1FE', '#FFCB54', '#FEC6FC', '#FDAB9F'];

const calculateTimeLeft = (end: Date) => {
    const diff = +end - +new Date();

    if (diff > 0) {
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
            done: false,
        };
    }

    return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        done: true,
    };
};

const format = (number: number) => (number > 9 ? number.toString() : '0' + number.toString());

const Mainnet = ({ launchAt }: { launchAt: Date }): JSX.Element => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(launchAt));
    const [fb, setFb] = useState<FirebaseApp | null>(null);
    const [height, setHeight] = useState(0);
    const [nodes, setNodes] = useState(0);

    const { t } = useTranslation();
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Show Animations

        if (!timeline.current) {
            const tl = gsap.timeline();

            timeline.current = tl;
            tl.fromTo('#mainnet', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.75 });
        }

        // Start countdown
        const countdown = setInterval(() => setTimeLeft(calculateTimeLeft(launchAt)), 1000);

        // Cleanup
        return () => clearInterval(countdown);
    }, []);

    useEffect(() => {
        setFb(initializeApp(FIREBASE));
    }, []);

    useEffect(() => {
        if (!fb) {
            return;
        }

        const database = getDatabase(fb);
        const dbRef = ref(database, 'website');
        onValue(dbRef, (snapshop) => {
            if (!snapshop.exists()) {
                console.log('Firebase rtdb error');
                return;
            }

            const { height, nodes } = snapshop.val();

            setHeight(height);
            setNodes(nodes);
        });
    }, [fb]);

    useEffect(() => {
        if (!nodes) {
            return;
        }
    }, [nodes]);

    useEffect(() => {
        if (nodes !== 0 || height <= 0 || height > 30) {
            return;
        }

        const interval = setInterval(() => {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 60,
                origin: { x: -0.1 },
                colors: colors,
                ticks: 300,
                scalar: 2,
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 60,
                origin: { x: 1.1 },
                colors: colors,
                ticks: 300,
                scalar: 2,
            });
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
        }, 10000);
    }, [height]);

    const lessThan24HoursLeft = timeLeft.days === 0;

    const renderContent = () => {
        if (height && !nodes) {
            return (
                <>
                    <div className="col-12">
                        <div className={`${styles.label} ${styles.appear}`}>🚀 LAUNCH COMPLETED 🚀</div>
                        <h1 className={`${styles.number} ${styles.appear}`}>MAIN-NET</h1>
                    </div>
                </>
            );
        }

        return (
            <div
                className={`row justify-content-center align-items-center ${
                    styles[timeLeft.done && !nodes && !height ? 'done' : '']
                }`}
            >
                {!nodes && (
                    <div className="col-lg-4">
                        <div className={styles.label}>
                            {lessThan24HoursLeft ? t('mainnet.hours') : t('mainnet.days')}
                        </div>
                        <h1 className={styles.number}>
                            {format(lessThan24HoursLeft ? timeLeft.hours : timeLeft.days)}
                        </h1>
                    </div>
                )}
                <div className="col-lg-4">
                    {nodes ? (
                        <>
                            <div className={`${styles.label} ${styles.appear}`}>ALIVE NODES</div>
                            <h1 className={`${styles.number} ${styles.appear}`}>{nodes}</h1>
                        </>
                    ) : (
                        <>
                            <div className={styles.label}>
                                {lessThan24HoursLeft ? t('mainnet.minutes') : t('mainnet.hours')}
                            </div>
                            <h1 className={styles.number}>
                                {format(lessThan24HoursLeft ? timeLeft.minutes : timeLeft.hours)}
                            </h1>
                        </>
                    )}
                </div>
                {!nodes && (
                    <div className="col-lg-4">
                        <div className={styles.label}>
                            {lessThan24HoursLeft ? t('mainnet.seconds') : t('mainnet.minutes')}
                        </div>
                        <h1 className={styles.number}>
                            {format(lessThan24HoursLeft ? timeLeft.seconds : timeLeft.minutes)}
                        </h1>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section id="mainnet" className={styles.mainnet}>
            {(!nodes && !height && (
                <p className={styles['mainnet-title']}>
                    <strong>{t('mainnet.launchInTitle')}</strong>
                </p>
            )) || <div className="m-5" />}
            <div className="d-flex flex-row align-items-center justify-content-center">
                <div className={`container ${styles['mainnet-content']}`} id="">
                    {renderContent()}
                </div>
            </div>
            <div className="position-absolute bottom-0 d-flex justify-content-center w-100">
                <img src={AssetsSrc.images.mainnetIllu} className={styles.planetIllu} alt="Mainnet illu" />
            </div>
            <div className={`position-absolute d-flex justify-content-center w-100 ${styles.ringPosition}`}>
                <div className={styles.ringContainer}>
                    <div className={styles.ring} />
                </div>
            </div>
            <div className={`position-absolute d-flex justify-content-center w-100 ${styles['cta-container']}`}>
                <div
                    className={`rounded-circle ms-md-4 ${styles['arrow-icon-container']}`}
                    onClick={() => {
                        if (typeof document !== 'undefined') {
                            document.getElementById('welcome')?.scrollIntoView();
                        }
                    }}
                >
                    <img
                        src={AssetsSrc.images.downArrowIcon}
                        alt="Scroll down arrow"
                        className={styles['arrow-icon']}
                        width="11"
                        height="11"
                    />
                </div>
            </div>
        </section>
    );
};

export default Mainnet;
