import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { Hooks } from 'utils';
import { MIN_LARGE_DEVICE_WIDTH } from 'constant';

import './styles/SpotlightImage.scss';

interface Props {
    beamSize?: number;
    direction?: 1 | -1;
    uid: string;
    className?: string;
    imgSrc: string;
    imgAlt: string;
}

interface DotProps {
    uid: string;
    id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const Dot = (props: DotProps): JSX.Element => {
    return (
        <div className={`dot-wrapper dot-wrapper-${props.uid} dot-wrapper-id-${props.id}`}>
            <div className={`dot dot-${props.id}`}>
                <div className="dot-inner-layer-1" />
                <div className="dot-inner-layer-2" />
                <div className="dot-inner-layer-3" />
            </div>
        </div>
    );
};

const SpotlightImage = (props: Props): JSX.Element => {
    const { scroll } = useLocomotiveScroll();
    const { width } = Hooks.useWindowSize();
    const [showLights, setShowLights] = useState<boolean>(true);

    const spotlightRef = useRef<HTMLDivElement>(null);
    const spotlightInnerRef = useRef<HTMLDivElement>(null);
    const direction = props.direction || 1;
    const beamSize = props.beamSize || 1;

    useEffect(() => {
        const show = width >= MIN_LARGE_DEVICE_WIDTH;
        if (show !== showLights) {
            setShowLights(show);
        }
    }, [showLights, width]);

    useEffect(() => {
        if (scroll) {
            scroll.on('call', (callId: string, way: string, obj: HTMLElement) => {
                if (callId === 'spotlight-call' && way === 'enter' && obj.id === props.uid) {
                    const dot1 = document.getElementsByClassName(`dot-wrapper-${props.uid} dot-wrapper-id-1`);
                    if (dot1.length > 0 && dot1[0].className.includes('rotate')) {
                        return;
                    }
                    for (let i = 1; i <= 8; i++) {
                        gsap.timeline()
                            .set(`.dot-wrapper-${props.uid}.dot-wrapper-id-${i}`, {
                                className: `rotate dot-wrapper dot-wrapper-${props.uid} dot-wrapper-id-${i}`,
                            })
                            .to(`.dot-wrapper-${props.uid}.dot-wrapper-id-${i}`, {
                                duration: 2,
                                delay: (8 - i) / 10,
                                motionPath: {
                                    path: [
                                        { x: direction * -1200, y: -200 },
                                        { x: direction * -800, y: 200 },
                                        { x: direction * -400, y: -200 },
                                        { x: 0, y: 0 },
                                    ],
                                    type: 'power4',
                                },
                            });
                    }
                }
            });
            scroll.on('scroll', (args: any) => {
                if (
                    typeof args.currentElements[props.uid] === 'object' &&
                    spotlightRef.current &&
                    spotlightInnerRef.current &&
                    showLights
                ) {
                    const progress = args.currentElements[props.uid].progress;
                    if (direction === 1) {
                        spotlightRef.current.style.transform = `rotateZ(${
                            -20 + 30 * Math.min(progress * 2, 1) * beamSize
                        }deg)`;
                        spotlightRef.current.style.perspective = `${330 + Math.min(progress * 2, 1) * 30}px`;
                        spotlightInnerRef.current.style.backgroundImage = `linear-gradient(90deg, rgba(255, 255, 255, ${
                            0.25 + 0.75 * Math.min(1, progress * 2)
                        }) 3.25%, rgba(255, 255, 255, 0) ${80 + 5 * Math.min(1, progress * 2)}%)`;
                        spotlightInnerRef.current.style.transform = `rotateY(-${
                            32 + Math.min(progress * 2, 1) * 15 * beamSize
                        }deg)`;
                    } else {
                        spotlightRef.current.style.transform = `rotateZ(${
                            -150 - 30 * Math.min(progress * 2, 1) * beamSize
                        }deg)`;
                        spotlightRef.current.style.perspective = `${330 + Math.min(progress * 2, 1) * 30}px`;
                        spotlightInnerRef.current.style.backgroundImage = `linear-gradient(90deg, rgba(255, 255, 255, ${
                            0.25 + 0.75 * Math.min(1, progress * 2)
                        }) 3.25%, rgba(255, 255, 255, 0) ${80 + 5 * Math.min(1, progress * 2)}%)`;
                        spotlightInnerRef.current.style.transform = `rotateY(-${
                            32 + Math.min(progress * 2, 1) * 15 * beamSize
                        }deg)`;
                    }
                }
            });
        }
    }, [props.uid, direction, beamSize, scroll, showLights]);

    return (
        <div
            data-scroll
            data-scroll-id={props.uid}
            data-scroll-call="spotlight-call"
            data-scroll-class="show"
            className={`spotlight-img-container ${direction === -1 ? 'reverse' : ''} ${props.className || ''}`}
        >
            <Dot uid={props.uid} id={1} />
            <Dot uid={props.uid} id={2} />
            <Dot uid={props.uid} id={3} />
            <Dot uid={props.uid} id={4} />
            <Dot uid={props.uid} id={5} />
            <Dot uid={props.uid} id={6} />
            <Dot uid={props.uid} id={7} />
            <Dot uid={props.uid} id={8} />
            <div className={`spotlight ${showLights ? '' : 'hide'}`} ref={spotlightRef}>
                <div className="spotlight-inner" ref={spotlightInnerRef} />
            </div>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
    );
};

export default SpotlightImage;
