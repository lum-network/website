import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import './styles/SpotlightImage.scss';

interface Props {
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
    useEffect(() => {
        if (scroll) {
            gsap.registerPlugin(MotionPathPlugin);
            scroll.on('call', (callId: string, way: string, obj: HTMLElement) => {
                if (callId === 'spotlight-call' && way === 'enter' && obj.id === props.uid) {
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
                                        { x: -1200, y: -200 },
                                        { x: -800, y: 200 },
                                        { x: -400, y: -200 },
                                        { x: 0, y: 0 },
                                    ],
                                    type: 'power4',
                                },
                            });
                    }
                }
            });
        }
    }, [props.uid, scroll]);

    return (
        <div
            data-scroll
            data-scroll-id={props.uid}
            data-scroll-call="spotlight-call"
            data-scroll-class="show"
            className={`spotlight-img-container ${props.className || ''}`}
        >
            <Dot uid={props.uid} id={1} />
            <Dot uid={props.uid} id={2} />
            <Dot uid={props.uid} id={3} />
            <Dot uid={props.uid} id={4} />
            <Dot uid={props.uid} id={5} />
            <Dot uid={props.uid} id={6} />
            <Dot uid={props.uid} id={7} />
            <Dot uid={props.uid} id={8} />
            <div className="spotlight">
                <div className="spotlight-inner" />
            </div>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
    );
};

export default SpotlightImage;
