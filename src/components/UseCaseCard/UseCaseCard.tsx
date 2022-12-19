import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { NavigationConstants } from 'constant';

import skr from 'assets/images/skr.png';
import dfract from 'assets/images/dfract.png';
import dfractBig from 'assets/images/dfract_big.png';
import skrBig from 'assets/images/skr_big.png';
import ellipse1 from 'assets/images/ellipse.svg';

import './UseCaseCard.scss';
import ResponsiveImage from 'components/ResponsiveImage/ResponsiveImage';

const UseCaseCard = ({
    className,
    useCase,
    big,
}: {
    useCase: 'skr' | 'dfract';
    className?: string;
    big?: boolean;
}): JSX.Element => {
    const { t } = useTranslation();

    const icon = useCase === 'skr' ? (big ? skrBig : skr) : big ? dfractBig : dfract;
    const title = useCase === 'skr' ? 'useCases.skr.card.title' : 'useCases.dfract.card.title';
    const description = useCase === 'skr' ? 'useCases.skr.card.description' : 'useCases.dfract.card.description';
    const to = useCase === 'skr' ? NavigationConstants.SKR : NavigationConstants.DFRACT;

    return (
        <div className={`use-case-card w-100 ${className}`}>
            <img src={ellipse1} className="ellipse" />
            <div className="content">
                <NavLink preventScrollReset to={to} className="position-relative">
                    <ResponsiveImage src={icon} alt={useCase} className="illustration" />
                </NavLink>
                <div className="p-4">
                    <div className="fw-bold fs-3">{t(title)}</div>
                    <div className="d-flex flex-column flex-lg-row justify-content-between mt-2">
                        <p>{t(description)}</p>
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
