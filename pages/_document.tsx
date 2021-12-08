import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        property="og:description"
                        content="The first decentralized protocol for businesses to build authentic trust with their customers."
                    />
                    <meta property="og:title" content="Lum Network" />
                    <meta property="og:url" content="https://lum.network" />
                    <meta property="og:image" content="/assets/images/og1200x630.jpg" />
                    <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/assets/images/logo192.png" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
