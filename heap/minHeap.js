class MinHeap {
    constructor() {
        this.heap = []
        this.size = 0
    }

    Parent(index) {
        return Math.floor((index - 1) / 2)
    }

    hasParent(index) {
        return this.Parent(index) >= 0 
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }

    insert(data) {
        this.heap[this.size] = data
        this.size++
        this.heapifyUP()
    }

    heapifyUP() {
        let index = this.size - 1
        while (this.hasParent(index) && this.heap[this.Parent(index)] > this.heap[index]) {
            this.swap(this.Parent(index), index)
            index = this.Parent(index)
        }
    }

    display() {
        console.log(this.heap);
    }
}

const heap = new MinHeap()

heap.insert(7)
heap.insert(20)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.display()