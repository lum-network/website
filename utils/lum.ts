import { LumClient } from '@lum-network/sdk-javascript';

class Lum {
    private static instance: Lum | null = null;
    private static client: LumClient | null = null;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static getInstance(): Lum {
        if (!this.instance) {
            this.instance = new Lum();
            LumClient.connect('https://node0.testnet.lum.network/rpc').then((client) => {
                this.client = client;
            });
        }

        return this.instance;
    }

    getNode = async () => {
        if (!Lum.client) {
            return null;
        }

        const result = await Lum.client.tmClient.health();

        return result;
    };
}

export default Lum.getInstance();
