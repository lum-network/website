import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import ellipse1 from 'assets/images/ellipse.svg';
import githubIcon from 'assets/images/github.png';

import {
    LUM_NETWORK_DOCUMENTATION,
    LUM_EXPLORER,
    LUM_NETWORK_GITHUB,
    LUM_TELEGRAM,
    LUM_TWITTER,
    LUM_WALLET,
    LUM_DISCORD,
    NavigationConstants,
    LUM_MEDIUM,
} from 'constant';
import { Button, Link } from 'components';

import './styles/Footer.scss';
import moment from 'moment';

const Footer = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <footer>
            <img src={ellipse1} className="ellipse ellipse-1" />
            <img src={ellipse1} className="ellipse ellipse-2" />
            <div className="content">
                <div className="container">
                    <div className="row gx-5 gy-5">
                        <div className="col-12 col-lg-6">
                            <div className="h-100 me-md-5 d-flex flex-column justify-content-between">
                                <div>
                                    <h3>{t('footer.newsletter.title')}</h3>
                                    <form data-bs-toggle="modal" data-bs-target={'#newsletter-modal'}>
                                        <div className="input-group align-items-baseline border-bottom border-dark mt-4">
                                            <input
                                                disabled
                                                className="form-control border-0 px-0 pb-3 mt-3"
                                                placeholder={t('footer.newsletter.placeholder')}
                                            />
                                            <span>
                                                <button type="submit" className="text-black p-0 m-0">
                                                    {t('footer.newsletter.submit')}
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column flex-lg-row justify-content-md-between justify-content-sm-around justify-content-between ps-0 align-self-end">
                                <div className="d-flex flex-column ms-lg-5">
                                    <strong>{t('footer.useCases')}</strong>
                                    <NavLink
                                        preventScrollReset
                                        to={NavigationConstants.CM}
                                        className="footer-link text-reset text-decoration-none scale-anim my-4"
                                    >
                                        Cosmos Millions
                                    </NavLink>
                                </div>
                                <div className="d-flex flex-column ms-0 ms-lg-3 mt-4 mt-lg-0">
                                    <strong>{t('footer.tools')}</strong>
                                    <Link link={LUM_NETWORK_DOCUMENTATION} className="footer-link my-4">
                                        Documentation
                                    </Link>
                                    <Link link={LUM_EXPLORER} className="footer-link mb-4">
                                        Explorer
                                    </Link>
                                    <Link link={LUM_WALLET} className="footer-link mb-4">
                                        Wallet
                                    </Link>
                                </div>
                                <div className="d-flex flex-column ms-0 ms-lg-3 mt-4 mt-lg-0">
                                    <strong>{t('footer.community')}</strong>
                                    <Link link={LUM_TWITTER} className="footer-link my-4">
                                        Twitter
                                    </Link>
                                    <Link link={LUM_DISCORD} className="footer-link mb-4">
                                        Discord
                                    </Link>
                                    <Link link={LUM_TELEGRAM} className="footer-link mb-4">
                                        Telegram
                                    </Link>
                                    <Link link={LUM_MEDIUM} className="footer-link mb-4">
                                        Medium
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-stretch align-items-lg-center">
                                <div className="d-flex flex-column-reverse flex-lg-row justify-content-around">
                                    <p className="footer-link mb-0">Lum Network {moment().utc().year()} ©</p>
                                    <p className="footer-link mb-0 ms-0 ms-lg-5">contact@lum.network</p>
                                    {/* <p className="footer-link mb-0 ms-5">{t('footer.privacyPolicy')}</p> */}
                                </div>
                                <Button
                                    outline
                                    inverted
                                    className="px-4 mb-4 mb-lg-0"
                                    onClick={() => window.open(LUM_NETWORK_GITHUB, '_blank')}
                                >
                                    <img
                                        alt="github"
                                        src={githubIcon}
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
