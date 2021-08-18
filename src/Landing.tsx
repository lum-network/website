import React from 'react';
import { useTranslation } from 'react-i18next';

import Assets from 'assets';
import { Button, Link } from 'components';
import { LUM_NETWORK_GITHUB, LUM_NETWORK_WHITEPAPER, LUM_TYPEFORM } from 'constant';

import './styles/Landing.scss';

const Landing = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className="landing-container">
            <div className="d-flex flex-md-row flex-column-reverse align-items-center justify-content-between">
                <div className="text-center text-md-start col-lg-5">
                    <h1 className="display-1 fw-bold">{t('landing.title')}</h1>
                    <p className="my-5">{t('landing.description')}</p>
                    <div className="d-inline-flex align-items-center">
                        <Button onClick={() => window.open(LUM_TYPEFORM, '_blank')}>
                            <strong className="px-3">{t('common.getLum')}</strong>
                        </Button>
                        <Link
                            className="ms-5 scale-anim d-flex flex-row align-items-baseline"
                            link={LUM_NETWORK_GITHUB}
                        >
                            <Link className="border-bottom border-2 pb-2 me-2" link={LUM_NETWORK_WHITEPAPER}>
                                <strong>{t('landing.whitePaper')}</strong>
                            </Link>
                            {'>'}
                        </Link>
                    </div>
                </div>
                <img src={Assets.images.lumLogo} alt="" className="lum-logo" />
            </div>
            <a
                href="#layer"
                className="scroll-cta-container d-flex flex-row align-self-center align-self-md-end align-items-center mb-5 mt-4 mt-lg-0"
            >
                <div className="d-none d-md-block">{t('landing.scrollAction')}</div>
                <div className="border rounded-circle ms-md-4 arrow-icon-container">
                    <img src={Assets.images.downArrowIcon} width="11" height="11" />
                </div>
            </a>
        </div>
    );
};

export default Landing;
