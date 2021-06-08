import Assets from 'assets';
import React from 'react';
import RightLayout from './RightLayout';

interface Props {
    image?: string;
    children: React.ReactNode;
    alignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    contentAlignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    contentJustification?: 'start' | 'end' | 'between' | 'around' | 'evenly';
    className?: string;
}

const RightImageLayout = (props: Props): JSX.Element => {
    const { image, children, className, alignment, contentAlignment, contentJustification } = props;
    return (
        <RightLayout
            className={className}
            contentAlignment={contentAlignment}
            contentJustification={contentJustification}
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
