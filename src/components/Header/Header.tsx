import React from 'react';

import Assets from 'assets';
import { LUM_EXPLORER_GITHUB, LUM_WALLET_GITHUB } from 'constant';

import Button from '../Button/Button';

import './styles/Header.scss';

const Header = (): JSX.Element => {
    return (
        <nav className="position-fixed d-flex flex-row justify-content-between navbar-container align-items-center">
            <img src={Assets.images.lumNetworkLogo} width="235" height="38" className="lum-logo" />
            <div className="navbar-items-container">
                <a href={LUM_WALLET_GITHUB} rel="noreferrer" className="me-md-5" target="_blank">
                    Wallet
                </a>
                <a href={LUM_EXPLORER_GITHUB} target="_blank" rel="noreferrer" className="me-md-5">
                    Explorer
                </a>
                <Button outline>Get informed</Button>
            </div>
        </nav>
    );
};

export default Header;
