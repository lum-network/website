// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Lum } from 'utils';

type Output = {
    message: string;
    result?: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Output>): Promise<void> => {
    const result = await Lum.getNode();

    if (!result) {
        res.status(400).json({ message: 'An error occurred' });
        return;
    }

    res.status(200).json({ result, message: 'Success' });
};

export default handler;
