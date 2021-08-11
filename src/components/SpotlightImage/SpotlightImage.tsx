import React from 'react';

import './styles/SpotlightImage.scss';

interface Props {
    className?: string;
    imgSrc: string;
    imgAlt: string;
}

interface DotProps {
    id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const Dot = (props: DotProps): JSX.Element => {
    return (
        <div className={`dot dot-${props.id}`}>
            <div className="dot-inner-layer-1" />
            <div className="dot-inner-layer-2" />
            <div className="dot-inner-layer-3" />
        </div>
    );
};

const SpotlightImage = (props: Props): JSX.Element => {
    return (
        <div className={`spotlight-img-container ${props.className || ''}`}>
            <Dot id={1} />
            <Dot id={2} />
            <Dot id={3} />
            <Dot id={4} />
            <Dot id={5} />
            <Dot id={6} />
            <Dot id={7} />
            <Dot id={8} />
            <div className="spotlight">
                <div className="spotlight-inner" />
            </div>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
    );
};

export default SpotlightImage;
