{
    function isAnagram(s: string, t: string): boolean {
        const sorted_s=s.split("").sort().join("")
        const sorted_t=t.split("").sort().join("")
        if(sorted_s==sorted_t){
            return true
        }else{
            return false
        }
    };
    isAnagram("anagram","nagaram")
}