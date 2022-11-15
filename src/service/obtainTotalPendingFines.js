export function obtainTotalPendingFines(fines) {
    let total = 0

    fines.forEach(fine => {
        total = total + fine.finalValue
        return total
    });

    return total
}