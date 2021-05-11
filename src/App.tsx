import React, { useState } from 'react';
import { RightImageLayout, LeftImageLayout, Footer, Header } from 'components';
import { Trans } from 'react-i18next';
import Loading from 'Loading';
import Landing from 'Landing';
import Assets from 'assets';
import LeftLayout from 'components/Layout/LeftLayout';

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
                    <h2 className="fw-normal">
                        <Trans i18nKey="business.title" />
                    </h2>
                </LeftImageLayout>
                <RightImageLayout image={Assets.images.qAndA} contentAlignment="start">
                    <div>
                        Right <br />
                    </div>
                </RightImageLayout>
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
                                    <strong>{'Proof of Stake'}</strong> <br />
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
