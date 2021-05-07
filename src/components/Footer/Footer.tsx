import React from 'react';

import { Button } from 'components';

import './styles/Footer.scss';

const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row gx-5 gy-5">
                    <div className="col-6">
                        <h4>Join our newsletter</h4>
                        <div className="input-group align-items-center border-bottom mt-4">
                            <input className="form-control border-0" />
                            <span>{'Submit >'}</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-row justify-content-around ps-5">
                            <div>
                                <strong>Tools</strong> <br />
                                <br />
                                <p className="footer-link">
                                    Documentation <br />
                                    Explorer <br />
                                    Wallet
                                </p>
                            </div>
                            <div>
                                <strong>Community</strong> <br />
                                <br />
                                <p className="footer-link">
                                    Telegram <br />
                                    Twitter <br />
                                    Facebook
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div>Lum Network 2021 © Privacy Policy</div>
                    </div>
                    <div className="col-6 d-flex flex-row justify-content-end">
                        <Button outline className="ms-5">
                            lum-network
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
