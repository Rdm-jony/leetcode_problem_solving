function topKFrequent(nums: number[], k: number): number[] {
    const map: Record<string, number> = {}

    for (const element of nums) {
        if (!map[element]) {
            map[element] = 1
        } else {
            map[element] += 1
        }
    }
    const ascSort = Object.entries(map).sort((b, a) => a[1] - b[1])
    return ascSort.slice(0,k).map(i=>Number(i[0]))
};
topKFrequent([1, 1, 1, 2, 2, 3], 2)