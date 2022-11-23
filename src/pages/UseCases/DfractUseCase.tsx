import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

import { Link } from 'components';
import { LUM_DFRACT, NavigationConstants } from 'constant';

import dfractBrowser from 'assets/images/dfract_browser.png';
import dfractBigIllu from 'assets/images/dfract_big2.png';
import dfractIllu from 'assets/images/dfract_big.png';
import skrIllu from 'assets/images/skr_big.png';

import './UseCases.scss';
import numeral from 'numeral';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, RootState } from 'redux/store';

const DfractUseCase = (): JSX.Element => {
    const { t } = useTranslation();

    const dispatch = useDispatch<Dispatch>();
    const { apy, supply, totalValueUsd, unitPriceUsd } = useSelector((state: RootState) => ({
        apy: state.stats.dfr.apy,
        supply: state.stats.dfr.supply,
        totalValueUsd: state.stats.dfr.totalValueUsd,
        unitPriceUsd: state.stats.dfr.unitPriceUsd,
    }));

    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Scroll Animations
        const browserSectionTrigger = {
            trigger: `#dfract-use-case .scroll-trigger`,
            start: 'bottom 60%',
            scrub: true,
            markers: true,
        };

        const useCaseSectionTrigger = {
            trigger: `#dfract-use-case .use-cases-container`,
            start: 'bottom+=700px 60%',
            end: 'bottom+=1000px 10%',
            scrub: true,
        };

        if (!timeline.current) {
            const tl = gsap.timeline();

            timeline.current = tl;

            tl.from('#dfract-use-case .browser', {
                y: 50,
                opacity: 0,
                ease: 'none',
                scrollTrigger: browserSectionTrigger,
            })
                .from('#dfract-use-case .browser-content', {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: browserSectionTrigger,
                })
                .from('#dfract-use-case .use-cases-container h1', {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: useCaseSectionTrigger,
                })
                .from('#dfract-use-case .use-case-card', {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: useCaseSectionTrigger,
                });
        }
    }, []);

    useEffect(() => {
        dispatch.stats.getDfrStats().finally(() => null);
    }, []);

    return (
        <section id="dfract-use-case">
            <div className="container">
                <img src={dfractIllu} alt="Skeepers Rewards illustration" className="illustration" />
                <div className="section-content">
                    <h1 className="section-content-title mt-5">{t('useCases.dfract.card.title')}</h1>
                    <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
                        <div className="col">{t('useCases.dfract.page.description1')}</div>
                        <div className="col">{t('useCases.dfract.page.description2')}</div>
                    </div>
                    <h6 className="mb-3">{t('useCases.dfract.page.numbers.title')}</h6>
                    <div className="row row-cols-2 row-cols-lg-4 mx-1 numbers-container gy-4 gy-lg-0 px-2 pb-4 pb-lg-4 pt-lg-4 mt-4 mt-lg-0">
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{numeral(unitPriceUsd).format('$0,0.00') || '-'}</div>
                                <p>{t('useCases.dfract.page.numbers.price')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{numeral(supply).format('0,0.00') || '-'}</div>
                                <p>{t('useCases.dfract.page.numbers.minted')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{numeral(totalValueUsd).format('0,0.00') || '-'}</div>
                                <p>{t('useCases.dfract.page.numbers.tvl')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{apy || '-'}</div>
                                <p>{t('useCases.dfract.page.numbers.apy')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top scroll-trigger">
                    <div className="col-12 col-lg-5 my-auto browser-content">
                        <h2>{t('useCases.dfract.page.details.title')}</h2>
                        <p>{t('useCases.dfract.page.details.description')}</p>
                        <Link
                            link={LUM_DFRACT}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            {t('useCases.dfract.page.details.cta')}
                        </Link>
                    </div>
                    <div className="col-12 col-lg-7 order-first order-lg-last mb-5 mb-lg-0">
                        <img src={dfractBrowser} className="illustration browser" alt="Skeepers Rewards in browser" />
                    </div>
                </div>
            </div>
            <img src={dfractBigIllu} className="section-margin-top scroll-trigger-2" alt="" />
            <div className="container use-cases-container">
                <h1 className="mb-4">{t('useCases.titleOther')}</h1>
                <div className="use-case-card w-100">
                    <img src={skrIllu} alt="skr" className="illustration" />
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
            </div>
        </section>
    );
};

export default DfractUseCase;