import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import './UseCases.scss';
import { UseCaseCard } from 'components';

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
            })
                .from(
                    '#use-cases .use-case-card',
                    {
                        y: 100,
                        opacity: 0,
                        ease: 'none',
                    },
                    '<',
                )
                .from(
                    '#use-cases .use-case-card .ellipse',
                    {
                        y: 100,
                        opacity: 0,
                        ease: 'none',
                    },
                    '>',
                );
        }
    }, []);

    return (
        <section id="use-cases">
            <div className="container">
                <h1 className="mb-4 section-content-title">{t('useCases.title')}</h1>
                <div className="d-flex flex-lg-row flex-column justify-content-between">
                    <UseCaseCard useCase="dfract" className="me-lg-5" />
                    <UseCaseCard useCase="skr" className="mt-4 mt-lg-0" />
                </div>
            </div>
        </section>
    );
};

export default UseCases;
