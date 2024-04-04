class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    empty() {
        return this.size == 0
    }

    append(data) {
        let node = new Node(data)
        if (this.empty()) {
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

    prepend(data) {
        let node = new Node(data)
        if (this.empty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(data, index) {
        if (index < 0 || index > this.size) {
            return null
        }
        if (index == 0) {
            this.prepend(data)
        } else {
            let previous = this.head
            let node = new Node(data)
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }
            node.next = previous.next
            previous.next = node
            this.size++
        }
    }

    removeIndex(index) {
        if (index < 0 || index > this.size) {
            return null
        }
        let removeNode;
        if (index == 0) {
            removeNode = this.head
            this.head = removeNode.next
        } else {
            let previous = this.head
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }
            removeNode = previous.next
            previous.next = removeNode.next
        }
        this.size--
        return removeNode.data
    }

    removeData(data) {
        let current = this.head
        let previous = null
        while (current !== null) {
            if (current.data == data) {
                if (previous == null) {
                    this.head = current.next
                } else {
                    previous.next = current.next
                }
                this.size--
                return current.data
            }
            previous = current
            current = current.next
        }
        return null
    }

    reverse() {
        let current = this.head
        let previous = null
        while (current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        this.head = previous
    }

    search(data) {
        if (this.empty()) {
            return -1
        }
        let i = 0
        let current = this.head
        while (current) {
            if (current.data == data) {
                return i
            }
            current = current.next
            i++
        }
    }

    display() {
        if (this.empty()) {
            console.log("list is Empty");
        } else {
            let current = this.head
            while (current != null) {
                console.log(current.data);
                current = current.next
            }
        }
    }

    sum() {
        if (this.empty()) {
            return 0
        } else {
            let sum = 0
            let current = this.head
            while (current) {
                sum += current.data
                current = current.next
            }
            return sum
        }
    }

    largest() {
        if (this.empty()) {
            return 0
        }
        let largest = this.head.data
        let current = this.head.next
        while (current) {
            if (current.data > largest) {
                largest = current.data
            }
            current = current.next
        }
        return largest
    }

    smallest(){
        if(this.empty()){
            return -1
        }
        let smallest=this.head.data
        let current=this.head.next
        while(current){
            if(current.data < smallest){
                smallest=current.data
            }
            current=current.next
        }
        return smallest
    }

    secondLargest(){
        if(this.size <2){
            return null
        }
        let largest=this.head.data
        let secondLar=null
        let current=this.head.next
        while(current){
            if(current.data > largest){
                secondLar=largest
                largest=current.data
            }else if(secondLar==null || current.data>secondLar){
                secondLar=current.data
            }
            current=current.next
        }
        return secondLar
    }

    secondSmallest(){
        if(this.size<2){
            return null
        }
        let smallest=this.head.data
        let current=this.head.next
        let secondsmall=null
        while(current){
            if(current.data < smallest){
                secondsmall=smallest
                smallest=current.data
            }else if(secondsmall==null || current.data < secondsmall){
                secondsmall=current.data
            }
            current=current.next
        }
        return secondsmall
    }

    middleSum(){
        if(this.size <3 || this.size%2==0){
            return null
        }
        let sum=0
        let count=0
        let middle=Math.floor((this.size-1)/2)
        let current=this.head
        while(current){
            if(count >= middle-1 && count <= middle+1){
                sum+=current.data
            }
            current=current.next
            count++
        }
        return sum
    }
}


const list = new linkedlist()


list.append(1)
list.append(2)
list.prepend(3)
list.prepend(4)
list.insert(5, 4)
// list.removeIndex(0)
// list.removeData(3)
list.reverse()

console.log("search item position-", list.search(2));
console.log("sum of linked list-", list.sum());
console.log("largest of linkedlist-", list.largest());
console.log("smallest of linkedlist-", list.smallest());
console.log("secondlargest=",list.secondLargest());
console.log("secondsmallest=",list.secondSmallest());
console.log("middle sum=",list.middleSum());


list.display()