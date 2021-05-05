import React from 'react';

import './styles/Layouts.scss';

interface Props {
    image: string;
    children: React.ReactNode;
}

const RightImageLayout = (props: Props) => {
    const { image, children } = props;
    return (
        <div className="image-layout-container">
            {children}
            <img src={image} alt="" />
        </div>
    );
};

export default RightImageLayout;
