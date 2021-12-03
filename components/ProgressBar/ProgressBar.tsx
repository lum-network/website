import React from 'react';

import styles from './styles/ProgressBar.module.scss';

interface Props {
    progress: number;
    containerClassName?: string;
    className?: string;
}

const ProgressBar = (props: Props): JSX.Element => {
    const { progress, containerClassName, className } = props;
    const p = Math.min(progress, 100);
    return (
        <div className={`${styles.progress} ${containerClassName}`}>
            <div
                className={`${styles.progress} ${className} rounded-pill`}
                style={{ width: `${p}%` }}
                role="progressbar"
                aria-valuenow={p}
                aria-valuemin={0}
                aria-valuemax={100}
            ></div>
        </div>
    );
};

export default ProgressBar;
