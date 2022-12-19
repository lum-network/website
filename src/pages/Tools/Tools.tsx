import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { LUM_EXPLORER_GITHUB, LUM_WALLET_GITHUB } from 'constant';
import { Link, ResponsiveImage, UseCaseCard } from 'components';
import { RootState } from 'redux/store';

import toolsIllu from 'assets/images/tools_big.png';
import toolsIllu2 from 'assets/images/tools_big2.png';
import walletBrowser from 'assets/images/wallet_browser.png';
import explorerBrowser from 'assets/images/explorer_browser.png';
import github from 'assets/images/github.png';

import './Tools.scss';
import { useMainLayoutTimeline } from 'utils/hooks';

const Tools = (): JSX.Element => {
    const { t } = useTranslation();
    const mainLayoutTimeline = useMainLayoutTimeline();

    const { forks, stars, openSourceRepos, commits } = useSelector((state: RootState) => ({
        forks: state.stats.tools.forks,
        stars: state.stats.tools.stars,
        openSourceRepos: state.stats.tools.openSourceRepos,
        commits: state.stats.tools.commits,
    }));

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            // GSAP Section Scroll Animations
            const walletSectionTrigger = {
                trigger: sectionRef.current.querySelector('.scroll-trigger'),
                start: 'bottom 55%',
                scrub: true,
            };

            const explorerSectionTrigger = {
                trigger: sectionRef.current.querySelector('.scroll-trigger-2'),
                start: 'top 60%',
                end: 'top 10%',
                scrub: true,
            };

            const useCasesSectionTrigger = {
                trigger: sectionRef.current.querySelector('.big-illustration'),
                start: 'top 60%',
                end: 'top 10%',
                scrub: true,
                id: 'use-cases',
            };

            mainLayoutTimeline
                .from('#tools .wallet-browser', {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: walletSectionTrigger,
                })
                .from('#tools .wallet-browser-content', {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: walletSectionTrigger,
                })
                .from('#tools .explorer-browser', {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: explorerSectionTrigger,
                })
                .from('#tools .explorer-browser-content', {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: explorerSectionTrigger,
                })
                .from('#tools .use-cases-container h1', {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: useCasesSectionTrigger,
                })
                .from(
                    '#tools .use-case-card',
                    {
                        y: 100,
                        opacity: 0,
                        ease: 'none',
                        scrollTrigger: useCasesSectionTrigger,
                    },
                    '<',
                )
                .from('#tools .use-case-card .ellipse', {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: {
                        ...useCasesSectionTrigger,
                        endTrigger: sectionRef.current.querySelector('.use-cases-container'),
                    },
                    immediateRender: false,
                });
        }
    }, [sectionRef]);

    return (
        <main id="tools" ref={sectionRef}>
            <div className="container">
                <ResponsiveImage src={toolsIllu} alt="Tools illustration" />
                <div className="section-content scroll-trigger">
                    <h1 className="section-content-title mt-5">{t('tools.page.title')}</h1>
                    <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
                        <div className="col">{t('tools.page.description1')}</div>
                        <div className="col">{t('tools.page.description2')}</div>
                    </div>
                    <h6 className="mb-3 section-content-title">{t('tools.page.numbers.title')}</h6>
                    <div className="row row-cols-2 row-cols-lg-4 mx-1 numbers-container gy-4 gy-lg-0 px-2 pb-4 pt-lg-4 mt-4 mt-lg-0">
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{stars || '-'}</div>
                                <p>{t('tools.page.numbers.stars')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{commits || '-'}</div>
                                <p>{t('tools.page.numbers.commits')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{forks || '-'}</div>
                                <p>{t('tools.page.numbers.forks')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{openSourceRepos || '-'}</div>
                                <p>{t('tools.page.numbers.openSource')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-5 my-auto wallet-browser-content">
                        <h2>{t('tools.page.wallet.title')}</h2>
                        <p>{t('tools.page.wallet.description')}</p>
                        <Link
                            link={LUM_WALLET_GITHUB}
                            className="github-btn d-block scale-anim text-decoration-none rounded-pill"
                        >
                            <span className="me-3">
                                <img src={github} alt="" />
                            </span>
                            {t('tools.page.wallet.cta')}
                        </Link>
                    </div>
                    <div className="col-12 col-lg-7 order-first order-lg-last mb-5 mb-lg-0">
                        <ResponsiveImage
                            src={walletBrowser}
                            className="illustration wallet-browser"
                            alt="Lum Wallet in browser"
                        />
                    </div>
                </div>
                <div className="row section-margin-top scroll-trigger-2">
                    <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                        <ResponsiveImage
                            src={explorerBrowser}
                            className="illustration explorer-browser"
                            alt="Lum Explorer in browser"
                        />
                    </div>
                    <div className="col-12 col-lg-5 my-auto explorer-browser-content">
                        <h2>{t('tools.page.explorer.title')}</h2>
                        <p>{t('tools.page.explorer.description')}</p>
                        <Link
                            link={LUM_EXPLORER_GITHUB}
                            className="github-btn d-block scale-anim text-decoration-none rounded-pill"
                        >
                            <span className="me-3">
                                <img src={github} alt="" />
                            </span>
                            {t('tools.page.explorer.cta')}
                        </Link>
                    </div>
                </div>
            </div>
            <img src={toolsIllu2} className="big-illustration section-margin-top" alt="" />
            <div className="container section-margin-top use-cases-container">
                <h1 className="mb-4">{t('useCases.title')}</h1>
                <div className="d-flex flex-lg-row flex-column justify-content-between">
                    <UseCaseCard useCase="skr" className="me-lg-5" />
                    <UseCaseCard useCase="dfract" className="mt-4 mt-lg-0" />
                </div>
            </div>
        </main>
    );
};

export default Tools;
