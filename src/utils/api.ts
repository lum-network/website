import { LumConstants } from '@lum-network/sdk-javascript';
import { CHAIN_BRIDGE_URL } from 'constant';
import { BlocksModel, CoinModel, KpiModel, LumModel } from 'models';
import { NumbersUtils } from 'utils';
import HttpClient from './http';

class LumApi extends HttpClient {
    private static instance?: LumApi;

    private constructor() {
        super(CHAIN_BRIDGE_URL);
    }

    static getInstance(): LumApi {
        if (!this.instance) {
            this.instance = new LumApi();
        }

        return this.instance;
    }

    getDfractStats = async () => this.request<any>({ url: 'dfract/assets/dfr' }, null);

    getLumStats = async () => {
        const [[blocks], [kpi], [lum], [assets]] = await Promise.all([
            this.request<BlocksModel[]>({ url: 'blocks' }, BlocksModel),
            this.request<KpiModel>({ url: 'stats/kpi' }, KpiModel),
            this.request<LumModel>({ url: 'price' }, LumModel),
            this.request<CoinModel[]>({ url: 'assets' }, CoinModel),
        ]);

        const asset = assets.find((val: CoinModel) => val.denom === LumConstants.MicroLumDenom);

        let blockTime = 0;
        if (blocks.length > 30) {
            for (let i = 1; i <= 30; i++) {
                blockTime += Math.abs(
                    new Date((blocks[i] && blocks[i].time) || '').getTime() -
                        new Date((blocks[i - 1] && blocks[i - 1].time) || '').getTime(),
                );
            }
        }

        return {
            txs: kpi.transactions?.total || null,
            blocks: blocks[0]?.height ? Number(blocks[0].height) : null,
            blockTime: blockTime > 0 ? blockTime / 30 / 1000 : null,
            marketCap: asset ? NumbersUtils.convertUnitNumber(asset.amount) * (lum.price || 1) : null,
            apr: null,
        };
    };
}

export default LumApi.getInstance();
