function isPalindrome(s: string): boolean {
    let str = ""
    for (const c of s.split("")) {
        if (/^[A-Za-z0-9]$/.test(c)) {
            str += c
        }
    }
    const reverse = str.split("").reverse().join("")
    if (str.toLowerCase() == reverse.toLowerCase()) {
        return true
    }

    return false;
};
console.log(isPalindrome(""))