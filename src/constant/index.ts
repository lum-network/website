export const LUM_NETWORK_DOCUMENTATION = 'https://lum-network.gitbook.io';
export const LUM_EXPLORER_GITHUB = 'https://github.com/lum-network/explorer';
export const LUM_WALLET_GITHUB = 'https://github.com/lum-network/wallet';
export const LUM_WALLET = 'https://wallet.lum.network';
export const LUM_EXPLORER = 'https://explorer.lum.network';
export const LUM_NETWORK_GITHUB = 'https://github.com/lum-network';
export const LUM_TELEGRAM = '';
export const LUM_TWITTER = '';
export const LUM_FACEBOOK = '';
export const LUM_NETWORK_WHITEPAPER = '/whitepaper.pdf';
export const LUM_TYPEFORM = 'https://sarah2814.typeform.com/to/lHKll5Dy';
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
