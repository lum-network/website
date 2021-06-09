import React from 'react';

import './styles/ProgressBar.scss';

interface Props {
    progress: number;
    containerClassName?: string;
    className?: string;
}

const ProgressBar = (props: Props): JSX.Element => {
    const { progress, containerClassName, className } = props;
    return (
        <div className={`progress ${containerClassName}`}>
            <div
                className={`progress-bar ${className} rounded-pill`}
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
            ></div>
        </div>
    );
};

export default ProgressBar;
