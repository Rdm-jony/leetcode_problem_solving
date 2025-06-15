function lengthOfLastWord(s: string): number {
    const text=s.trim().split(" ")
    const lastword=text[text.length-1]
    return lastword.length
};
console.log(lengthOfLastWord("   fly me   to   the moon  "))