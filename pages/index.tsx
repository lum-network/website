import React, { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Landing, Mainnet } from '../sections';
import { ProgressBar } from '../components';

import { AssetsSrc } from '../constant';
import NextImage from 'next/image';

import './index.module.scss';
import Script from 'next/script';

gsap.config({ nullTargetWarn: false });
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Loader = ({ progress, loading }: { progress: number; loading: boolean }): JSX.Element => {
    return (
        <div id="loader" className={`d-flex align-items-center justify-content-center ${!loading ? 'slow-hide' : ''}`}>
            <div className="text-center" style={{ marginTop: '-5%' }}>
                <NextImage src={AssetsSrc.images.lumNetworkLogoDark} width="235" height="38" />
                <ProgressBar progress={progress} containerClassName="loading-bar-container" />
            </div>
        </div>
    );
};

const App = (): JSX.Element => {
    const [progress, setProgress] = useState<number>(5);
    const [loading, setLoading] = useState<boolean>(true);
    const loadingStartsAt = useRef<Date>(new Date());

    useEffect(() => {
        if (progress >= 100) {
            const elapsed = new Date().getTime() - loadingStartsAt.current.getTime();
            setTimeout(
                () => {
                    setLoading(false);
                },
                elapsed >= 1500 ? 500 : 1500 - elapsed,
            );
        }
    }, [progress, setLoading]);

    useEffect(() => {
        const allSrcs: string[] = [];
        for (const [item] of Object.entries(AssetsSrc.images)) {
            allSrcs.push(item[1]);
        }
        for (const [item] of Object.entries(AssetsSrc.partners)) {
            allSrcs.push(item[1]);
        }

        const inc = Math.ceil(95.0 / allSrcs.length);
        for (const src of allSrcs) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const elapsed = new Date().getTime() - loadingStartsAt.current.getTime();
                setTimeout(
                    () => {
                        setProgress((p) => p + inc);
                    },
                    elapsed >= 500 ? 0 : 500 - elapsed + Math.random() * 500,
                );
            };
        }
    }, []);

    return (
        <main>
            <Loader progress={progress} loading={loading} />
            {!loading ? (
                <>
                    <Mainnet />
                </>
            ) : null}
        </main>
    );
};

export default App;
