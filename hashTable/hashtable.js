class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    _hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this._hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        let bucket = [key, value]
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] === value
                return
            }
        }
        this.table[index].push(bucket)
    }

    get(key) {
        const index = this._hash(key)
        if (!this.table[index]) return undefined
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this._hash(key)
        if (!this.table[index]) return
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1)
                return
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }

}

const ht = new HashTable(53)

ht.set("name", "Ananthu")
ht.set("mane", "Ananthu")
ht.set("age", 22)
// ht.remove("age")
ht.display()

console.log(ht.get("name"));