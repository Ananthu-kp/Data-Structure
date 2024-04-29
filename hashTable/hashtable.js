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
        this.table[index] = value
    }

    get(key) {
        const index = this._hash(key)
        return this.table[index]
    }

    remove(key) {
        const index = this._hash(key)
        this.table[index] = undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }

}

const ht = new HashTable(53)

ht.set("name","Ananthu")
ht.set("age",22)
// ht.remove("age")
ht.display()

console.log(ht.get("name"));