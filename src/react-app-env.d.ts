/// <reference types="react-scripts" />
declare module '*.mp4' {
    const src: string;
    export default src;
}

declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_CHAIN_BRIDGE_URL: string;
        REACT_APP_GITHUB_TOKEN: string;
    }
}
