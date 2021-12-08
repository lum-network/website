import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/_main.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Lum Network</title>
            </Head>

            <Script src="/__/firebase/8.10.0/firebase-app.js" />
            <Script src="/__/firebase/8.10.0/firebase-analytics.js" />
            <Script src="/__/firebase/init.js" />
            <Script type="text/javascript" src="/assets/scripts/dsplugin.min.js" />
            <Script type="text/javascript" src="/assets/scripts/stplugin.min.js" />
            <Script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js" />

            <Component {...pageProps} />
        </>
    );
};

export default appWithTranslation(MyApp);
