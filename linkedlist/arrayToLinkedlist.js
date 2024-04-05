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
}

const arr=[12,22,33,44,55]

function arrayToLinkedList(arr){
    let list = new linkedlist()
    for(let item of arr){
        list.append(item)
    }
    return list
}

const list=arrayToLinkedList(arr)
list.display()