import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

import Image from 'next/image';

import { Hooks } from 'utils';
import { MIN_LARGE_DEVICE_WIDTH, IS_SAFARI, IS_IOS } from 'constant';

import './styles/SpotlightImage.module.scss';

interface Props {
    beamSize?: number;
    direction?: 1 | -1;
    uid: string;
    className?: string;
    imgSrc: string;
    imgAlt: string;
    animated?: boolean;
    scrollTrigger: string;
    showLights?: boolean;
    children?: JSX.Element | JSX.Element[];
}

const SpotlightImage = (props: Props): JSX.Element => {
    const { width } = Hooks.useWindowSize();

    const tween = useRef<gsap.core.Tween>();
    const spotlightRef = useRef<HTMLDivElement>(null);
    const spotlightInnerRef = useRef<HTMLDivElement>(null);
    const direction = props.direction || 1;
    const beamSize = props.beamSize || 1;
    const showLights = props.showLights !== undefined ? props.showLights : true;

    const updateBeam = useCallback(
        (progress) => {
            if (progress === undefined) {
                return;
            }
            if (!props.animated) {
                progress = 1.0;
            }
            if (spotlightRef.current && spotlightInnerRef.current) {
                if (IS_SAFARI || IS_IOS) {
                    // Perspective is not interpreted the same way in Safari
                    spotlightRef.current.style.perspectiveOrigin = '560px center';
                }
                if (width < MIN_LARGE_DEVICE_WIDTH) {
                    spotlightRef.current.style.transform = `rotateZ(90deg)`;
                    spotlightRef.current.style.perspective = `${330 + Math.min(progress * 2, 1) * 30}px`;
                    spotlightInnerRef.current.style.backgroundImage = `linear-gradient(90deg, rgba(255, 255, 255, ${
                        0.45 + 0.75 * Math.min(1, progress * 2)
                    }) 30%, rgba(255, 255, 255, 0) ${80 + 5 * Math.min(1, progress * 2)}%)`;
                    spotlightInnerRef.current.style.transform = `rotateY(-${
                        32 + Math.min(progress * 2, 1) * 15 * beamSize
                    }deg)`;
                } else if (direction === 1) {
                    spotlightRef.current.style.transform = `rotateZ(${-20 + 30 * Math.min(progress, 1)}deg)`;
                    spotlightRef.current.style.perspective = `${330 + Math.min(progress * 2, 1) * 30}px`;
                    spotlightInnerRef.current.style.backgroundImage = `linear-gradient(90deg, rgba(255, 255, 255, ${
                        0.45 + 0.75 * Math.min(1, progress * 2)
                    }) 30%, rgba(255, 255, 255, 0) ${80 + 5 * Math.min(1, progress * 2)}%)`;
                    spotlightInnerRef.current.style.transform = `rotateY(-${
                        32 + Math.min(progress * 2, 1) * 15 * beamSize
                    }deg)`;
                } else {
                    spotlightRef.current.style.transform = `rotateZ(${-150 - 30 * Math.min(progress, 1)}deg)`;
                    spotlightRef.current.style.perspective = `${330 + Math.min(progress * 2, 1) * 30}px`;
                    spotlightInnerRef.current.style.backgroundImage = `linear-gradient(90deg, rgba(255, 255, 255, ${
                        0.45 + 0.75 * Math.min(1, progress * 2)
                    }) 30%, rgba(255, 255, 255, 0) ${80 + 5 * Math.min(1, progress * 2)}%)`;
                    spotlightInnerRef.current.style.transform = `rotateY(-${
                        32 + Math.min(progress * 2, 1) * 15 * beamSize
                    }deg)`;
                }
            }
        },
        [beamSize, direction, props.animated, width],
    );

    useEffect(() => {
        if (!tween.current) {
            tween.current = gsap.to(`spotlight-${props.uid}`, {
                scrollTrigger: {
                    trigger: `${props.scrollTrigger}`,
                    start: 'top 70%',
                    end: 'top 20%',
                    scrub: true,
                    onUpdate: ({ progress }) => {
                        updateBeam(progress);
                    },
                },
            });
        }
    }, [props.uid, props.scrollTrigger, updateBeam]);

    return (
        <div
            className={`spotlight-Image-container ${direction === -1 ? 'reverse' : ''} ${
                props.className || ''
            } spotlight-${props.uid}`}
        >
            <div className={`spotlight ${showLights ? '' : 'hide'}`} ref={spotlightRef}>
                <div className="spotlight-inner" ref={spotlightInnerRef} />
            </div>
            <Image src={props.imgSrc} alt={props.imgAlt} />
            {props.children}
        </div>
    );
};

export default SpotlightImage;
