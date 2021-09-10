import React from 'react';
import { useTranslation } from 'react-i18next';

import tendermint from 'assets/images/partners/tendermint.png';
import figment from 'assets/images/partners/figment.png';
import coinbaseventures from 'assets/images/partners/coinbaseventures.png';
import a16z from 'assets/images/partners/a16z.png';
import panteracapital from 'assets/images/partners/panteracapital.png';
import matterblock from 'assets/images/partners/matterblock.jpg';
import polychaincapital from 'assets/images/partners/polychaincapital.png';
import krakenventures from 'assets/images/partners/krakenventures.png';
import frameworkventures from 'assets/images/partners/frameworkventures.png';
import dcg from 'assets/images/partners/dcg.png';
import scytaleventures from 'assets/images/partners/scytaleventures.png';
import fenbushicapital from 'assets/images/partners/fenbushicapital.png';

import './TrustedBySection.scss';

const TrustedBySection = (): JSX.Element => {
    const { t } = useTranslation();

    const partners: Array<{ logo: string; title: string; url: string }> = [
        {
            logo: tendermint,
            title: 'Tendermint Ventures',
            url: 'https://tendermint.com/ventures',
        },
        {
            logo: figment,
            title: 'Figment Capital',
            url: 'https://figment.io',
        },
        {
            logo: coinbaseventures,
            title: 'Coinbase Ventures',
            url: 'https://ventures.coinbase.com',
        },
        {
            logo: a16z,
            title: 'a16z',
            url: 'https://a16z.com',
        },
        {
            logo: panteracapital,
            title: 'Pantera Capital',
            url: 'https://panteracapital.com',
        },
        {
            logo: matterblock,
            title: 'Matterblock',
            url: 'https://matterblock.com',
        },
        {
            logo: polychaincapital,
            title: 'Polychain Capital',
            url: 'https://jobs.polychain.capital',
        },
        {
            logo: krakenventures,
            title: 'Kraken Ventures',
            url: 'https://www.krakenventures.com',
        },
        {
            logo: frameworkventures,
            title: 'Framework Ventures',
            url: 'https://framework.ventures',
        },
        {
            logo: dcg,
            title: 'DCG',
            url: 'https://dcg.co',
        },
        {
            logo: scytaleventures,
            title: 'Scytale Ventures',
            url: 'https://scytale.ventures',
        },
        {
            logo: fenbushicapital,
            title: 'Fenbushi Capital',
            url: 'https://www.fenbushicapital.vc/',
        },
    ];

    return (
        <section className="light" id="trustedby">
            <div id="trustedby-content" className="container">
                <div className="row">
                    <div className="col-12">
                        <h1
                            className="section-content-info"
                            dangerouslySetInnerHTML={{ __html: t('trustedBy.title') }}
                        />
                    </div>
                </div>
                <div className="section-content-info row d-flex flex-row justify-content-start align-items-start flex-wrap">
                    {partners.map((p, i) => (
                        <a key={i} className="partner" href={p.url} target="_blank" rel="noreferrer">
                            <img src={p.logo} alt={`${p.title} logo`} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
