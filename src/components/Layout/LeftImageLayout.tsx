import React from 'react';

import './styles/Layouts.scss';

interface Props {
    image: string;
    children: React.ReactNode;
}

const LeftImageLayout = (props: Props) => {
    const { image, children } = props;
    return (
        <div className="image-layout-container">
            <img src={image} alt="" />
            {children}
        </div>
    );
};

export default LeftImageLayout;
