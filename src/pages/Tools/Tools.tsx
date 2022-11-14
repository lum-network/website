import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { LUM_EXPLORER_GITHUB, LUM_WALLET_GITHUB, NavigationConstants } from 'constant';
import { Link } from 'components';

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

    return (
        <section id="tools">
            <div className="container">
                <img src={toolsIllu} alt="Tools illustration" className="illustration" />
                <div className="section-content">
                    <h1 className="section-content-title mt-5">{t('toolsPage.title')}</h1>
                    <div className="row row-cols-2">
                        <div className="col">{t('toolsPage.description1')}</div>
                        <div className="col">{t('toolsPage.description2')}</div>
                    </div>
                    <h6 className="mb-3">{t('toolsPage.numbers.title')}</h6>
                    <div className="row row-cols-4 numbers-container p-4">
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>{t('toolsPage.numbers.stars')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>{t('toolsPage.numbers.forks')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>{t('toolsPage.numbers.commits')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>{t('toolsPage.numbers.openSource')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-5 my-auto">
                        <h2>{t('toolsPage.wallet.title')}</h2>
                        <p>{t('toolsPage.wallet.description')}</p>
                        <Link
                            link={LUM_WALLET_GITHUB}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            <span className="ms-3 me-3">
                                <img src={github} alt="" />
                            </span>
                            {t('toolsPage.wallet.cta')}
                        </Link>
                    </div>
                    <div className="col-12 col-lg-7">
                        <img src={walletBrowser} className="illustration" alt="Lum Wallet in browser" />
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-7">
                        <img src={explorerBrowser} className="illustration" alt="Lum Wallet in browser" />
                    </div>
                    <div className="col-12 col-lg-5 my-auto">
                        <h2>{t('toolsPage.explorer.title')}</h2>
                        <p>{t('toolsPage.explorer.description')}</p>
                        <Link
                            link={LUM_EXPLORER_GITHUB}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            <span className="ms-3 me-3">
                                <img src={github} alt="" />
                            </span>
                            {t('toolsPage.explorer.cta')}
                        </Link>
                    </div>
                </div>
            </div>
            <img src={toolsIllu2} className="section-margin-top" alt="" />
            <div className="container use-cases-container">
                <h1 className="mb-4">{t('useCases.title')}</h1>
                <div className="d-flex flex-lg-row flex-column justify-content-between">
                    <div className="use-case-card">
                        <img src={skr} alt="skeepers-rewards" />
                        <div className="p-4">
                            <div className="fw-bold fs-3">{t('useCases.dfract.card.title')}</div>
                            <div className="d-flex flex-row justify-content-between mt-2">
                                <p>{t('useCases.skr.card.description')}</p>
                                <NavLink
                                    to={NavigationConstants.SKR}
                                    className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-4"
                                >
                                    {t('common.discover')}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="use-case-card">
                        <img src={dfract} alt="dfract" />
                        <div className="p-4">
                            <div className="fw-bold fs-3">{t('useCases.dfract.card.title')}</div>
                            <div className="d-flex flex-row justify-content-between mt-2">
                                <p>{t('useCases.dfract.card.description')}</p>
                                <NavLink
                                    to={NavigationConstants.DFRACT}
                                    className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-4"
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
