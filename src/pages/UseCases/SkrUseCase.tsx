import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Link } from 'components';
import { NavigationConstants, SKR_URL } from 'constant';
import { RootState } from 'redux/store';

import dfractIllu from 'assets/images/dfract_big.png';
import skrIllu from 'assets/images/skr_big.png';
import skrBigIllu from 'assets/images/skr_big2.png';
import skrBrowser from 'assets/images/skr_browser.png';

import './UseCases.scss';

const SkrUseCase = (): JSX.Element => {
    const { t } = useTranslation();
    const { countries, brands, reviews } = useSelector((state: RootState) => ({
        countries: state.stats.skr.countries,
        brands: state.stats.skr.brands,
        reviews: state.stats.skr.reviews,
    }));

    return (
        <section id="skr-use-case">
            <div className="container">
                <img src={skrIllu} alt="Skeepers Rewards illustration" className="illustration" />
                <div className="section-content">
                    <h1 className="section-content-title mt-5">{t('useCases.skr.card.title')}</h1>
                    <div className="row row-cols-1 row-cols-lg-2 gy-4 gy-lg-0">
                        <div className="col">{t('useCases.skr.page.description1')}</div>
                        <div className="col">{t('useCases.skr.page.description2')}</div>
                    </div>
                    <h6 className="mb-4">{t('useCases.skr.page.numbers.title')}</h6>
                    <div className="row row-cols-2 row-cols-lg-3 mx-1 numbers-container gy-4 gy-lg-0 px-2 pb-4 pb-lg-4 pt-lg-4 mt-4 mt-lg-0">
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{countries || '-'}</div>
                                <p>{t('useCases.skr.page.numbers.countries')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{reviews || '-'}</div>
                                <p>{t('useCases.skr.page.numbers.reviews')}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="py-3 h-100 d-flex flex-column justify-content-center">
                                <div className="stat-number">{brands || '-'}</div>
                                <p>{t('useCases.skr.page.numbers.brands')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section-margin-top">
                    <div className="col-12 col-lg-5 my-auto">
                        <h2>{t('useCases.skr.page.details.title')}</h2>
                        <p>{t('useCases.skr.page.details.description')}</p>
                        <Link
                            link={SKR_URL}
                            className="wallet-github-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill"
                        >
                            {t('useCases.skr.page.details.cta')}
                        </Link>
                    </div>
                    <div className="col-12 col-lg-7 order-first order-lg-last mb-5 mb-lg-0">
                        <img src={skrBrowser} className="illustration" alt="Skeepers Rewards in browser" />
                    </div>
                </div>
            </div>
            <img src={skrBigIllu} className="section-margin-top" alt="" />
            <div className="container use-cases-container">
                <h1 className="mb-4">{t('useCases.titleOther')}</h1>
                <div className="use-case-card w-100">
                    <img src={dfractIllu} alt="dfract" className="illustration" />
                    <div className="p-4">
                        <div className="fw-bold fs-3">{t('useCases.dfract.card.title')}</div>
                        <div className="d-flex flex-column flex-lg-row justify-content-between mt-2">
                            <p>{t('useCases.dfract.card.description')}</p>
                            <NavLink
                                to={NavigationConstants.DFRACT}
                                className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-0 ms-lg-4"
                            >
                                {t('common.discover')}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkrUseCase;
