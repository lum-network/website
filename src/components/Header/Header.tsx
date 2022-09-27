import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import { LUM_EXPLORER, LUM_MEDIUM, LUM_WALLET, LUM_NETWORK_WHITEPAPER, LUM_DFRACT } from 'constant';
import { Button, Link } from 'components';

import './styles/Header.scss';

import lumNetworkLogoDark from 'assets/images/lum_network_logo_dark.png';

const Header = ({ modalId, bgTriggerElem }: { modalId: string; bgTriggerElem?: string }): JSX.Element => {
    const { t } = useTranslation();
    useEffect(() => {
        gsap.fromTo(
            `header`,
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                delay: 3,
            },
        );
    }, []);

    useEffect(() => {
        if (bgTriggerElem) {
            gsap.to(`header .background`, {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: `#welcome`,
                    start: '10% top',
                    end: '30% top',
                    scrub: true,
                },
            });
        } else {
            gsap.to(`header .background`, {
                opacity: 1,
                duration: 0,
            });
        }
    }, [bgTriggerElem]);

    return (
        <header className="navbar fixed-top">
            <div className="background" />
            <nav className="container d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <a href="/" className="navbar-brand">
                    <img alt="Lum" src={lumNetworkLogoDark} width="235" height="38" className="lum-logo-header" />
                </a>
                <div className="navbar-items-container d-none d-md-flex flex-row align-items-center">
                    <Link className="me-sm-3 me-md-5" link={LUM_NETWORK_WHITEPAPER}>
                        {t('landing.whitePaper')}
                    </Link>
                    <Link link={LUM_MEDIUM} className="me-sm-3 me-md-5">
                        Blog
                    </Link>
                    <Link link={LUM_WALLET} className="me-sm-3 me-md-5">
                        Wallet
                    </Link>
                    <Link link={LUM_EXPLORER} className="me-sm-3 me-md-5">
                        Explorer
                    </Link>
                    <Link link={LUM_DFRACT} className="me-sm-3 me-md-5">
                        DFract
                    </Link>
                    <Button outline inverted data-bs-toggle="modal" data-bs-target={modalId}>
                        {t('header.getInformed')}
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
