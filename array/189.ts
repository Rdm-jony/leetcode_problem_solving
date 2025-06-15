{
    function rotate(nums: number[], k: number): void {
        let result: number[] = []
        k = k % nums.length;
        for (let i = nums.length - k; i < nums.length; i++) {
            result.push(nums[i])
        }
        for (let i = 0; i < nums.length - k; i++) {
            result.push(nums[i])
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] = result[i]
        }
        console.log(nums)
    };
    rotate([1, 2, 3, 4, 5, 6, 7],9)
}