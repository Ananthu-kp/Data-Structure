class PriorityQueue {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    enqueue(item, priority) {
        this.heap.push({ item, priority });
        this.size++;
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.size - 1;
        while (index > 0 && this.heap[index].priority < this.heap[this.parent(index)].priority) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    dequeue() {
        if (this.size === 0) {
            return null; // Queue is empty
        }

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.size--;
        this.heapifyDown(0);
        return top.item;
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);
        if (left < this.size && this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left;
        }
        if (right < this.size && this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(smallest, index);
            this.heapifyDown(smallest);
        }
    }

    peek() {
        if (this.size === 0) {
            return null; // Queue is empty
        }
        return this.heap[0].item;
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }

    display() {
        console.log(this.heap);
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("apple", 3);
priorityQueue.enqueue("orange", 1);
priorityQueue.enqueue("grape", 2);

console.log(priorityQueue.dequeue()); 
console.log(priorityQueue.peek()); 
priorityQueue.display(); 
