import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { NavigationConstants } from 'constant';

import cm from 'assets/images/cm_big.png';
import tools from 'assets/images/tools_big.png';
import ellipse1 from 'assets/images/ellipse.svg';

import { ResponsiveImage } from 'components';

import './UseCaseCard.scss';

const UseCaseCard = ({ className, useCase }: { useCase: 'cm' | 'tools'; className?: string }): JSX.Element => {
    const { t } = useTranslation();

    const image = useCase === 'cm' ? cm : tools;
    const title = useCase === 'cm' ? 'useCases.cosmosMillions.card.title' : 'tools.page.title';
    const description =
        useCase === 'cm' ? 'useCases.cosmosMillions.card.description' : 'tools.landingSection.description';
    const to = useCase === 'cm' ? NavigationConstants.CM : NavigationConstants.TOOLS;

    return (
        <div className={`use-case-card w-100 ${className}`}>
            <img src={ellipse1} className="ellipse" />
            <div className="content">
                <NavLink preventScrollReset to={to} className="position-relative">
                    <ResponsiveImage src={image} alt={useCase} className="illustration" />
                </NavLink>
                <div className="p-4">
                    <div className="fw-bold fs-3">{t(title)}</div>
                    <div className="d-flex flex-column flex-lg-row justify-content-between mt-2">
                        <p>{t(description).replace('\n', ' ')}</p>
                        <NavLink
                            to={to}
                            preventScrollReset
                            className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-0 ms-lg-4"
                        >
                            {t('common.discover')}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseCaseCard;
