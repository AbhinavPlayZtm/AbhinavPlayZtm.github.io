import {
    addErrorToValidationDataAndKeepMessage
} from './validityUtils';
const DEFAULT_STEP = 1;
const valueWithinStepRange = (value, step) => {
    const decimalsCount = Number((Math.log(1 / step) / Math.log(10)).toFixed());
    const valueWithStepPrecision = value.toFixed(decimalsCount);
    return value === Number(valueWithStepPrecision);
};
export const validateStepMismatch = (props, validationData) => {
    const {
        value
    } = props;
    const step = props.step && props.step > 0 ? props.step : DEFAULT_STEP;
    if (!value) {
        return validationData;
    }
    return valueWithinStepRange(Number(value), step) ?
        validationData :
        addErrorToValidationDataAndKeepMessage(validationData, 'stepMismatch');
};
//# sourceMappingURL=validateStepMismatch.js.map