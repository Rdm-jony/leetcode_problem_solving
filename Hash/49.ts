function groupAnagrams(strs: string[]): string[][] {
    const map: Record<string, string[]> = {};
    for (const element of strs) {
        const sorted = element.split("").sort().join("")
        if(!map[sorted]){
            map[sorted]=[]
        }
        map[sorted].push(element)
    }
    return Object.values(map)
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])