export function numberFormater(amount) {
    const numberFormat = new Intl.NumberFormat('es-CO');

    return numberFormat.format(amount)
}