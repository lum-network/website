import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class MetadataModel {
    @Expose({ name: 'has_next_page' })
    hasNextPage?: boolean;

    @Expose({ name: 'has_previous_page' })
    hasPreviousPage?: boolean;

    @Expose({ name: 'items_count' })
    itemsCount?: number;

    @Expose({ name: 'items_total' })
    itemsTotal?: number;

    limit?: number;

    page?: number;

    @Expose({ name: 'pages_total' })
    pagesTotal?: number;
}

export class AssetModel {
    apy?: number;

    supply?: number;

    totalValueUsd?: number;

    unitPriceUsd?: number;
}

export class BlocksModel {
    @Expose({ name: 'chain_id' })
    chainId?: string;

    hash?: string;

    height?: string;

    time?: string;

    @Expose({ name: 'tx_count' })
    txCount?: string;

    @Expose({ name: 'operator_address' })
    operatorAddress?: string;
}

export class KpiModel {
    @Expose()
    transactions?: {
        total: number;
    };

    @Expose()
    blocks?: {
        total: number;
    };
}

export class LumModel {
    @Expose()
    price?: number;

    @Expose()
    denom?: string;

    @Expose()
    symbol?: string;

    @Expose()
    liquidity?: number;

    @Expose({ name: 'volume_24h' })
    volume24h?: number;

    @Expose()
    name?: number;

    @Expose({ name: 'previous_day_price' })
    previousDayPrice?: number;
}

export class CoinModel {
    denom = '';

    @Transform((param) => {
        if (!param || !param.value) {
            return '';
        }

        return param.value.toString();
    })
    amount = '';
}

export interface LumStatsModel {
    txs: number | null;
    blocks: number | null;
    blockTime: number | null;
    marketCap: number | null;
    apr: number | null;
}

export interface DfractStatsModel {
    apy: number | null;
    supply: number | null;
    totalValueUsd: number | null;
    unitPriceUsd: number | null;
}

export interface SkrStatsModel {
    countries: number | null;
    reviews: number | null;
    brands: number | null;
}

export interface ToolsStatsModel {
    wallet: {
        forks: number | null;
        stars: number | null;
    };
    explorer: {
        forks: number | null;
        stars: number | null;
    };
    openSourceRepos: number | null;
    commits: number;
}