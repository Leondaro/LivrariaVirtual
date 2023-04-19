import priceFormat from "./PriceFormat";

const calcDiscount = (sale, price) => {
    sale = parseFloat(sale, 2);
    price = parseFloat(price, 2);
    let result = ((100-sale)/100)*price;

    return priceFormat(result);
}

export default calcDiscount;