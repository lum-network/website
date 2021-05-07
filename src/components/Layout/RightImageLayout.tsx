import Assets from 'assets';
import React from 'react';

import './styles/Layouts.scss';

interface Props {
    image: string;
    children: React.ReactNode;
}

const RightImageLayout = (props: Props): JSX.Element => {
    const { image, children } = props;
    return (
        <div className="d-flex flex-md-row flex-column image-layout-container">
            {children}
            <div className="d-flex align-items-center justify-content-center">
                <img src={Assets.images.sectionImageBg} alt="" />
                <img src={image} alt="" className="section-image" />
            </div>
        </div>
    );
};

export default RightImageLayout;
