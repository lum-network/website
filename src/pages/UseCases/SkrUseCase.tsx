import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

import { Link, UseCaseCard } from 'components';
import { SKR_URL } from 'constant';
import { RootState } from 'redux/store';

import skrIllu from 'assets/images/skr_big.png';
import skrBigIllu from 'assets/images/skr_big2.png';
import skrBrowser from 'assets/images/skr_browser.png';

import './UseCases.scss';
import numeral from 'numeral';

const SkrUseCase = (): JSX.Element => {
    const { t } = useTranslation();
    const { countries, brands, reviews } = useSelector((state: RootState) => ({
        countries: state.stats.skr.countries,
        brands: state.stats.skr.brands,
        reviews: state.stats.skr.reviews,
    }));

    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Scroll Animations
        const browserSectionTrigger = {
            trigger: `#skr-use-case .scroll-trigger`,
            start: 'bottom 55%',
            scrub: true,
        };

        const useCaseSectionTrigger = {
            trigger: `#skr-use-case .use-cases-container`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
            id: 'skr',
        };

        if (!timeline.current) {
            const tl = gsap.timeline();

            timeline.current = tl;

            tl.from('#skr-use-case .browser', {
                y: 50,
                opacity: 0,
                ease: 'none',
                scrollTrigger: browserSectionTrigger,
            })
                .from('#skr-use-case .browser-content', {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: browserSectionTrigger,
                })
                .from(
                    '#skr-use-case .use-cases-container h1',
                    {
                        y: 50,
                        opacity: 0,
                        ease: 'none',
                        scrollTrigger: useCaseSectionTrigger,
                    },
                    '>',
                )
                .from(
                    '#skr-use-case .use-case-card',
                    {
                        y: 100,
                        opacity: 0,
                        ease: 'none',
                        scrollTrigger: useCaseSectionTrigger,
                    },
                    '>',
                );
        }
    }, []);
    return (
        <section id="skr-use-case">
            <div className="container">
                <img src={skrIllu} alt="Skeepers Rewards illustration" className="illustration" />
                <div className="section-content scroll-trigger">
                    <h1 className="section-content-title mt-5">{t('useCases.skr.card.title')}</h1>
                    <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
                        <div className="col">{t('useCases.skr.page.description1')}</div>
                        <div className="col">{t('useCases.skr.page.description2')}</div>
                    </div>
                    <h6 className="mb-4">{t('useCases.skr.page.numbers.title')}</h6>
                    <div className="row row-cols-2 row-cols-lg-3 mx-1 numbers-container gy-4 gy-lg-0 px-2 pb-4 pb-lg-4 pt-lg-4 mt-4 mt-lg-0">
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{countries || '-'}</div>
                                <p>{t('useCases.skr.page.numbers.countries')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">
                                    {numeral(reviews).format('0a').toUpperCase() + '+' || '-'}
                                </div>
                                <p>{t('useCases.skr.page.numbers.reviews')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">
                                    {numeral(brands).format('0a').toUpperCase() + '+' || '-'}
                                </div>
                                <p>{t('useCases.skr.page.numbers.brands')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-5 my-auto browser-content">
                        <h2>{t('useCases.skr.page.details.title')}</h2>
                        <p>{t('useCases.skr.page.details.description')}</p>
                        <Link
                            link={SKR_URL}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            {t('useCases.skr.page.details.cta')}
                        </Link>
                    </div>
                    <div className="col-12 col-lg-7 order-first order-lg-last mb-5 mb-lg-0">
                        <img src={skrBrowser} className="illustration browser" alt="Skeepers Rewards in browser" />
                    </div>
                </div>
            </div>
            <img src={skrBigIllu} className="use-case-illustration section-margin-top scroll-trigger-2" alt="" />
            <div className="container use-cases-container section-margin-top">
                <h1 className="mb-4">{t('useCases.titleOther')}</h1>
                <UseCaseCard big useCase="dfract" />
            </div>
        </section>
    );
};

export default SkrUseCase;
