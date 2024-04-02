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
        if(this.head==null){
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
        if(this.head==null){
            console.log("list is Empty");
        }else{
            let current=this.head
            while(current){
                console.log(current.data);
                current=current.next
            }
        }
    }

    reverse(){
        let current=this.head
        let previous=null
        while(current){
            let next=current.next
            current.next=previous
            previous=current
            current=next
        }
        this.head=previous
    }
}

const list = new linkedlist()

list.append(10)
list.append(20)
list.reverse()
list.display()