import { createModel } from '@rematch/core';
import { RootModel } from './index';
import { GithubUtils, LumApi } from 'utils';
import { CMStatsModel, LumStatsModel, ToolsStatsModel } from 'models';

interface StatsState {
    lum: LumStatsModel;
    cm: CMStatsModel;
    tools: ToolsStatsModel;
}

export const stats = createModel<RootModel>()({
    state: {
        lum: {
            txs: null,
            blocks: null,
            blockTime: null,
            marketCap: null,
        },
        cm: {
            tvl: null,
            prizes: null,
            depositors: null,
            atomWon: null,
        },
        tools: {
            forks: null,
            stars: null,
            commits: null,
            openSourceRepos: null,
        },
    } as StatsState,
    reducers: {
        SET_LUM_STATS: (state, payload: LumStatsModel) => ({
            ...state,
            lum: {
                txs: payload.txs,
                blocks: payload.blocks,
                blockTime: payload.blockTime,
                marketCap: payload.marketCap,
                apr: payload.apr,
            },
        }),
        SET_CM_STATS: (state, payload: CMStatsModel) => ({
            ...state,
            cm: {
                tvl: payload.tvl,
                prizes: payload.prizes,
                depositors: payload.depositors,
                atomWon: payload.atomWon,
            },
        }),
        SET_TOOLS_STATS: (state, payload: ToolsStatsModel) => ({
            ...state,
            tools: {
                stars: payload.stars,
                forks: payload.forks,
                openSourceRepos: payload.openSourceRepos,
                commits: payload.commits,
            },
        })
    },
    effects: (dispatch) => ({
        async getLumStats() {
            const lumStats = await LumApi.getLumStats();

            dispatch.stats.SET_LUM_STATS(lumStats);
        },
        async getToolsStats() {
            const toolsStats = await GithubUtils.getReposInfos();

            dispatch.stats.SET_TOOLS_STATS(toolsStats);
        },
        async getCmStats() {
            const cmStats = await LumApi.getCmStats();

            dispatch.stats.SET_CM_STATS(cmStats);
        },
    }),
});
