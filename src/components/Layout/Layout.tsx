import React from 'react';

import './style/Layouts.scss';

interface Props {
    alignment?: string;
    contentAlignment?: string;
    contentJustification?: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

const Layout = (props: Props): JSX.Element => {
    const {
        className,
        contentClassName,
        alignment = 'center',
        contentAlignment = 'center',
        contentJustification = 'between',
    } = props;

    return (
        <div className={`d-flex flex-md-row flex-column layout ${className}`}>
            <div
                className={`d-flex w-100 justify-content-${contentJustification} align-self-${alignment} align-items-${contentAlignment} ${contentClassName}`}
            >
                {props.leftContent}
                {props.rightContent}
            </div>
        </div>
    );
};

export default Layout;
