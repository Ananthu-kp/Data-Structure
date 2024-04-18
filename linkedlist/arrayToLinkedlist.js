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

    empty() {
        return this.size == 0
    }

    append(data) {
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

const array = [1, 2, 3, 4, 5];

function arrayToList(array) {
    let list = new LinkedList()
    for (const items of array) {
        list.append(items)
    }
    return list
}
const list = arrayToList(array)
list.display()