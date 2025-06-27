function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    for (const element of tokens) {
        if (element == '+') {
            const first = stack.pop()
            const second = stack.pop()
            stack.push(first! + second!)
        } else if (element == '-') {
            const first = stack.pop()
            const second = stack.pop()
            stack.push(second! - first!)
        } else if (element == '*') {
            const first = stack.pop()
            const second = stack.pop()
            stack.push(second! * first!)
        } else if (element == '/') {
            const first = stack.pop()
            const second = stack.pop()
            stack.push(Math.trunc(second! / first!))
        
        } else {
            stack.push(Number(element))
        }
    }

    return stack[0]
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])