function numJewelsInStones(jewels: string, stones: string): number {
    const array = jewels.split("")
    let count = 0
    for (const element of stones.split("")) {
        if (array.includes(element)) {
            count++;
        }
    }
    return count;
};

console.log(numJewelsInStones("z","ZZZ"))