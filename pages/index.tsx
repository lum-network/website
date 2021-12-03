import React, { useEffect, useRef, useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NextImage from 'next/image';

import { Landing, Mainnet } from '../sections';
import { ProgressBar } from '../components';

import { AssetsSrc } from '../constant';

import styles from './app.module.scss';

const Loader = ({ progress, loading }: { progress: number; loading: boolean }): JSX.Element => {
    return (
        <div
            className={`${styles.loader} d-flex align-items-center justify-content-center ${
                !loading ? styles['slow-hide'] : ''
            }`}
        >
            <div className="text-center" style={{ marginTop: '-5%' }}>
                <NextImage src={AssetsSrc.images.lumNetworkLogoDark} width="235" height="38" />
                <ProgressBar progress={progress} containerClassName={styles['loading-bar-container']} />
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
        for (const item of Object.values(AssetsSrc.images)) {
            allSrcs.push(item);
        }
        for (const item of Object.values(AssetsSrc.partners)) {
            allSrcs.push(item);
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
                    <Landing />
                </>
            ) : null}
        </main>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale || 'en', ['common'])),
            // Will be passed to the page component as props
        },
    };
};

export default App;
