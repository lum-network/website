export { default as AssetsSrc } from './images';

const isTestEnv = (): boolean => {
    if (typeof window !== 'undefined') {
        return window.location.href.includes('localhost') || window.location.href.includes('testnet');
    }

    return false;
};

export const LUM_DOMAIN = isTestEnv() ? 'testnet.lum.network' : 'lum.network';
export const LUM_NETWORK_DOCUMENTATION = 'https://docs.lum.network';
export const LUM_EXPLORER_GITHUB = 'https://github.com/lum-network/explorer';
export const LUM_WALLET_GITHUB = 'https://github.com/lum-network/wallet';
export const LUM_WALLET = `https://wallet.${LUM_DOMAIN}`;
export const LUM_EXPLORER = `https://explorer.${LUM_DOMAIN}`;
export const LUM_NETWORK_GITHUB = 'https://github.com/lum-network';
export const LUM_DISCORD = 'https://discord.gg/KwyVvnBcXF';
export const LUM_TELEGRAM = 'https://t.me/lum_network';
export const LUM_TWITTER = 'https://twitter.com/lum_network';
export const LUM_FACEBOOK = 'https://www.facebook.com/lum.network';
export const LUM_MEDIUM = 'https://medium.com/lum-network';
export const LUM_WHITELIST_TYPEFORM = 'https://lum-network.typeform.com/whitelist';
export const LUM_NETWORK_WHITEPAPER = '/whitepaper.pdf';
export const MIN_LARGE_DEVICE_WIDTH = 992;
export const MAX_PHONE_DEVICE_WIDTH = 640;
// @ts-ignore
export const IS_FIREFOX = typeof InstallTrigger !== 'undefined';
export const IS_SAFARI =
    // @ts-ignore
    typeof window !== 'undefined'
        ? /constructor/i.test(window.HTMLElement.toString()) ||
          (function (p) {
              return p.toString() === '[object SafariRemoteNotification]';
              // @ts-ignore
          })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification))
        : false;
export const IS_IOS =
    typeof navigator !== 'undefined'
        ? /iPad|iPhone|iPod/.test(navigator.platform) ||
          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
        : false;

export const MAINNET_LAUNCH_DATE = new Date(2021, 11, 14);