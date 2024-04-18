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

    removeNthNodeFromStart(n) {
        if (!this.head || n <= 0) {
            return
        }
        if (n === 1) {
            this.head = this.head.next
            return
        }
        let current = this.head
        let prev = null;
        let count = 1;

        while (current && count < n) {
            prev = current
            current = current.next
            count++
        }
        if (current) {
            prev.next = current.next
            this.size--
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
list.add(12)
list.add(13)
list.add(14)
list.add(15)
list.display()
console.log("---------");
list.removeNthNodeFromStart(1)
list.display()