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
        if(index < 0 || index > this.size){
            return
        }
        let removeNode;
        if(index==0){
            removeNode=this.head
            this.head=removeNode.next
        }else{
            let previous=this.head
            for(let i=0; i< index-1; i++){
                previous=previous.next
            }
            removeNode=previous.next
            previous.next=removeNode.next
        }
        this.size--
        return removeNode.data
    }

    removeData(data){
        let current=this.head
        let previous=null
        while(current!=null){
            if(current.data==data){
                if(previous==null){
                    this.head=current.next
                }else{
                    previous.next=current.next
                }
                this.size--
                return current.data
            }
            previous=current
            current=current.next
        }
        return null
    }
}

const list = new linkedlist()

list.append(11)
list.append(22)
list.remove(0)
list.removeData(22)
list.display()