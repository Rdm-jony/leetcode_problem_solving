function intersection(nums1: number[], nums2: number[]): number[] {
    let map:Record<string,number>={}
    for (const element of nums1) {
        if(!map[element] && nums2.includes(element)){
            map[element]=element
        }
    }
    return Object.values(map)
};

console.log(intersection([1,2,2,1],[2,2]))