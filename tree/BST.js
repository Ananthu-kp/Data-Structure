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

    preOrder(root) {
        if (root) {
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.data);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    minimum(root) {
        if (!root.left) {
            return root.data
        } else {
            return this.minimum(root.left)
        }
    }

    maximum(root) {
        if (!root.right) {
            return root.data
        } else {
            return this.maximum(root.right)
        }
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data)
    }

    deleteNode(root, data) {
        if (!root) {
            return root
        }

        if (data < root.data) {
            root.left = this.deleteNode(root.left, data)
        } else if (data > root.data) {
            root.right = this.deleteNode(root.right, data)
        } else {

            if (!root.left && !root.right) {
                return null
            }

            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }

            root.data = this.minimum(root.right)
            root.right = this.deleteNode(root.right, root.data)
        }
        return root
    }

    isBST() {
        let arr = []
        this.inOrder(this.root, arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false
        }
        return true
    }

}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));

console.log("------");
bst.preOrder(bst.root)
console.log("------");
bst.inOrder(bst.root)
console.log("------");
bst.postOrder(bst.root)
console.log("------");
bst.levelOrder()

console.log("minimum value =", bst.minimum(bst.root));
console.log("maximum value =", bst.maximum(bst.root));

bst.delete(3)
bst.levelOrder()
console.log("------");
console.log(bst.isBST());