import React from 'react';
import Assets from 'assets';
import Layout from './Layout';

interface Props {
    image?: string;
    children: React.ReactNode;
    alignment?: string;
    contentAlignment?: string;
    contentJustification?: string;
    contentClassName?: string;
    className?: string;
}

const LeftImageLayout = (props: Props): JSX.Element => {
    const { image, children, className, alignment, contentAlignment, contentJustification, contentClassName } = props;
    return (
        <Layout
            alignment={alignment}
            contentAlignment={contentAlignment}
            contentJustification={contentJustification}
            className={className}
            contentClassName={`flex-column flex-lg-row ${contentClassName}`}
            leftContent={
                <div className="d-flex align-items-center justify-content-center mb-5 mb-lg-0">
                    <img src={Assets.images.sectionImageBg} alt="" className="section-image-bg" />
                    <img src={image} alt="" className="position-absolute section-image" />
                </div>
            }
            rightContent={children}
        />
    );
};

export default LeftImageLayout;
