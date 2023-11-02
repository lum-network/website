import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import numeral from 'numeral';

import { Link, ResponsiveImage, UseCaseCard } from 'components';
import { COSMOS_MILLIONS_URL } from 'constant';
import { Dispatch, RootState } from 'redux/store';
import { useMainLayoutTimeline } from 'utils/hooks';

import cmBrowser from 'assets/images/cm_browser.png';
import cmBigIllu from 'assets/images/cm_big2.png';
import cmIllu from 'assets/images/cm_big.png';

import './UseCases.scss';

const ComosMillionsUseCase = (): JSX.Element => {
    const { t } = useTranslation();

    const dispatch = useDispatch<Dispatch>();
    const { tvl, prizes, depositors, pools } = useSelector((state: RootState) => ({
        tvl: state.stats.cm.tvl,
        prizes: state.stats.cm.prizes,
        depositors: state.stats.cm.depositors,
        pools: state.stats.cm.pools,
    }));

    const mainLayoutTimeline = useMainLayoutTimeline();

    useEffect(() => {
        // GSAP Section Scroll Animations
        const browserSectionTrigger = {
            trigger: `#cosmos-millions-use-case .scroll-trigger`,
            start: 'bottom 55%',
            scrub: true,
        };

        const useCaseSectionTrigger = {
            trigger: `#cosmos-millions-use-case .use-case-illustration`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
            id: 'cosmos-millions',
        };

        mainLayoutTimeline
            .from('#cosmos-millions-use-case .browser', {
                y: 50,
                opacity: 0,
                ease: 'none',
                scrollTrigger: browserSectionTrigger,
            })
            .from('#cosmos-millions-use-case .browser-content', {
                y: 100,
                opacity: 0,
                ease: 'none',
                scrollTrigger: browserSectionTrigger,
            })
            .from(
                '#cosmos-millions-use-case .use-cases-container h1',
                {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: useCaseSectionTrigger,
                },
                '>',
            )
            .from(
                '#cosmos-millions-use-case .use-case-card',
                {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: useCaseSectionTrigger,
                },
                '<',
            )
            .from('#cosmos-millions-use-case .use-case-card .ellipse', {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    ...useCaseSectionTrigger,
                    endTrigger: '#cosmos-millions-use-case .use-cases-container',
                },
            });
    }, []);

    useEffect(() => {
        dispatch.stats.getCmStats().finally(() => null);
    }, []);

    return (
        <main id="cosmos-millions-use-case">
            <div className="container">
                <img src={cmIllu} alt="Cosmos Millions illustration" className="illustration" />
                <div className="section-content scroll-trigger">
                    <h1 className="section-content-title my-5">{t('useCases.cosmosMillions.card.title')}</h1>
                    <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
                        <div className="col">{t('useCases.cosmosMillions.page.description1')}</div>
                        <div className="col">{t('useCases.cosmosMillions.page.description2')}</div>
                    </div>
                    <h6 className="mb-3">{t('useCases.cosmosMillions.page.numbers.title')}</h6>
                    <div className="row row-cols-2 row-cols-lg-4 mx-1 numbers-container gy-4 gy-lg-0 px-2 pb-4 pt-lg-4 mt-4 mt-lg-0">
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{numeral(tvl).format('$0.00 a') || '-'}</div>
                                <p>{t('useCases.cosmosMillions.page.numbers.tvl')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{numeral(prizes).format('0') || '-'}</div>
                                <p>{t('useCases.cosmosMillions.page.numbers.prizes')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{numeral(depositors).format('(0 a)') || '-'}</div>
                                <p>{t('useCases.cosmosMillions.page.numbers.depositors')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{numeral(pools).format('(0 a)') || '-'}</div>
                                <p>{t('useCases.cosmosMillions.page.numbers.pools')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-5 my-auto browser-content">
                        <h2>{t('useCases.cosmosMillions.page.details.title')}</h2>
                        <p className="my-4">{t('useCases.cosmosMillions.page.details.description')}</p>
                        <Link
                            link={COSMOS_MILLIONS_URL}
                            className="discover-use-case-btn d-block scale-anim text-decoration-none rounded-pill"
                        >
                            {t('useCases.cosmosMillions.page.details.cta')}
                        </Link>
                    </div>
                    <div className="col-12 col-lg-7 order-first order-lg-last mb-5 mb-lg-0">
                        <img src={cmBrowser} className="illustration browser" alt="Cosmos Millions in browser" />
                    </div>
                </div>
            </div>
            <ResponsiveImage
                src={cmBigIllu}
                className="use-case-illustration section-margin-top scroll-trigger-2"
                alt=""
            />
            <div className="container use-cases-container section-margin-top">
                <h1 className="mb-4">{t('tools.landingSection.discoverBtn')}</h1>
                <UseCaseCard useCase="tools" />
            </div>
        </main>
    );
};

export default ComosMillionsUseCase;
