function isHappy(n: number): boolean {
    const seen = new Set<number>();
    let number = n
    while (number != 1) {
        const arrayOfNumber = number.toString().split("")
        let sum = 0;
        for (const element of arrayOfNumber) {
            sum += parseInt(element) ** 2
        }
        if (seen.has(sum)) {
            return false
        }else{
            seen.add(sum)
        }
        number = sum

    }
    return true
};
console.log(isHappy(19))