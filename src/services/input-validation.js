export const inputValidation = (values) => {
    if (values[0].length > 0 && values[1].length > 0 && values[2] > 0) {
        return true;
    } else {
        return false;
    }
}