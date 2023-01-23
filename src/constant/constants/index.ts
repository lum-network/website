const isTestEnv = (): boolean => {
    return window.location.href.includes('localhost') || window.location.href.includes('testnet');
};

export const LUM_DOMAIN = isTestEnv() ? 'testnet.lum.network' : 'lum.network';
export const LUM_NETWORK_DOCUMENTATION = 'https://docs.lum.network';
export const LUM_EXPLORER_GITHUB = 'https://github.com/lum-network/explorer';
export const LUM_WALLET_GITHUB = 'https://github.com/lum-network/wallet';
export const LUM_WALLET = `https://wallet.${LUM_DOMAIN}`;
export const LUM_EXPLORER = `https://explorer.${LUM_DOMAIN}`;
export const LUM_DFRACT = `https://dfract.${LUM_DOMAIN}`;
export const LUM_NETWORK_GITHUB = 'https://github.com/lum-network';
export const LUM_DISCORD = 'https://discord.gg/KwyVvnBcXF';
export const LUM_TELEGRAM = 'https://t.me/lum_network';
export const LUM_TWITTER = 'https://twitter.com/lum_network';
export const LUM_FACEBOOK = 'https://www.facebook.com/lum.network';
export const LUM_MEDIUM = 'https://medium.com/lum-network';
export const LUM_WHITELIST_TYPEFORM = 'https://lum-network.typeform.com/whitelist';
export const LUM_NETWORK_WHITEPAPER = '/whitepaper.pdf';
export const LUM_OSMOSIS = 'https://app.osmosis.zone/?from=ATOM&to=LUM';
export const LUM_OSMOSIS_LBP_ARTICLE =
    'https://medium.com/lum-network/participate-to-lum-liquidity-pool-2-2-d8af19e94a21';
export const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';
export const SKR_URL = 'https://rwd.skeepers.io';
export const MIN_LARGE_DEVICE_WIDTH = 992;
export const MAX_PHONE_DEVICE_WIDTH = 640;
export const IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const IS_IOS =
    /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

export interface Article {
    title: string;
    logo: string | null;
    link: string;
}

export const ARTICLES: Article[] = [
    {
        title: 'How Lum will be soon the universal reward token?',
        link: 'https://google.com',
        logo: null,
    },
    {
        title: 'How Lum will be soon the universal reward token 2?',
        link: 'https://google.com',
        logo: null,
    },
    {
        title: 'How Lum will be soon the universal reward token 2?',
        link: 'https://google.com',
        logo: null,
    },
    {
        title: 'How Lum will be soon the universal reward token 2?',
        link: 'https://google.com',
        logo: null,
    },
    {
        title: 'How Lum will be soon the universal reward token 2?',
        link: 'https://google.com',
        logo: null,
    },
    {
        title: 'How Lum will be soon the universal reward token 2?',
        link: 'https://google.com',
        logo: null,
    },
];

export const CHAIN_BRIDGE_URL = process.env.REACT_APP_CHAIN_BRIDGE_URL || '';
export const NEWSLETTER_MAILJET_URL = 'https://0tyjr.mjt.lu/wgt/0tyjr/02x/form?c=3c33fa8d';