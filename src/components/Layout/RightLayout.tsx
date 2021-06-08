import React from 'react';

import './style/Layouts.scss';

interface Props {
    alignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    contentAlignment?: 'start' | 'end' | 'baseline' | 'center' | 'stretch';
    contentJustification?: 'start' | 'end' | 'between' | 'around' | 'evenly';
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    className?: string;
}

const RightLayout = (props: Props): JSX.Element => {
    const { className, alignment = 'center', contentAlignment = 'center', contentJustification = 'between' } = props;
    return (
        <div className={`d-flex flex-md-row flex-column layout ${className}`}>
            <div
                className={`d-flex w-100 justify-content-${contentJustification} align-self-${alignment} align-items-${contentAlignment}`}
            >
                {props.leftContent}
                {props.rightContent}
            </div>
        </div>
    );
};

export default RightLayout;
