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
        const node = new Node(data)
        if(this.head === null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    add(data){
        const node=new Node(data)
        if(this.head === null){
            this.head=node
        }else{
            let previous=this.head
            while(previous.next){
                previous=previous.next
            }
            previous.next=node
        }
        this.size++
    }

    insert(data,index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index==0){
            this.prepend(data)
        }else{
            let node=new Node(data)
            let previous=this.head
            for(let i=0; i< index-1; i++){
                previous=previous.next
            }
            node.next=previous.next
            previous.next=node
            this.size++  
        }
    }

    display(){
        if(this.head === null){
            console.log("list is Empty");
        }else{
            let current=this.head
            while(current){
                console.log(current.data);
                current=current.next
            }
        }
    }
}

const list=new linkedlist()
list.add(10)
list.add(20)
list.insert(30,2)
list.insert(50,0)

list.display()