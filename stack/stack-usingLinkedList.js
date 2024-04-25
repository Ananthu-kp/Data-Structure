class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    push(data) {
        let node = new Node(data)
        node.next = this.top
        this.top = node
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            console.log("stack Underflow");
            return
        }
        let popNode = this.top
        this.top = this.top.next
        this.size--
        return popNode.data
    }

    peek() {
        if (this.isEmpty()) {
            console.log("No data in the stack");
            return
        }
        return this.top.data
    }

    print() {
        let current = this.top
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const stack = new Stack()

stack.push(10)
stack.push(11)
stack.push(12)
stack.push(13)
stack.print()
console.log("-----------");
stack.pop()
stack.print()

console.log("Top of the stack is ",stack.peek());