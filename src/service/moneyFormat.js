export function moneyFormater(amount, digits) {
    const options = {
        minimumFractionDigits: digits ? digits : 0,
    };
    const moneyFormat = new Intl.NumberFormat('es-CO', options);

    return `$${moneyFormat.format(amount)}`
}