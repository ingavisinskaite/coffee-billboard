export const isCoffeeFormValid = (values) => {
    if (values[0].length > 0 && values[1].length > 0 && isCoffeePriceValid(values[2])) {
        return true;
    } else {
        return false;
    }
}

const isCoffeePriceValid = (price) => {
    price = price.toString();
    const priceRegex = new RegExp(/^([\d]{1,2}){1}([.]{1}[\d]{1,2}){0,1}$/);
    return price !== '0' && priceRegex.test(price);
}