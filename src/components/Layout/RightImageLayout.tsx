import Assets from 'assets';
import React from 'react';
import Layout from './Layout';

interface Props {
    image?: string;
    children: React.ReactNode;
    alignment?: string;
    contentAlignment?: string;
    contentJustification?: string;
    className?: string;
}

const RightImageLayout = (props: Props): JSX.Element => {
    const { image, children, className, alignment, contentAlignment, contentJustification } = props;
    return (
        <Layout
            className={className}
            contentClassName="flex-column-reverse flex-lg-row"
            contentAlignment={contentAlignment}
            contentJustification={contentJustification}
            leftContent={children}
            alignment={alignment}
            rightContent={
                <div className="d-flex align-items-center justify-content-center mb-5 mb-lg-0">
                    <img src={Assets.images.sectionImageBg} alt="" className="section-image-bg" />
                    <img src={image} alt="" className="position-absolute section-image" />
                </div>
            }
        />
    );
};

export default RightImageLayout;
