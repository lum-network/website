import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import { LUM_NETWORK_WHITEPAPER, NavigationConstants } from 'constant';
import { DropdownButton, Link } from 'components';

import './styles/Header.scss';

import lumNetworkLogoDark from 'assets/images/lum_network_logo_dark.png';
import { Link as ReactRouterLink } from 'react-router-dom';

const Header = ({ bgTriggerElem }: { modalId: string; bgTriggerElem?: string }): JSX.Element => {
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
        <header className="navbar fixed-top mt-4 mx-auto container p-4">
            <div className="background" />
            <nav className="container d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <ReactRouterLink to="/" className="navbar-brand">
                    <img alt="Lum" src={lumNetworkLogoDark} width="235" height="38" className="lum-logo-header" />
                </ReactRouterLink>
                <div className="navbar-items-container d-none d-md-flex flex-row align-items-center">
                    <Link className="me-sm-3 me-md-5" link={LUM_NETWORK_WHITEPAPER}>
                        {t('landing.whitePaper')}
                    </Link>
                    <ReactRouterLink to={NavigationConstants.TOOLS} className="link-btn me-sm-3 me-md-5">
                        Tools
                    </ReactRouterLink>
                    <DropdownButton
                        title="Use Cases"
                        items={[
                            { title: 'Skeepers Rewards', onPress: NavigationConstants.SKR },
                            { title: 'DFract', onPress: NavigationConstants.DFRACT },
                        ]}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
