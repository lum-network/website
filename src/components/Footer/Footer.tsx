import React from 'react';

import {
    LUM_EXPLORER_GITHUB,
    LUM_FACEBOOK,
    LUM_NETWORK_GITHUB,
    LUM_TELEGRAM,
    LUM_TWITTER,
    LUM_WALLET_GITHUB,
} from 'constant';
import { Button, Link } from 'components';

import './styles/Footer.scss';
import Assets from 'assets';

const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row gx-5 gy-5">
                    <div className="col-6">
                        <div className="h-100 me-5 d-flex flex-column justify-content-between">
                            <div>
                                <h4>Join our newsletter</h4>
                                <div className="input-group align-items-center border-bottom mt-4">
                                    <input className="form-control border-0" />
                                    <span>{'Submit >'}</span>
                                </div>
                            </div>
                            <div className="d-inline-flex">
                                <p>Lum Network 2021 ©</p>
                                <p className="ms-5">Privacy policy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-row justify-content-between ps-5 align-self-end">
                            <div className="d-flex flex-column ms-5">
                                <strong>Tools</strong>
                                <Link link={LUM_NETWORK_GITHUB} className="footer-link my-4">
                                    Documentation
                                </Link>
                                <Link link={LUM_EXPLORER_GITHUB} className="footer-link mb-4">
                                    Explorer
                                </Link>
                                <Link link={LUM_WALLET_GITHUB} className="footer-link">
                                    Wallet
                                </Link>
                            </div>
                            <div className="d-flex flex-column">
                                <strong>Community</strong>
                                <Link link={LUM_TELEGRAM} className="footer-link my-4">
                                    Telegram
                                </Link>
                                <Link link={LUM_TWITTER} className="footer-link mb-4">
                                    Twitter
                                </Link>
                                <Link link={LUM_FACEBOOK} className="footer-link">
                                    Facebook
                                </Link>
                                <Button outline className="mt-5 px-4">
                                    <img
                                        src={Assets.images.githubIcon}
                                        className="github-icon ms-2"
                                        width="20"
                                        height="20"
                                    />
                                    <span className="align-middle ms-3 me-2">@lum-network</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
