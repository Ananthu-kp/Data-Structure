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

    leftChild(index) {
        return 2 * index + 1
    }

    rightChild(index) {
        return 2 * index + 2
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

    delete() {
        this.heap[0] = this.heap[this.size - 1]
        this.heap.pop()
        this.size--
        this.heapifyDown(0)
    }

    heapifyDown(index) {
        let small = index
        let left = this.leftChild(index)
        let right = this.rightChild(index)
        if (left < this.size && this.heap[left] < this.heap[small]) {
            small = left
        }
        if (right < this.size && this.heap[right] < this.heap[small]) {
            small = right
        }
        if (small !== index) {
            this.swap(index, small)
            this.heapifyDown(small)
        }
    }
}

const heap = new MinHeap()

heap.insert(7)
heap.insert(20)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.display()
heap.delete()
heap.display()