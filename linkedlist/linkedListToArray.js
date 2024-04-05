class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }

    empty(){
        return this.size==0
    }

    append(data){
        let node= new Node(data)
        if(this.empty()){
            this.head=node
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }

    display(){
        if(this.empty()){
            console.log("list is Empty");
        }else{
            let current=this.head
            while(current!=null){
                console.log(current.data);
                current=current.next
            }
        }
    }

    toArray(){
        let arr=[]
        let current=this.head
        while(current){
            arr.push(current.data)
            current=current.next
        }
        return arr
    }
}

const list = new linkedlist()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
console.log(list.toArray());