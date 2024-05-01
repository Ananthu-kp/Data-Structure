class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(data) {
        let newNode = new TreeNode(data)
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (!root.left) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (!root.right) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, data) {
        if (!root) {
            return false
        } else {
            if (root.data === data) {
                return true
            } else if (data < root.data) {
                return this.search(root.left, data)
            } else {
                return this.search(root.right, data)
            }
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(11)
bst.insert(12)

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 11));
console.log(bst.search(bst.root, 12));
console.log(bst.search(bst.root, 20));