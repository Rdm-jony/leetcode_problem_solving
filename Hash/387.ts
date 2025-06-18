function firstUniqChar(s: string): number {
    const map: Record<string, number> = {}
    const sArray = s.split("")
    for (const element of sArray) {
        if (map.hasOwnProperty(element)) {
            map[element] = map[element] + 1
        } else {
            map[element] = 1
        }
    }
    for (const key in map) {
        if(map[key]==1){
            return sArray.indexOf(key)
        }
    }
    return -1
};
console.log(
firstUniqChar("aabb"))