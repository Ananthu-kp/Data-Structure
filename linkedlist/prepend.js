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

    prepend(data){
        let node = new Node(data)
        if(this.empty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
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
}

const list = new linkedlist()

list.prepend(10)
list.prepend(20)
list.display()