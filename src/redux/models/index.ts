import { Models } from '@rematch/core';
import { stats } from './stats';

export interface RootModel extends Models<RootModel> {
    stats: typeof stats;
}

export const reduxModels: RootModel = {
    stats,
};

export default reduxModels;
