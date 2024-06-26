//linked list

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

    isEmpty(){
        return this.size==0
    }

    add(data){
        const node=new Node(data)
        if(this.isEmpty()){
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

    prepend(data){
        let node=new Node(data)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    insert(data,index){
        if(index <= 0 || index > this.size){
            return
        }
        if(index===0){
            this.prepend(data)
        }else{
            const node=new Node(data)
            let previous=this.head
            for(let i=0; i< index-1; i++){
                previous=previous.next
            }
            node.next=previous.next
            previous.next=node
            this.size++
        }
    }

    remove(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removenode
        if(index===0){
            removenode=this.head
            this.head=removenode.next
        }else{
            let previous=this.head
            for(let i=0; i<index-1; i++){
                previous=previous.next
            }
            removenode=previous.next
            previous.next=removenode.next
        }
        this.size--
        return removenode.data
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

    display(){
        if(this.isEmpty()){
            console.log("list is Empty");
        }else{
            let current=this.head
            let lists=''
            while(current){
                // console.log(current.data);
                lists += `${current.data} `
                current=current.next
            }
            console.log(lists);
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

const list=new linkedlist()

list.add(10)
list.add(20)
list.add(30)
list.insert(11,1)
// list.reverse()
list.remove(1)
list.removeData(10)
list.display()