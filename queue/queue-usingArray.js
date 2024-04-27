class Queue {
    constructor() {
        this.items = []
    }

    empty() {
        return this.items.length === 0
    }

    enqueue(data) {
        return this.items.push(data)
    }

    dequeue() {
        if (this.empty()) {
            console.log("No data in the Queue");
        } else {
            return this.items.shift()
        }
    }

    front() {
        if (this.empty()) {
            console.log("Queue is Empty");
        } else {
            return this.items[0]
        }
    }

    print() {
        console.log(this.items.toString());
    }

}

const queue = new Queue()

queue.enqueue(11)
queue.enqueue(12)
queue.enqueue(13)
queue.print()