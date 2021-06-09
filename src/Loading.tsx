import React, { useEffect, useState } from 'react';

import Assets from 'assets';
import { ProgressBar } from 'components';

const Loading = (props: { callback: () => void }): JSX.Element => {
    const [progress, setProgress] = useState(0);
    const [, setIntervalValue] = useState(0);

    const { callback } = props;

    useEffect(() => {
        const interval = setInterval(() => {
            setIntervalValue((intervalVal) => {
                const newIntervalVal = intervalVal + 500;

                const newProgress = (newIntervalVal / 3000) * 100;

                setProgress(newProgress);
                return newIntervalVal;
            });
        }, 500);
        if (progress > 100) {
            callback();
        }

        return () => clearInterval(interval);
    }, [callback, progress]);

    return (
        <div className="vh-100 vw-100 d-flex align-items-center justify-content-center loading-container">
            <img src={Assets.images.loadingBackground} className="position-absolute" />
            <div className="text-center">
                <img src={Assets.images.lumNetworkLogo} width="235" height="38" />
                <ProgressBar progress={progress} containerClassName="loading-bar-container mt-3" />
            </div>
        </div>
    );
};

export default Loading;
