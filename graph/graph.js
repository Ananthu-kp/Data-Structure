class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    hasEdges(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacent of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacent)
        }
        delete this.adjacencyList[vertex]
    }

    hasCyclic() {
        for (let vertex in this.adjacencyList) {
            if (this.adjacencyList[vertex].has(vertex)) {
                return true
            }
        }
        return false
    }

    dfs(startVertex) {
        const visited = {}
        const stack = []
        stack.push(startVertex)
        visited[startVertex] = true

        while (stack.length) {
            const curr = stack.pop()
            console.log(curr);

            this.adjacencyList[curr].forEach(next => {
                if (!visited[next]) {
                    visited[next] = true
                    stack.push(next)
                }
            })
        }
    }

    bfs(startVertex) {
        const visited = {}
        const queue = []
        queue.push(startVertex)
        visited[startVertex] = true

        while (queue.length) {
            const curr = queue.shift()
            console.log(curr);

            for (const next of this.adjacencyList[curr]) {
                if (!visited[next]) {
                    visited[next] = true
                    queue.push(next)
                }
            }
        }
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','A')

graph.display()

console.log(graph.hasEdges('A','B'));

// graph.removeEdge('A','C')
// graph.removeVertex('B')
// graph.display()

console.log("Cyclic ->",graph.hasCyclic());

graph.dfs('A')
console.log("----");
graph.bfs('A')