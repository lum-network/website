import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { gsap } from 'gsap/dist/gsap';
import Image from 'next/image';

import { AssetsSrc } from 'constant';

import styles from './TrustedBySection.module.scss';

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
            logo: AssetsSrc.partners.tendermint,
            title: 'Tendermint',
            url: 'https://tendermint.com',
        },
        {
            logo: AssetsSrc.partners.swissborg,
            title: 'Swissborg Ventures',
            url: 'https://swissborg.com',
        },
        {
            logo: AssetsSrc.partners.cosmostation,
            title: 'Cosmostation',
            url: 'https://mintscan.io',
        },
        {
            logo: AssetsSrc.partners.stakefish,
            title: 'Stake.Fish',
            url: 'https://stake.fish',
        },
        {
            logo: AssetsSrc.partners.arcanum,
            title: 'Arcanum Capital',
            url: 'https://www.arcanum.capital',
        },
        {
            logo: AssetsSrc.partners.skeepers,
            title: 'Skeepers',
            url: 'https://skeepers.io',
        },
        {
            logo: AssetsSrc.partners.klub,
            title: 'Klub',
            url: 'https://klub.ki',
        },
        {
            logo: AssetsSrc.partners.imperator,
            title: 'Imperator',
            url: 'https://imperator.co',
        },
        {
            logo: AssetsSrc.partners.sg1,
            title: 'SG-1',
            url: 'https://sg-1.online',
        },
        {
            logo: AssetsSrc.partners.sentinel,
            title: 'Sentinel',
            url: 'https://sentinel.co',
        },
        {
            logo: AssetsSrc.partners.stakewithus,
            title: 'StakeWithUs',
            url: 'https://www.stakewith.us',
        },
        {
            logo: AssetsSrc.partners.cryptocrew,
            title: 'CryptoCrew Validators',
            url: 'https://ccvalidators.com/',
        },
    ];

    return (
        <section id="light" className={styles.trustedby}>
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
                            <a key={i} className={styles.partner} href={p.url} target="_blank" rel="noreferrer">
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
