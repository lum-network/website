import React from 'react';
import { useTranslation } from 'react-i18next';

import trustLayerIllu from 'assets/images/trust_layers.png';
import storeContentIcon from 'assets/images/store_content.png';
import traceabilityIcon from 'assets/images/traceability.png';
import transparencyIcon from 'assets/images/transparency.png';
import businessIcon from 'assets/images/business.png';

import './TrustLayerSection.scss';

const TrustLayerSection = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <section className="dark" id="trustlayer">
            <div id="trustlayer-content" className="container">
                <div className="row d-flex flex-lg-row flex-column justify-content-between">
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <img className="trust-layers" src={trustLayerIllu} alt="Trust layers" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('business.title') }}
                        />
                        <div className="row">
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <img src={storeContentIcon} alt="Content stamping" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.store.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.store.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <img src={traceabilityIcon} alt="Traceability" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.tracability.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.tracability.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <img src={transparencyIcon} alt="Transparency" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.transparency.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.transparency.description') }} />
                            </div>
                            <div className="section-content-info col-12 col-sm-6 d-flex flex-column uvp-container">
                                <div className="light-icon-wrapper">
                                    <img src={businessIcon} alt="Business application" />
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: t('business.practices.title') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('business.practices.description') }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustLayerSection;
