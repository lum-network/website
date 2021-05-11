import React from 'react';

import Assets from 'assets';
import { LUM_EXPLORER_GITHUB, LUM_WALLET_GITHUB } from 'constant';

import Button from '../Button/Button';

import './styles/Header.scss';
import { Link } from 'components';

const Header = (): JSX.Element => {
    return (
        <nav className="position-fixed d-flex flex-row justify-content-between navbar-container align-items-center">
            <img src={Assets.images.lumNetworkLogo} width="235" height="38" className="lum-logo" />
            <div className="navbar-items-container">
                <Link link={LUM_WALLET_GITHUB} className="me-md-5">
                    Wallet
                </Link>
                <Link link={LUM_EXPLORER_GITHUB} className="me-md-5">
                    Explorer
                </Link>
                <Button outline>Get informed</Button>
            </div>
        </nav>
    );
};

export default Header;
