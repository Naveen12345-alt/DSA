class Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

class LL{
    constructor(head){
        this.head=head;
        
        return this.head;
    }
}

const reverseLL=(head)=>{
    let prev=null, current=head;
    
    while(current){
        const temp=current.next;
        current.next=prev;
        prev=current;
        current=temp;
    }
    
    return prev;
}

const addOneToLL=(head)=>{
    let carry=0;
    let current=head;
    let lastNode=null;
    const val=current.value+1;
        current.value=val%10;
        carry=Math.floor(val/10);
    current=current.next;
    while(current){
        const val=current.value+carry;
        current.value=val%10;
        carry=Math.floor(val/10);
       if(current.next===null){
            lastNode=current;
        }
        current=current.next;
    }
    
    if(carry){
        const carryNode=new Node(carry,null);
        
        lastNode.next=carryNode;
    }
    return reverseLL(head);
}

(function main() {
    const node1 = new Node(9,null);
    const node2=new Node(9,node1);
    const node3=new Node(8,node2);
    const node4=new Node(7,node3);
    
    const numLL=new LL(node4);
    const reversedLL=reverseLL(numLL);    
    console.log(JSON.stringify(addOneToLL(reversedLL)));
}());
