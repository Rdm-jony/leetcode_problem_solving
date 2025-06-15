function findLHS(nums: number[]): number {
    let map: Record<string, number> = {}
    let length = 0
    for (const element of nums) {
        if (map[element]) {
            map[element] += 1
        } else {
            map[element] = 1
        }
    }

    for (const key in map) {
        const num=parseInt(key)
        
        if(map.hasOwnProperty(num)){
            if(map[num+1]+map[num]>length){
                length=map[num+1]+map[num]
            }
        }
    }
    return length
};

findLHS([1, 3, 2, 3])