import Assets from 'assets';
import React from 'react';
import RightLayout from './RightLayout';

interface Props {
    image?: string;
    children: React.ReactNode;
    alignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    contentAlignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    className?: string;
}

const RightImageLayout = (props: Props): JSX.Element => {
    const { image, children, className, alignment = 'center', contentAlignment = 'center' } = props;
    return (
        <RightLayout
            className={className}
            contentAlignment={contentAlignment}
            leftContent={children}
            alignment={alignment}
            rightContent={
                <div className="d-flex align-items-center justify-content-center">
                    <img src={Assets.images.sectionImageBg} alt="" />
                    <img src={image} alt="" className="position-absolute" />
                </div>
            }
        />
    );
};

export default RightImageLayout;
