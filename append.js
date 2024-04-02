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
        let node = new Node(data)
        if(this.empty()){
            this.head= node
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
}

const list = new linkedlist()

list.append(10)
list.append(2)
list.display()