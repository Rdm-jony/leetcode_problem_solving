function isPalindrome(x: number): boolean {
    const y=x.toString().split("").reverse().join("")
    console.log(y)
    if(y==x.toString()){
        return true;
    }
    return false
};
console.log(isPalindrome(10))