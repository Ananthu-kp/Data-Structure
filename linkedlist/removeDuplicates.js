class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    removeDuplicates() {
        if (!this.head || !this.head.next) {
            return
        }
        let current = this.head
        while (current) {
            let runner = current
            while (runner.next) {
                if (runner.next.data === current.data) {
                    runner.next = runner.next.next
                } else {
                    runner = runner.next
                }
            }
            current = current.next
        }
    }

    display() {
        if (!this.head) {
            console.log("list is Empty");
        } else {
            let current = this.head
            while (current) {
                console.log(current.data);
                current = current.next
            }
        }
    }
}

const list = new LinkedList()

list.add(11)
list.add(11)
list.add(11)
list.add(14)
list.add(14)
list.add(15)

list.display()
console.log("---------");
list.removeDuplicates()
list.display()