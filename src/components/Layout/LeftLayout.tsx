import React from 'react';

import './style/Layouts.scss';

interface Props {
    alignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    contentAlignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    className?: string;
}

const LeftLayout = (props: Props): JSX.Element => {
    const { className, alignment = 'center', contentAlignment = 'center' } = props;
    return (
        <div className={`d-flex flex-md-row flex-column layout ${className}`}>
            <div
                className={`d-flex w-100 justify-content-between align-self-${alignment} align-items-${contentAlignment}`}
            >
                {props.leftContent}
                {props.rightContent}
            </div>
        </div>
    );
};

export default LeftLayout;
