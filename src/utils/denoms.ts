export const getNormalDenom = (denom: string): string => {
    if (denom.startsWith('u')) {
        denom = denom.slice(1);
    }

    return denom;
};