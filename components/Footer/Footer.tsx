import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';

import {
    AssetsSrc,
    LUM_NETWORK_DOCUMENTATION,
    LUM_EXPLORER,
    LUM_FACEBOOK,
    LUM_NETWORK_GITHUB,
    LUM_TELEGRAM,
    LUM_TWITTER,
    LUM_WALLET,
    LUM_MEDIUM,
    LUM_DISCORD,
} from 'constant';
import { Button, Link } from 'components';

import styles from './styles/Footer.module.scss';

const Footer = ({ onNewsletterClick }: { onNewsletterClick: () => void }): JSX.Element => {
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
        <footer className={styles.footer}>
            <div className="container">
                <div className="row gx-5 gy-5">
                    <div className="col-12 col-md-6">
                        <div className="h-100 me-md-5 d-flex flex-column justify-content-between">
                            <div>
                                <h3>{t('footer.newsletter.title')}</h3>
                                <form onSubmit={mailingListForm.handleSubmit} onClick={onNewsletterClick}>
                                    <div className={`input-group align-items-baseline border-bottom mt-4`}>
                                        <input
                                            disabled
                                            {...mailingListForm.getFieldProps('email')}
                                            className={`form-control ${styles['form-control']} border-0 px-0 pb-3 mt-3`}
                                            placeholder={t('footer.newsletter.placeholder')}
                                        />
                                        <span>
                                            <button type="submit" className="text-white p-0 m-0">
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
                        <div className="d-flex flex-row justify-content-md-between justify-content-sm-around justify-content-between ps-md-5 align-self-end">
                            <div className="d-flex flex-column ms-md-5">
                                <strong>{t('footer.tools')}</strong>
                                <Link link={LUM_NETWORK_DOCUMENTATION} className={`${styles['footer-link']} my-4`}>
                                    Documentation
                                </Link>
                                <Link link={LUM_EXPLORER} className={`${styles['footer-link']} mb-4`}>
                                    Explorer
                                </Link>
                                <Link link={LUM_WALLET} className={`${styles['footer-link']}`}>
                                    Wallet
                                </Link>
                            </div>
                            <div className="d-flex flex-column">
                                <strong>{t('footer.community')}</strong>
                                <Link link={LUM_MEDIUM} className={`${styles['footer-link']} my-4`}>
                                    Blog
                                </Link>
                                <Link link={LUM_DISCORD} className={`${styles['footer-link']} mb-4`}>
                                    Discord
                                </Link>
                                <Link link={LUM_TELEGRAM} className={`${styles['footer-link']} mb-4`}>
                                    Telegram
                                </Link>
                                <Link link={LUM_TWITTER} className={`${styles['footer-link']} mb-4`}>
                                    Twitter
                                </Link>
                                <Link link={LUM_FACEBOOK} className={styles['footer-link']}>
                                    Facebook
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-md-row flex-column-reverse justify-content-between align-items-stretch align-items-md-center">
                            <div className="d-inline-flex justify-content-around">
                                <p className={`${styles['footer-link']} mb-0`}>Lum Network 2021 ©</p>
                                <p className={`${styles['footer-link']} mb-0 ms-5`}>contact@lum.network</p>
                                <a href="/lum-media-kit.zip" className={`${styles['footer-link']} mb-0 ms-5`}>
                                    Media Kit
                                </a>
                                {/* <p className="footer-link mb-0 ms-5">{t('footer.privacyPolicy')}</p> */}
                            </div>
                            <Button
                                outline
                                className="px-4 mb-4 mb-md-0"
                                onClick={() => window.open(LUM_NETWORK_GITHUB, '_blank')}
                            >
                                <img
                                    alt="github"
                                    src={AssetsSrc.images.githubIcon}
                                    className={`${styles['github-icon']} ms-2`}
                                    width="20"
                                    height="20"
                                />
                                <span className="align-middle ms-3 me-2">@lum-network</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
