import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import './ResponsiveImage.scss';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    onLoad?: () => void;
}

const ResponsiveImage = ({ className, onLoad, ...props }: Props): JSX.Element => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`image-container ${className}`}>
            {!loaded && <Skeleton />}
            <img
                onLoad={() => {
                    setLoaded(true);
                    if (onLoad) {
                        onLoad();
                    }
                }}
                {...props}
                className="image"
            />
        </div>
    );
};

export default ResponsiveImage;
