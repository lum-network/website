/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');

module.exports = {
    webpack: function (config) {
        //do stuff with the webpack config...
        config.resolve.fallback = {
            ...config.resolve.fallback,
            crypto: require.resolve('crypto-browserify'),
            path: require.resolve('path-browserify'),
            stream: require.resolve('stream-browserify'),
            querystring: require.resolve('querystring-es3'),
            buffer: require.resolve('buffer'),
            assert: require.resolve('minimalistic-assert'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            fs: require.resolve('browserify-fs'),
            util: require.resolve('util/'),
            //url: require.resolve('url'),
        };

        config.plugins = [
            ...config.plugins,
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
            }),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ];

        config.module.rules.push({
            test: /\.m?js$/,
            resolve: {
                fullySpecified: false,
            },
        });
        return config;
    },
};
