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

    append(data){
        let node = new Node(data)
        if(this.head===null){
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
            while(current!==null){
                console.log(current.data);
                current=current.next
            }
        }
    }

    remove(index){
        if(index < 0 || index >this.size){
            return
        }
        let removenode;
        if(index==0){
            removenode=this.head
            this.head=removenode.next
        }else{
            let previous=this.head
            for(let i=0; i<index-1;i++){
                previous=previous.next
            }
            removenode=previous.next
            previous.next=removenode.next
        }
        this.size--
        return removenode.data
    }
}

const list = new linkedlist()

list.append(11)
list.append(22)
list.remove(0)
list.display()