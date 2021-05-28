import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Assets from 'assets';
import { RightImageLayout, LeftImageLayout, Footer, Header, LeftLayout, Button } from 'components';
import Loading from 'Loading';
import Landing from 'Landing';

import './styles/App.scss';
import { LUM_TYPEFORM } from 'constant';

const App = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);

    const { t } = useTranslation();

    if (isLoading) {
        return <Loading callback={() => setIsLoading(false)} />;
    }

    return (
        <div className="main-layout">
            <Header />
            <div className="container">
                <Landing />
                <LeftImageLayout image={Assets.images.trueSelf} contentAlignment="start">
                    <div className="ms-5">
                        <h2 className="fw-normal mb-5">
                            <Trans i18nKey="business.title" />
                        </h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.storeContentIcon} className="section-icon" />
                                </div>
                                <strong>{t('business.store.title')}</strong>
                                <p className="mt-3">{t('business.store.description')}</p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.tracabilityIcon} />
                                </div>
                                <strong>{t('business.tracability.title')}</strong>
                                <p className="mt-3">{t('business.tracability.description')}</p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.transparencyIcon} className="section-icon" />
                                </div>
                                <strong>{t('business.transparency.title')}</strong>
                                <p className="mt-3">{t('business.transparency.description')}</p>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-center mb-3 section-icon-container">
                                    <img src={Assets.images.businessIcon} className="section-icon" />
                                </div>
                                <strong>{t('business.practices.title')}</strong>
                                <p className="mt-3">{t('business.practices.description')}</p>
                            </div>
                        </div>
                    </div>
                </LeftImageLayout>
                <RightImageLayout image={Assets.images.qAndA}>
                    <div className="ms-5">
                        <h2 className="fw-normal mb-5">
                            <Trans i18nKey="qAndA.title" />
                        </h2>
                        <div className="d-flex flex-row mb-5">
                            <div className="d-flex align-items-center justify-content-center me-3 section-icon-container">
                                <img src={Assets.images.diamondIcon} className="section-icon" />
                            </div>
                            <div>
                                <h5>{t('qAndA.companies.title')}</h5>
                                <p className="mt-3">{t('qAndA.companies.description')}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-5">
                            <div className="d-flex align-items-center justify-content-center me-3 section-icon-container">
                                <img src={Assets.images.layersIcon} className="section-icon" />
                            </div>
                            <div>
                                <h5>{t('qAndA.trust.title')}</h5>
                                <p className="mt-3">{t('qAndA.trust.description')}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="d-flex align-items-center justify-content-center me-3 section-icon-container">
                                <img src={Assets.images.communityIcon} className="section-icon" />
                            </div>
                            <div>
                                <h5>{t('qAndA.community.title')}</h5>
                                <p className="mt-3">{t('qAndA.community.description')}</p>
                            </div>
                        </div>
                    </div>
                </RightImageLayout>
                <LeftImageLayout
                    image={Assets.images.diamondIllu}
                    className="mt-5 pt-5"
                    alignment="start"
                    contentJustification="around"
                >
                    <div>
                        <h2 className="fw-normal mb-5">
                            <Trans i18nKey="rewards.title" />
                        </h2>
                        <div>
                            <Trans i18nKey="rewards.description" />
                        </div>
                    </div>
                </LeftImageLayout>
                <div className="powered-by-section bg-black container">
                    <div className="row gx-5 mb-5">
                        <div className="col">
                            <div className="d-flex flex-row justify-content-around">
                                <h1 className="fw-light me-5 powered-by-title">
                                    {t('poweredBy.title')}
                                    <span className="worksans">Lum.</span>
                                </h1>
                                <div className="powered-by-description">{t('poweredBy.description')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="powered-by-card">
                                <img
                                    src={Assets.images.cubeIllu}
                                    width="210"
                                    height="210"
                                    className="powered-by-card-illu mb-4"
                                />
                                <div>
                                    <h6>{t('poweredBy.security.title')}</h6>
                                    <p className="m-0">{t('poweredBy.security.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="powered-by-card">
                                <img
                                    src={Assets.images.coinsIllu}
                                    width="210"
                                    height="210"
                                    className="powered-by-card-illu-coins mb-4"
                                />
                                <div>
                                    <h6>{t('poweredBy.stake.title')}</h6>
                                    <p className="m-0">{t('poweredBy.stake.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="powered-by-card">
                                <img
                                    src={Assets.images.paperIllu}
                                    width="210"
                                    height="210"
                                    className="powered-by-card-illu mb-4"
                                />
                                <div>
                                    <h6>{t('poweredBy.future.title')}</h6>
                                    <p className="m-0">{t('poweredBy.future.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className="align-self-center my-5" onClick={() => window.open(LUM_TYPEFORM, '_blank')}>
                        <strong className="px-3">{t('common.getLum')}</strong>
                    </Button>
                </div>
            </div>
            <div className="bg-white">
                <LeftLayout
                    className="white-section container"
                    leftContent={<h1 className="green-title me-5">{t('greenSection.title')}</h1>}
                    contentAlignment="start"
                    rightContent={
                        <div className="container ms-5">
                            <div className="row g-5">
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>{t('greenSection.pOfS.titleCosmos')}</strong> <br />
                                    <strong>{t('greenSection.pOfS.titlePofS')}</strong> <br />
                                    <p>{t('greenSection.pOfS.description')}</p>
                                </div>
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>{t('greenSection.carbon.title')}</strong> <br />
                                    <p>{t('greenSection.carbon.description')}</p>
                                </div>
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>{t('greenSection.costs.title')}</strong> <br />
                                    <p>{t('greenSection.costs.description')}</p>
                                </div>
                                <div className="col-6">
                                    <div className="green-dot mb-3" />
                                    <strong>{t('greenSection.blocks.title')}</strong> <br />
                                    <p>{t('greenSection.blocks.description')}</p>
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
