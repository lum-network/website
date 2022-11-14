import React from 'react';
import { useTranslation } from 'react-i18next';

import { LUM_EXPLORER_GITHUB, LUM_WALLET_GITHUB } from 'constant';
import { Link } from 'components';

import toolsIllu from 'assets/images/tools_big.png';
import walletBrowser from 'assets/images/wallet_browser.png';
import explorerBrowser from 'assets/images/explorer_browser.png';
import github from 'assets/images/github.png';

import './Tools.scss';

const Tools = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <section id="tools">
            <div className="container">
                <img src={toolsIllu} alt="Tools illustration" className="illustration" />
                <div className="section-content">
                    <h1 className="section-content-title mt-5">Tools</h1>
                    <div className="row row-cols-2">
                        <div className="col">{t('toolsPage.description1')}</div>
                        <div className="col">{t('toolsPage.description2')}</div>
                    </div>
                    <h6 className="mb-3">Tools in numbers</h6>
                    <div className="row row-cols-4 numbers-container p-4">
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>Github Stars</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>Github Commits</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>Forks</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3">
                                <div className="stat-number">7M+</div>
                                <p>Open source repos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-5 my-auto">
                        <h2>
                            Native
                            <br />
                            Lum Wallet
                        </h2>
                        <p>
                            The wallet is tailored-suit for the Interchain and has proved his liability with multiple
                            projects that forked it
                        </p>
                        <Link
                            link={LUM_WALLET_GITHUB}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            <span className="ms-3 me-3">
                                <img src={github} alt="" />
                            </span>
                            /wallet
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
                        <h2>
                            A specific explorer to view
                            <br />
                            the specific messages
                        </h2>
                        <p>
                            Specific messages have been developped for the review&rewards use case. You can see them on
                            our dedicated explorer
                        </p>
                        <Link
                            link={LUM_EXPLORER_GITHUB}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            <span className="ms-3 me-3">
                                <img src={github} alt="" />
                            </span>
                            /explorer
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
