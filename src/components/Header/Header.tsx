import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { NavigationConstants } from 'constant';
import { DropdownButton } from 'components';

import './styles/Header.scss';

import lumNetworkLogoDark from 'assets/images/lum_network_logo_dark.png';
import { Link as ReactRouterLink } from 'react-router-dom';

const Header = (): JSX.Element => {
    const tl = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // Enables Header GSAP animation only on the landing page
        if (window.location.pathname === '/') {
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
        } else {
            gsap.set('header', {
                opacity: 1,
            });
        }
    }, []);

    useEffect(() => {
        const scrollTrigger = {
            trigger: '#root',
            start: 'top top',
            end: 'top+=45px top',
            scrub: true,
        };

        if (!tl.current) {
            tl.current = gsap.timeline();
        }

        tl.current.to(`header .background`, {
            opacity: 1,
            ease: 'none',
            scrollTrigger,
        });
    }, []);

    return (
        <header className="navbar fixed-top mt-4 mx-auto container p-4">
            <div className="background" />
            <nav className="container d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <ReactRouterLink to="/" className="navbar-brand">
                    <img alt="Lum" src={lumNetworkLogoDark} width="235" height="38" className="lum-logo-header" />
                </ReactRouterLink>
                <div className="navbar-items-container d-none d-md-flex flex-row align-items-center">
                    <ReactRouterLink to={NavigationConstants.TOOLS} className="link-btn me-sm-3 me-md-5">
                        Tools
                    </ReactRouterLink>
                    <DropdownButton
                        title="Use Cases"
                        items={[{ title: 'Cosmos Millions', onPress: NavigationConstants.CM }]}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
