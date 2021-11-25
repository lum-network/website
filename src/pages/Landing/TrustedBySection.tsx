import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import tendermint from 'assets/images/partners/tendermint.png';
import skeepers from 'assets/images/partners/skeepers.png';
import arcanum from 'assets/images/partners/arcanum.png';
import swissborg from 'assets/images/partners/swissborg.png';
import stakefish from 'assets/images/partners/stakefish.png';
import cosmostation from 'assets/images/partners/cosmostation.png';
import klub from 'assets/images/partners/klub.png';
import imperator from 'assets/images/partners/imperator.png';
import sg1 from 'assets/images/partners/sg-1.png';
import sentinel from 'assets/images/partners/sentinel.png';
import stakewithus from 'assets/images/partners/stakewithus.png';
import cryptocrew from 'assets/images/partners/cryptocrew.png';

import './TrustedBySection.scss';

const TrustedBySection = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#trustedby`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };
        gsap.from(`#trustedby .section-content-title`, {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#trustedby .section-content-info`, {
            y: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#trustedby .partner`, {
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
            stagger: 0.05,
        });
    }, []);

    const partners: Array<{ logo: string; title: string; url: string }> = [
        {
            logo: tendermint,
            title: 'Tendermint',
            url: 'https://tendermint.com',
        },
        {
            logo: swissborg,
            title: 'Swissborg Ventures',
            url: 'https://swissborg.com',
        },
        {
            logo: cosmostation,
            title: 'Cosmostation',
            url: 'https://mintscan.io',
        },
        {
            logo: stakefish,
            title: 'Stake.Fish',
            url: 'https://stake.fish',
        },
        {
            logo: arcanum,
            title: 'Arcanum Capital',
            url: 'https://www.arcanum.capital',
        },
        {
            logo: skeepers,
            title: 'Skeepers',
            url: 'https://skeepers.io',
        },
        {
            logo: klub,
            title: 'Klub',
            url: 'https://klub.ki',
        },
        {
            logo: imperator,
            title: 'Imperator',
            url: 'https://imperator.co',
        },
        {
            logo: sg1,
            title: 'SG-1',
            url: 'https://sg-1.online',
        },
        {
            logo: sentinel,
            title: 'Sentinel',
            url: 'https://sentinel.co',
        },
        {
            logo: stakewithus,
            title: 'StakeWithUs',
            url: 'https://www.stakewith.us',
        },
        {
            logo: cryptocrew,
            title: 'CryptoCrew Validators',
            url: 'https://ccvalidators.com/',
        },
    ];

    return (
        <section className="light" id="trustedby">
            <div id="trustedby-content" className="container">
                <div className="row">
                    <div className="col-12">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('trustedBy.title') }}
                        />
                    </div>
                </div>
                <div className="section-content-info row">
                    <div className="col-12 d-flex flex-row justify-content-between align-items-start flex-wrap">
                        {partners.map((p, i) => (
                            <a key={i} className="partner" href={p.url} target="_blank" rel="noreferrer">
                                <img src={p.logo} alt={`${p.title} logo`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
