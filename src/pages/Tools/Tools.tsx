import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

import { LUM_EXPLORER_GITHUB, LUM_WALLET_GITHUB, NavigationConstants } from 'constant';
import { Link } from 'components';
import { RootState } from 'redux/store';

import toolsIllu from 'assets/images/tools_big.png';
import toolsIllu2 from 'assets/images/tools_big2.png';
import walletBrowser from 'assets/images/wallet_browser.png';
import explorerBrowser from 'assets/images/explorer_browser.png';
import github from 'assets/images/github.png';
import skr from 'assets/images/skr.png';
import dfract from 'assets/images/dfract.png';

import './Tools.scss';

const Tools = (): JSX.Element => {
    const { t } = useTranslation();

    const { forks, stars, openSourceRepos, commits } = useSelector((state: RootState) => ({
        forks:
            state.stats.tools.wallet.forks !== null && state.stats.tools.explorer.forks !== null
                ? state.stats.tools.wallet.forks + state.stats.tools.explorer.forks
                : null,
        stars:
            state.stats.tools.wallet.stars !== null && state.stats.tools.explorer.stars !== null
                ? state.stats.tools.wallet.stars + state.stats.tools.explorer.stars
                : null,
        openSourceRepos: state.stats.tools.openSourceRepos,
        commits: state.stats.tools.commits,
    }));

    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Scroll Animations
        const walletSectionTrigger = {
            trigger: `#tools .scroll-trigger`,
            start: 'bottom 60%',
            scrub: true,
        };

        const explorerSectionTrigger = {
            trigger: `#tools .scroll-trigger-2`,
            start: 'bottom 60%',
            end: 'bottom 10%',
            scrub: true,
        };

        const useCasesSectionTrigger = {
            trigger: `#tools .use-cases-container`,
            start: 'bottom+=700px 60%',
            end: 'bottom+=1000px 10%',
            scrub: true,
        };

        if (!timeline.current) {
            const tl = gsap.timeline();

            timeline.current = tl;

            tl.from('#tools .wallet-browser', {
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
                .from('#tools .use-case-card', {
                    y: 100,
                    opacity: 0,
                    ease: 'none',
                    scrollTrigger: useCasesSectionTrigger,
                });

            tl.scrollTrigger?.refresh();
        } else {
            timeline.current.scrollTrigger?.refresh();
        }
    }, []);

    return (
        <section id="tools">
            <div className="container">
                <img src={toolsIllu} alt="Tools illustration" className="illustration" />
                <div className="section-content">
                    <h1 className="section-content-title mt-5">{t('tools.page.title')}</h1>
                    <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
                        <div className="col">{t('tools.page.description1')}</div>
                        <div className="col">{t('tools.page.description2')}</div>
                    </div>
                    <h6 className="mb-3 section-content-title">{t('tools.page.numbers.title')}</h6>
                    <div className="row row-cols-2 row-cols-lg-4 mx-1 numbers-container gy-4 gy-lg-0 px-2 pb-4 pb-lg-4 pt-lg-4 mt-4 mt-lg-0">
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{stars}</div>
                                <p>{t('tools.page.numbers.stars')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{commits}</div>
                                <p>{t('tools.page.numbers.commits')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{forks}</div>
                                <p>{t('tools.page.numbers.forks')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{openSourceRepos}</div>
                                <p>{t('tools.page.numbers.openSource')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top scroll-trigger">
                    <div className="col-12 col-lg-5 my-auto wallet-browser-content">
                        <h2>{t('tools.page.wallet.title')}</h2>
                        <p>{t('tools.page.wallet.description')}</p>
                        <Link
                            link={LUM_WALLET_GITHUB}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            <span className="ms-3 me-3">
                                <img src={github} alt="" />
                            </span>
                            {t('tools.page.wallet.cta')}
                        </Link>
                    </div>
                    <div className="col-12 col-lg-7 order-first order-lg-last mb-5 mb-lg-0">
                        <img src={walletBrowser} className="illustration wallet-browser" alt="Lum Wallet in browser" />
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                        <img
                            src={explorerBrowser}
                            className="illustration explorer-browser"
                            alt="Lum Wallet in browser"
                        />
                    </div>
                    <div className="col-12 col-lg-5 my-auto explorer-browser-content">
                        <h2>{t('tools.page.explorer.title')}</h2>
                        <p>{t('tools.page.explorer.description')}</p>
                        <Link
                            link={LUM_EXPLORER_GITHUB}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            <span className="ms-3 me-3">
                                <img src={github} alt="" />
                            </span>
                            {t('tools.page.explorer.cta')}
                        </Link>
                    </div>
                </div>
            </div>
            <img src={toolsIllu2} className="section-margin-top scroll-trigger-2" alt="" />
            <div className="container use-cases-container">
                <h1 className="mb-4">{t('useCases.title')}</h1>
                <div className="d-flex flex-lg-row flex-column justify-content-between">
                    <div className="use-case-card me-lg-5 w-100">
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
                            <div className="d-flex flex-column flex-lg-row justify-content-between mt-2">
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

export default Tools;
