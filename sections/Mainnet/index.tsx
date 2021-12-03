import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.module.scss';

const Mainnet = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <section className="dark" id="mainnet">
            <div className="bg-lightning" />
            <div className="container" />

            <div className="container" id="mainnet-content">
                <div className="row">
                    <div className="col-12">
                        <p>
                            <strong>{t('mainnet.launchInTitle')}</strong>
                        </p>
                    </div>
                    <div className="col-4">
                        <h1 className="display-1">20</h1>
                        <h1>{t('mainnet.days')}</h1>
                    </div>
                    <div className="col-4">
                        <h1 className="display-1">12</h1>
                        <h1>{t('mainnet.hours')}</h1>
                    </div>
                    <div className="col-4">
                        <h1 className="display-1">02</h1>
                        <h1>{t('mainnet.minutes')}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Mainnet };
