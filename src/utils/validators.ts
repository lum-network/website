import { ValidatorsType } from "constant";
import { ValidatorModel } from "models";

export const calculateTotalVotingPower = (validators: ValidatorModel[]): number => {
    if (!validators || !validators.length) {
        return 0;
    }

    return validators.reduce((acc, validator) => acc + parseFloat(validator.status === ValidatorsType.ACTIVE ? validator.tokens || '0' : '0'), 0);
};
