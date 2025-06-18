function isIsomorphic(s: string, t: string): boolean {
    const mapBoth: Record<string, number[]> = { "s": [], "t": [] };
    const mapS: Record<string, number> = {};
    const mapT: Record<string, number> = {};
    let countS = 0;

    for (const element of s.split("")) {
        if (mapS.hasOwnProperty(element)) {
            mapBoth["s"].push(mapS[element]);
        } else {
            mapS[element] = countS;
            mapBoth["s"].push(countS);
        }
        countS++;
    }

    let countT = 0;
    for (const element of t.split("")) {
        if (mapT.hasOwnProperty(element)) {
            mapBoth["t"].push(mapT[element]);
        } else {
            mapT[element] = countT;
            mapBoth["t"].push(countT);
        }
        countT++;
    }
    for (let i = 0; i < mapBoth["s"].length; i++) {
        if (mapBoth["s"][i] !== mapBoth["t"][i]) return false;
    }

    return true;

}

const s = "abcdefghijklmnopqrstuvwxyzva";
const t = "abcdefghijklmnopqrstuvwxyzck";

console.log(isIsomorphic(s, t));
