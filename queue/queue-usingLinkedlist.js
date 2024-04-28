class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    empty() {
        return this.size === 0
    }

    enqueue(data) {
        let node = new Node(data) 
        if (this.empty()) {
            this.front = node
        } else {
            this.rear.next = node
        }
        this.rear = node
        this.size++
    }

    dequeue() {
        if (this.front === null) {
            console.log("Queue is Empty");
        } else {
            let removeNode = this.front
            this.front = this.front.next
            this.size--
            return removeNode.data
        }
    }

    getFront() {
        if (this.empty()) {
            console.log("Empty Queue");
        } else {
            return this.front.data
        }
    }

    getRear() {
        if (this.empty()) {
            console.log("Empty Queue");
        } else {
            return this.rear.data
        }
    }

    print() {
        if (this.front === null) {
            console.log("Empty Queue");
            return
        }
        let current = this.front
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const queue = new Queue()

queue.enqueue(11)
queue.enqueue(111)
queue.enqueue(1111)
queue.enqueue(11111)
queue.dequeue()
queue.print()

console.log("Front =",queue.getFront());
console.log("Rear =",queue.getRear());