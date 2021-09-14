const isTestEnv = (): boolean => {
    return window.location.href.includes('localhost') || window.location.href.includes('testnet');
};

export const LUM_DOMAIN = isTestEnv() ? 'testnet.lum.network' : 'lum.network';
export const LUM_NETWORK_DOCUMENTATION = 'https://lum-network.gitbook.io';
export const LUM_EXPLORER_GITHUB = 'https://github.com/lum-network/explorer';
export const LUM_WALLET_GITHUB = 'https://github.com/lum-network/wallet';
export const LUM_WALLET = `https://wallet.${LUM_DOMAIN}`;
export const LUM_EXPLORER = `https://explorer.${LUM_DOMAIN}`;
export const LUM_NETWORK_GITHUB = 'https://github.com/lum-network';
export const LUM_TELEGRAM = 'https://t.me/lum_network';
export const LUM_TWITTER = 'https://twitter.com/lum_network';
export const LUM_FACEBOOK = 'https://www.facebook.com/lum.network';
export const LUM_NETWORK_WHITEPAPER = '/whitepaper.pdf';
export const MIN_LARGE_DEVICE_WIDTH = 992;
// @ts-ignore
export const IS_FIREFOX = typeof InstallTrigger !== 'undefined';
export const IS_SAFARI =
    // @ts-ignore
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
        // @ts-ignore
    })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
