class MaxHeap {
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
        while (this.hasParent(index) && this.heap[this.Parent(index)] < this.heap[index]) {
            this.swap(this.Parent(index), index)
            index = this.Parent(index)
        }
    }

    display() {
        console.log(this.heap);
    }

    delete() {
        this.heap.shift()
        this.size--
        this.heapifyDown(0)
    }

    heapifyDown(index) {
        let large = index
        const left = this.leftChild(index)
        const right = this.rightChild(index)
        if (left < this.size && this.heap[left] > this.heap[large]) {
            large = left
        }
        if (right < this.size && this.heap[right] > this.heap[large]) {
            large = right
        }
        if (large !== index) {
            this.swap(large, index)
            this.heapifyDown(large)
        }
    }

    heapify(index, size) {
        let large = index
        const left = this.leftChild(index)
        const right = this.rightChild(index)
        if (left < size && this.heap[left] > this.heap[large]) large = left
        if (right < size && this.heap[right] > this.heap[large]) large = right
        if (large !== index) {
            this.swap(large, index)
            this.heapify(large, size)
        }
    }

    sort() {
        let size = this.size
        for (let i = size - 1; i > 0; i--) {
            this.swap(0, i)
            this.heapify(0, i)
        }
    }
    
    
}

const heap = new MaxHeap()

heap.insert(7)
heap.insert(20)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.display()
// heap.delete()
// heap.display()
console.log("----");
heap.sort()
heap.display()