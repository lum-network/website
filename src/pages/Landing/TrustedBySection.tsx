import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import Assets from 'assets';

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
            logo: Assets.partners.ignite,
            title: 'Ignite',
            url: 'https://ignite.com/',
        },
        {
            logo: Assets.partners.stakewithus,
            title: 'StakeWithUs',
            url: 'https://www.stakewith.us',
        },
        {
            logo: Assets.partners.arcanum,
            title: 'Arcanum Capital',
            url: 'https://www.arcanum.capital',
        },
        {
            logo: Assets.partners.imperator,
            title: 'Imperator',
            url: 'https://imperator.co',
        },
        {
            logo: Assets.partners.sentinel,
            title: 'Sentinel',
            url: 'https://sentinel.co',
        },
        {
            logo: Assets.partners.skeepers,
            title: 'Skeepers',
            url: 'https://skeepers.io',
        },
        {
            logo: Assets.partners.cosmostation,
            title: 'Cosmostation',
            url: 'https://mintscan.io',
        },
        {
            logo: Assets.partners.stakefish,
            title: 'Stake.Fish',
            url: 'https://stake.fish',
        },
        {
            logo: Assets.partners.swissborg,
            title: 'Swissborg Ventures',
            url: 'https://swissborg.com',
        },
        {
            logo: Assets.partners.klub,
            title: 'Klub',
            url: 'https://klub.ki',
        },
        /* {
            logo: Assets.partners.sg1,
            title: 'SG-1',
            url: 'https://sg-1.online',
        },
        {
            logo: Assets.partners.cryptocrew,
            title: 'CryptoCrew Validators',
            url: 'https://ccvalidators.com/',
        }, */
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
                <div className={`section-content-info row row-cols-${partners.length / 2}`}>
                    {partners.map((p, i) => (
                        <div key={i} className="col">
                            <a className="partner" href={p.url} target="_blank" rel="noreferrer">
                                <img src={p.logo} alt={`${p.title} logo`} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
