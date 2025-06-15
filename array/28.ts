function strStr(haystack: string, needle: string): number {
    if (needle === "") return -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            let allMatch = true
            let z = 0
            for (let j = i; j < i + needle.length; j++) {
                if (haystack[j] != needle[z]) {
                    allMatch = false
                    break;
                }
                z++;
            }
            if (allMatch == true) {
                return i;
            }
        }

    }
    return -1
};

console.log(strStr("coleetde", "leet"))