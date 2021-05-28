import React from 'react';
import { useTranslation } from 'react-i18next';

import Assets from 'assets';
import { LUM_EXPLORER, LUM_NETWORK_WHITEPAPER, LUM_WALLET } from 'constant';
import { Link } from 'components';

import Button from '../Button/Button';

import './styles/Header.scss';

const Header = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <nav className="position-fixed d-flex flex-row justify-content-between navbar-container align-items-center">
            <img src={Assets.images.lumNetworkLogo} width="235" height="38" className="lum-logo-header" />
            <div className="navbar-items-container">
                <Link link={LUM_WALLET} className="me-md-5">
                    Wallet
                </Link>
                <Link link={LUM_EXPLORER} className="me-md-5">
                    Explorer
                </Link>
                <Button outline onClick={() => window.open(LUM_NETWORK_WHITEPAPER, '_blank')}>
                    {t('header.getInformed')}
                </Button>
            </div>
        </nav>
    );
};

export default Header;
