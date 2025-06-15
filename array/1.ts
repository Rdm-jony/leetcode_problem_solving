const nums: number[] = [3,3]

const target: number = 6

const tergetIndex=(nums:number[],target:number)=>{
    const result:number[]=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                result.push(i,j)
            }
        }
    }
    return result
}
console.log(tergetIndex(nums,target))


