function myAtoi(s: string): number {
    const text = s.trim()
    let number = ""

    for (let i = 0; i < text.length; i++) {
        if (i === 0 && (text[i] === '-' || text[i] === '+')) {
            number += text[i];
        } else if (/\d/.test(text[i])) {
            number += text[i];
        } else {
            break; // first non-digit, stop parsing
        }
    }
    if (number === '' || number === '+' || number === '-') {
        return 0;
    }

    const num = parseInt("0666");

    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;

    return num;
};
console.log(myAtoi("+056"))