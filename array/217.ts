{
    function containsDuplicate(nums: number[]): boolean {
        const seen = new Set();
        let isDupli: boolean = false
        for (let num of nums) {
            if (seen.has(num)) {
                return isDupli = true
            } else {
                seen.add(num)
            }

        }
        return isDupli;
    };
    console.log(containsDuplicate([1, 2, 3, 1])
    )
}