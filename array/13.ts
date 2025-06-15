{
    function longestCommonPrefix(strs: string[]): string {
        if (strs.length === 0) return "";
        let i: number = 1;
        let str: string = ''
        while (1) {
            if (i > strs[0].length) break;
            let temp: string = strs[0].slice(0, i)
            let allMatch: boolean = true;
            for (const num of strs) {
                if (num.slice(0, i) != temp) {
                    allMatch = false;
                    break;
                }
            }

            if (!allMatch) {
                return str;
            } else {
                str = temp
                i++;
            }

        }

        return strs[0];
    };

    console.log(longestCommonPrefix([""]))
}