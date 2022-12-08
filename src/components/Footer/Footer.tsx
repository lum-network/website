import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
    LUM_NETWORK_WHITEPAPER,
    NavigationConstants,
} from 'constant';
import { Button, Link } from 'components';

import './styles/Footer.scss';

const Footer = (): JSX.Element => {
    const { t } = useTranslation();

    const mailingListForm = useFormik({
        initialValues: { email: '' },
        validationSchema: yup.object().shape({
            email: yup
                .string()
                .required('An email is required before submitting')
                .matches(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i), 'Wrong email address'),
        }),
        onSubmit: (values) => registerMailingList(values.email),
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const registerMailingList = (email: string) => {
        // TODO: Call to register the user to the mailing list
    };

    return (
        <footer>
            <img src={ellipse1} className="ellipse ellipse-1" />
            <img src={ellipse1} className="ellipse ellipse-2" />
            <div className="content">
                <div className="container">
                    <div className="row gx-5 gy-5">
                        <div className="col-12 col-md-6">
                            <div className="h-100 me-md-5 d-flex flex-column justify-content-between">
                                <div>
                                    <h3>{t('footer.newsletter.title')}</h3>
                                    <form
                                        onSubmit={mailingListForm.handleSubmit}
                                        data-bs-toggle="modal"
                                        data-bs-target={'#newsletter-modal'}
                                    >
                                        <div className="input-group align-items-baseline border-bottom border-dark mt-4">
                                            <input
                                                disabled
                                                {...mailingListForm.getFieldProps('email')}
                                                className="form-control border-0 px-0 pb-3 mt-3"
                                                placeholder={t('footer.newsletter.placeholder')}
                                            />
                                            <span>
                                                <button type="submit" className="text-black p-0 m-0">
                                                    {t('footer.newsletter.submit')}
                                                </button>
                                            </span>
                                        </div>
                                        {mailingListForm.touched.email && mailingListForm.errors.email && (
                                            <p className="mt-2 color-error">{mailingListForm.errors.email}</p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-lg-row justify-content-md-between justify-content-sm-around justify-content-between ps-0 align-self-end">
                                <div className="d-flex flex-column ms-md-5">
                                    <strong>{t('footer.useCases')}</strong>
                                    <NavLink
                                        to={NavigationConstants.SKR}
                                        className="footer-link text-reset text-decoration-none scale-anim my-4"
                                    >
                                        Skeepers Rewards
                                    </NavLink>
                                    <NavLink
                                        to={NavigationConstants.DFRACT}
                                        className="footer-link text-reset text-decoration-none scale-anim mb-4"
                                    >
                                        DFract
                                    </NavLink>
                                </div>
                                <div className="d-flex flex-column ms-md-3 mt-4 mt-lg-0">
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
                                <div className="d-flex flex-column ms-md-3 mt-4 mt-lg-0">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-stretch align-items-md-center">
                                <div className="d-flex flex-column-reverse flex-lg-row justify-content-around">
                                    <p className="footer-link mb-0">Lum Network 2021 ©</p>
                                    <p className="footer-link mb-0 ms-0 ms-lg-5">contact@lum.network</p>
                                    <Link link={LUM_NETWORK_WHITEPAPER} className="footer-link mb-0 ms-0 ms-lg-5">
                                        White paper
                                    </Link>
                                    {/* <p className="footer-link mb-0 ms-5">{t('footer.privacyPolicy')}</p> */}
                                </div>
                                <Button
                                    outline
                                    inverted
                                    className="px-4 mb-4 mb-md-0"
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
