const priceFormat = (price) => {
    let stringPrice = Number((price).toFixed(2)).toString();

    const integerPart = stringPrice.split(".").shift();
    let decimalPart = stringPrice.split(".").pop();
    if (decimalPart.length < 2) decimalPart += "0";

    return integerPart+","+decimalPart;
}

export default priceFormat;