//brute force ............
// function dailyTemperatures(temperatures: number[]): number[] {
//     const stack: number[] = []
//     for (let i = 0; i < temperatures.length; i++) {
//         let sub = 0

//         for (let j = i+1; j < temperatures.length; j++) {
//             if (temperatures[i] < temperatures[j]) {
//                 sub = j - i
//                 break;
//             }

//         }
//         stack.push(sub)

//     }
//     return stack
// };


//stack........

function dailyTemperatures(temperatures: number[]): number[] {
    const stackIndex: number[] = []
    const result: number[] = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {

        while (stackIndex.length !=0 && temperatures[stackIndex[stackIndex.length - 1]] < temperatures[i]) {

                const pop = stackIndex.pop()
                result[pop!]=i-pop!

        }

        stackIndex.push(i)
    }
    return result
}


dailyTemperatures([30, 60, 90])
