import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { gsap } from 'utils';

import styles from './MainnetSection.module.scss';

const calculateTimeLeft = (end: Date) => {
    const diff = +end - +new Date();

    if (diff > 0) {
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    }

    return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
};

const Mainnet = ({ launchAt }: { launchAt: Date }): JSX.Element => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(launchAt));

    const { t } = useTranslation();
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Show Animations

        if (!timeline.current) {
            const tl = gsap.timeline();
            const q = gsap.utils.selector('#mainnet');

            timeline.current = tl;
            tl.fromTo('#mainnet', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.75 });
        }

        // Start countdown
        const countdown = setInterval(() => setTimeLeft(calculateTimeLeft(launchAt)), 1000);

        // Cleanup
        return () => clearInterval(countdown);
    }, []);

    const lessThan24HoursLeft = timeLeft.days === 0;

    return (
        <section id="mainnet" className={styles.mainnet}>
            <p className={styles['mainnet-title']}>
                <strong>{t('mainnet.launchInTitle')}</strong>
            </p>
            <div className="d-flex flex-row align-items-center justify-content-center">
                <div className={`container ${styles['mainnet-content']}`} id="">
                    <div className="row">
                        <div className="col-12"></div>
                        <div className="col-4">
                            <div className={styles.label}>
                                {lessThan24HoursLeft ? t('mainnet.hours') : t('mainnet.days')}
                            </div>
                            <h1 className={styles.number}>{lessThan24HoursLeft ? timeLeft.hours : timeLeft.days}</h1>
                        </div>
                        <div className="col-4">
                            <div className={styles.label}>
                                {lessThan24HoursLeft ? t('mainnet.minutes') : t('mainnet.hours')}
                            </div>
                            <h1 className={styles.number}>{lessThan24HoursLeft ? timeLeft.minutes : timeLeft.hours}</h1>
                        </div>
                        <div className="col-4">
                            <div className={styles.label}>
                                {lessThan24HoursLeft ? t('mainnet.seconds') : t('mainnet.minutes')}
                            </div>
                            <h1 className={styles.number}>
                                {lessThan24HoursLeft ? timeLeft.seconds : timeLeft.minutes}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mainnet;