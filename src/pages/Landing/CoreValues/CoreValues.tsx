import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import cube from 'assets/images/cube.png';
import community from 'assets/images/community.svg';
import tech from 'assets/images/tech.svg';
import leaf from 'assets/images/leaf.svg';
import experience from 'assets/images/experience.svg';
import ellipse1 from 'assets/images/ellipse.svg';

import './CoreValues.scss';

const CoreValues = (): JSX.Element => {
    const { t } = useTranslation();
    const valuesWordings = t('coreValues.cards', { returnObjects: true });
    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Scroll Animations
        const scrollTrigger = {
            trigger: `#core-values`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };

        if (!timeline.current) {
            const tl = gsap.timeline({
                scrollTrigger,
            });

            timeline.current = tl;

            tl.from('#core-values .cube', {
                opacity: 0,
                y: 50,
                ease: 'none',
            })
                .from(
                    '#core-values .section-content-title',
                    {
                        y: 100,
                        opacity: 0,
                        ease: 'none',
                    },
                    '<',
                )
                .from(
                    '#core-values .core-value-card',
                    {
                        y: 150,
                        opacity: 0,
                        ease: 'none',
                    },
                    '<',
                )
                .from(
                    '#core-values .core-value-card .ellipse',
                    {
                        y: 50,
                        opacity: 0,
                        ease: 'none',
                    },
                    '>',
                );
        }
    }, []);

    return (
        <section id="core-values">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <img alt="cube" className="cube" src={cube} />
                    </div>
                    <div className="col-12 col-lg-7">
                        <h1 className="section-content-title mb-4">{t('coreValues.title')}</h1>
                        <div className="row row-cols-1 row-cols-lg-2 gy-4">
                            <div className="col">
                                <div className="core-value-card">
                                    <img src={ellipse1} className="ellipse ellipse-1" />
                                    <div className="content px-4 py-3">
                                        <div className="icon-container">
                                            <img src={community} alt="" />
                                        </div>
                                        <div className="title mt-3 mb-1">{valuesWordings[0].title}</div>
                                        <p className="description mb-0">{valuesWordings[0].description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="core-value-card">
                                    <img src={ellipse1} className="ellipse ellipse-1" />
                                    <div className="content px-4 py-3">
                                        <div className="icon-container">
                                            <img src={tech} alt="" />
                                        </div>
                                        <div className="title mt-3 mb-1">{valuesWordings[1].title}</div>
                                        <p className="description mb-0">{valuesWordings[1].description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="core-value-card">
                                    <img src={ellipse1} className="ellipse ellipse-1" />
                                    <div className="content px-4 py-3">
                                        <div className="icon-container">
                                            <img src={leaf} alt="" />
                                        </div>
                                        <div className="title mt-3 mb-1">{valuesWordings[2].title}</div>
                                        <p className="description mb-0">{valuesWordings[2].description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="core-value-card">
                                    <img src={ellipse1} className="ellipse ellipse-1" />
                                    <div className="content px-4 py-3">
                                        <div className="icon-container">
                                            <img src={experience} alt="" />
                                        </div>
                                        <div className="title mt-3 mb-1">{valuesWordings[3].title}</div>
                                        <p className="description mb-0">{valuesWordings[3].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
