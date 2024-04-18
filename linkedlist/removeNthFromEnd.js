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
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
        this.size++
    }

    removeNthFromEnd(n) {
        if (!this.head || n <= 0) {
            return
        }
        let slow = this.head
        let fast = this.head

        for (let i=0; i< n; i++){
            if (fast.next) {
                fast = fast.next
            } else {
                this.head = slow.next
            }
        }

        while (fast.next) {
            slow = slow.next
            fast = fast.next
        }
        slow.next = slow.next.next
        this.size--
    }

    display() {
        if (!this.head) {
            console.log("list is Empty");
            return
        }
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
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
console.log("---------------");
list.removeNthFromEnd(4)
list.display()