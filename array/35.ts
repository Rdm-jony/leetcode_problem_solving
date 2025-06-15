{
    function searchInsert(nums: number[], target: number): number {
        
        for (let i = 0; i < nums.length; i++) {
            
            if (nums[i] == target) {
                return  i;
            }
            if ((nums[i] < target && target < nums[i + 1])) {
                return i+1;
            }
            if (target > nums[nums.length - 1]) {
                return nums.length
            }


        }
        return 0;
    };
    
    
}