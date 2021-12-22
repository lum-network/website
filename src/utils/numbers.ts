export const getDifferencePercentage = (nb1: number, nb2: number): number => {
    if (nb1 === 0) {
        return 0;
    }

    let sign = 1;

    if (nb1 > nb2) {
        sign = -1;
    }

    return (Math.abs(nb1 - nb2) / nb1) * sign;
};
