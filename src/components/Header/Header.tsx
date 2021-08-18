import React from 'react';
import { useTranslation } from 'react-i18next';

import Assets from 'assets';
import { LUM_EXPLORER, LUM_WALLET } from 'constant';
import { Link } from 'components';

import Button from '../Button/Button';

import './styles/Header.scss';

const Header = ({ modalId }: { modalId: string }): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className="navbar-container position-fixed">
            <nav className="container d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <img src={Assets.images.lumNetworkLogo} width="235" height="38" className="lum-logo-header" />
                <div className="navbar-items-container d-none d-md-flex flex-row align-items-center">
                    <Link link={LUM_WALLET} className="me-sm-3 me-md-5">
                        Wallet
                    </Link>
                    <Link link={LUM_EXPLORER} className="me-sm-3 me-md-5">
                        Explorer
                    </Link>
                    <Button outline data-bs-toggle="modal" data-bs-target={modalId}>
                        {t('header.getInformed')}
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
