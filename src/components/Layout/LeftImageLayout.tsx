import React from 'react';
import Assets from 'assets';

import './styles/Layouts.scss';

interface Props {
    image: string;
    children: React.ReactNode;
}

const LeftImageLayout = (props: Props): JSX.Element => {
    const { image, children } = props;
    return (
        <div className="d-flex flex-md-row flex-column image-layout-container">
            <div className="d-flex align-items-center justify-content-center">
                <img src={Assets.images.sectionImageBg} alt="" className="" />
                <img src={image} alt="" className="section-image" />
            </div>
            {children}
        </div>
    );
};

export default LeftImageLayout;
