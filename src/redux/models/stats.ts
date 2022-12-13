import { createModel } from '@rematch/core';
import { RootModel } from './index';
import { GithubUtils, LumApi } from 'utils';
import { DfractStatsModel, LumStatsModel, SkrStatsModel, ToolsStatsModel } from 'models';

interface StatsState {
    lum: LumStatsModel;
    dfr: DfractStatsModel;
    skr: SkrStatsModel;
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
        skr: {
            countries: null,
            reviews: null,
            brands: null,
        },
        dfr: {
            apy: null,
            supply: null,
            totalValueUsd: null,
            unitPriceUsd: null,
        },
        tools: {
            forks: null,
            stars: null,
            commits: null,
            openSourceRepos: null,
        },
    } as StatsState,
    reducers: {
        SET_DFR_STATS: (state, payload: DfractStatsModel) => ({
            ...state,
            dfr: {
                apy: payload.apy,
                supply: payload.supply,
                totalValueUsd: payload.totalValueUsd,
                unitPriceUsd: payload.unitPriceUsd,
            },
        }),
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
        SET_TOOLS_STATS: (state, payload: ToolsStatsModel) => ({
            ...state,
            tools: {
                stars: payload.stars,
                forks: payload.forks,
                openSourceRepos: payload.openSourceRepos,
                commits: payload.commits,
            },
        }),
        SET_SKR_STATS: (state, payload: SkrStatsModel) => ({
            ...state,
            skr: {
                countries: payload.countries,
                reviews: payload.reviews,
                brands: payload.brands,
            },
        }),
    },
    effects: (dispatch) => ({
        async getDfrStats() {
            const [dfrStats] = await LumApi.getDfractStats();

            dispatch.stats.SET_DFR_STATS({
                apy: dfrStats.find((item: any) => item.id === 'dfr_apy')?.value.apy,
                supply: dfrStats.find((item: any) => item.id === 'dfr_supply')?.value.supply,
                totalValueUsd: dfrStats.find((item: any) => item.id === 'dfr_total_value_usd')?.value.total_value_usd,
                unitPriceUsd: dfrStats.find((item: any) => item.id === 'dfr_unit_price_usd')?.value.unit_price_usd,
            });
        },
        async getLumStats() {
            const lumStats = await LumApi.getLumStats();

            dispatch.stats.SET_LUM_STATS(lumStats);
        },
        async getToolsStats() {
            const toolsStats = await GithubUtils.getReposInfos();

            dispatch.stats.SET_TOOLS_STATS(toolsStats);
        },
        async getSkrStats() {
            dispatch.stats.SET_SKR_STATS({
                countries: 63,
                brands: 900,
                reviews: 200000,
            });
        }
    }),
});
