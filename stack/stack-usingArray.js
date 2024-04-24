class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        return this.items.push(data)
    }

    pop() {
        if (this.empty()) {
            console.log("Underflow");
        }
        return this.items.pop()
    }

    peek() {
        if (this.empty()) {
            console.log("No elements in stack"); 
        }
        return this.items[this.items.length - 1]
    }

    print() {
        console.log(this.items.toString());
    }

    empty() {
        return this.items.length === 0;
    }
}

const stack = new Stack()

stack.push(11)
stack.push(12)
stack.push(13)
stack.push(14)
stack.print()
console.log("---------");
stack.pop()
stack.print()

console.log("Top of the stack is ",stack.peek());