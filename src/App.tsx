import React, { useState } from 'react';
import { Trans } from 'react-i18next';

import Assets from 'assets';
import { RightImageLayout, LeftImageLayout, Footer, Header, LeftLayout } from 'components';
import Loading from 'Loading';
import Landing from 'Landing';

const App = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <Loading callback={() => setIsLoading(false)} />;
    }

    return (
        <div className="main-layout">
            <Header />
            <div className="container">
                <Landing />
                <LeftImageLayout image={Assets.images.trueSelf}>
                    <div className="ms-5">
                        <h2 className="fw-normal mb-5">
                            <Trans i18nKey="business.title" />
                        </h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.storeContentIcon} className="section-icon" />
                                </div>
                                <strong>Store content</strong>
                                <p className="mt-3">
                                    Find the companies that have the right values. Lum Network introduces the first
                                    decentralized.
                                </p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.tracabilityIcon} />
                                </div>
                                <strong>Tracability</strong>
                                <p className="mt-3">
                                    Find the companies that have the right values. Lum Network introduces the first
                                    decentralized.
                                </p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.transparencyIcon} className="section-icon" />
                                </div>
                                <strong>Transparency</strong>
                                <p className="mt-3">
                                    Find the companies that have the right values. Lum Network introduces the first
                                    decentralized.
                                </p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.businessIcon} className="section-icon" />
                                </div>
                                <strong>Business practices</strong>
                                <p className="mt-3">
                                    Find the companies that have the right values. Lum Network introduces the first
                                    decentralized.
                                </p>
                            </div>
                        </div>
                    </div>
                </LeftImageLayout>
                <RightImageLayout image={Assets.images.qAndA} contentAlignment="start">
                    <div className="ms-5">
                        <h2 className="fw-normal mb-5">
                            <Trans i18nKey="qAndA.title" />
                        </h2>
                        <div className="d-flex flex-row mb-5">
                            <div className="d-flex align-items-center justify-content-center me-3 section-icon-container">
                                <img src={Assets.images.diamondIcon} className="section-icon" />
                            </div>
                            <div>
                                <h5>Find the companies that have the right values</h5>
                                <p className="mt-3">
                                    Find the companies that have the right values. <br />
                                    Lum Network introduces the first decentralized.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-5">
                            <div className="d-flex align-items-center justify-content-center me-3 section-icon-container">
                                <img src={Assets.images.layersIcon} className="section-icon" />
                            </div>
                            <div>
                                <h5>Trust layer</h5>
                                <p className="mt-3">
                                    Find the companies that have the right values. <br />
                                    Lum Network introduces the first decentralized.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="d-flex align-items-center justify-content-center me-3 section-icon-container">
                                <img src={Assets.images.communityIcon} className="section-icon" />
                            </div>
                            <div>
                                <h5>Community</h5>
                                <p className="mt-3">
                                    Find the companies that have the right values. <br />
                                    Lum Network introduces the first decentralized.
                                </p>
                            </div>
                        </div>
                    </div>
                </RightImageLayout>
                <LeftImageLayout>
                    <div>
                        <h2 className="fw-normal mb-5">
                            <Trans i18nKey="rewards.title" />
                        </h2>
                        <div>
                            <Trans i18nKey="rewards.description" />
                        </div>
                    </div>
                </LeftImageLayout>
            </div>
            <div className="bg-white">
                <LeftLayout
                    className="white-section container"
                    leftContent={<h1 className="green-title me-5">Built with green mindset</h1>}
                    contentAlignment="start"
                    rightContent={
                        <div className="container ms-5">
                            <div className="row g-5">
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>{'Cosmos & Tendermint'}</strong> <br />
                                    <strong>Proof of Stake</strong> <br />
                                    <p>
                                        As opposed to the energy consuming Proof of Work <br />
                                        used by the Bitoin blockchain.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>Low carbon footprint</strong> <br />
                                    <p>99% less than proof of work</p>
                                </div>
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>Cheap transactons cost</strong> <br />
                                    <p>We store a minimum of data on-chain to keep things light and portable.</p>
                                </div>
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>Fast block speed</strong> <br />
                                    <p>
                                        The Lum Foundation’s gateway enable companies to manage GDPR compliant user
                                        wallets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;
