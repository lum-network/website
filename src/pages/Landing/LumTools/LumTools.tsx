import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'components';
import { LUM_NETWORK_GITHUB, NavigationConstants } from 'constant';

import tools from 'assets/images/tools.png';
import github from 'assets/images/github.png';

import './LumTools.scss';
import { useTranslation } from 'react-i18next';

const Tools = (): JSX.Element => {
    const { t } = useTranslation();

    const openGithub = (): void => {
        const newWindow = window.open(LUM_NETWORK_GITHUB, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <section id="lum-tools">
            <div className="container py-4 py-lg-auto">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-5 my-auto">
                        <div>
                            <h1>{t('tools.landingSection.title')}</h1>
                            <p className="my-4">{t('tools.landingSection.description')}</p>
                            <div className="d-flex flex-column flex-lg-row">
                                <NavLink
                                    to={NavigationConstants.TOOLS}
                                    className="tools-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill me-4"
                                >
                                    {t('tools.landingSection.discoverBtn')}
                                </NavLink>
                                <Button outline inverted className="github-btn mt-3 mt-lg-0" onClick={openGithub}>
                                    <span className="me-2">
                                        <img src={github} alt="" />
                                    </span>
                                    {t('tools.landingSection.githubBtn')}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 ms-auto">
                        <img src={tools} alt="Tools overview" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
