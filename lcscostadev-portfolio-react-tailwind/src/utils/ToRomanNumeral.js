export const toRomanNumeral = (num) => {
    const romanNumeralMap = [
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    romanNumeralMap.forEach((item) => {
        while (num >= item.value) {
            result += item.symbol;
            num -= item.value;
        }
    });

    return result;
};