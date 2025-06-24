class MinStack {
    stack: number[] = []
    minstack: number[] = []

    constructor() {

    }

    push(val: number): void {
        this.stack.push(val)
        if (this.minstack.length == 0) {
            this.minstack.push(val)
        } else {
            if (this.minstack[this.minstack.length - 1] >= val) {
                this.minstack.push(val)
            }
        }
    }

    pop(): void {
        const popValue = this.stack.pop()
        if (popValue == this.minstack[this.minstack.length - 1]) {
            this.minstack.pop()
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minstack[this.minstack.length - 1]
    }


}
var obj = new MinStack()
obj.push(2)
obj.push(5)
obj.push(7)
obj.pop()
console.log(obj.stack)
console.log(obj.minstack)


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */