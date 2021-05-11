import React from 'react';
import Assets from 'assets';
import LeftLayout from './LeftLayout';

interface Props {
    image: string;
    children: React.ReactNode;
    alignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    contentAlignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    className?: string;
}

const LeftImageLayout = (props: Props): JSX.Element => {
    const { image, children, className, alignment = 'center', contentAlignment = 'center' } = props;
    return (
        <LeftLayout
            alignment={alignment}
            contentAlignment={contentAlignment}
            className={className}
            leftContent={
                <div className="d-flex align-items-center justify-content-center">
                    <img src={Assets.images.sectionImageBg} alt="" className="" />
                    <img src={image} alt="" className="position-absolute" />
                </div>
            }
            rightContent={children}
        />
    );
};

export default LeftImageLayout;
