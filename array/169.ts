{
    function majorityElement(nums: number[]): number {
        const unique = new Set<number>()
        for (const num of nums) {
            unique.add(num)
        }
        let priority: number = nums[0]
        let temp_count: number = 0
        for (const num of unique) {
            let count: number = 0
            for (const num2 of nums) {
                if (num == num2) {
                    count++;
                }

            }
            if (count > temp_count) {
                priority =num
                temp_count=count
            }
        }

        return priority
    };
    majorityElement([3,1, 2,5,5,5,5,5, 3,1,1,1])

}