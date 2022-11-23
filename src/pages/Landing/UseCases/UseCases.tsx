import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import { NavigationConstants } from 'constant';

import skr from 'assets/images/skr.png';
import dfract from 'assets/images/dfract.png';

import './UseCases.scss';

const UseCases = (): JSX.Element => {
    const { t } = useTranslation();

    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Scroll Animations
        const scrollTrigger = {
            trigger: `#use-cases`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };

        if (!timeline.current) {
            const tl = gsap.timeline({
                scrollTrigger,
            });

            timeline.current = tl;

            tl.from('#use-cases .section-content-title', {
                y: 50,
                opacity: 0,
                ease: 'none',
            }).from('#use-cases .use-case-card', {
                y: 100,
                opacity: 0,
                ease: 'none',
            });
        }
    }, []);

    return (
        <section id="use-cases">
            <div className="container">
                <h1 className="mb-4 section-content-title">{t('useCases.title')}</h1>
                <div className="d-flex flex-lg-row flex-column justify-content-between">
                    <div className="use-case-card w-100 me-lg-5">
                        <img src={skr} alt="skeepers-rewards" className="w-100" />
                        <div className="p-4">
                            <div className="fw-bold fs-3">{t('useCases.skr.card.title')}</div>
                            <div className="d-flex flex-column flex-lg-row justify-content-between mt-2">
                                <p>{t('useCases.skr.card.description')}</p>
                                <NavLink
                                    to={NavigationConstants.SKR}
                                    className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-0 ms-lg-4"
                                >
                                    {t('common.discover')}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="use-case-card w-100 mt-4 mt-lg-0">
                        <img src={dfract} alt="dfract" className="w-100" />
                        <div className="p-4">
                            <div className="fw-bold fs-3">{t('useCases.dfract.card.title')}</div>
                            <div className="d-flex  flex-column flex-lg-row justify-content-between mt-2">
                                <p>{t('useCases.dfract.card.description')}</p>
                                <NavLink
                                    to={NavigationConstants.DFRACT}
                                    className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-0 ms-lg-4"
                                >
                                    {t('common.discover')}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
