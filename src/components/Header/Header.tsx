import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import Assets from 'assets';
import { LUM_EXPLORER, LUM_WALLET } from 'constant';
import { Link } from 'components';

import Button from '../Button/Button';

import './styles/Header.scss';

const Header = ({ modalId, bgTriggerElem }: { modalId: string; bgTriggerElem?: string }): JSX.Element => {
    const { t } = useTranslation();

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
                    <img src={Assets.images.lumNetworkLogoDark} width="235" height="38" className="lum-logo-header" />
                </a>
                <div className="navbar-items-container d-none d-md-flex flex-row align-items-center">
                    <Link link={LUM_WALLET} className="me-sm-3 me-md-5">
                        Wallet
                    </Link>
                    <Link link={LUM_EXPLORER} className="me-sm-3 me-md-5">
                        Explorer
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
