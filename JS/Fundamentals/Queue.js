class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
    setVal(val){
        this.val = val;
    }
    setNext(node){
        if(!(node instanceof Node))
            throw new Error(`Node's next must be type Node`);
        this.next = node;
    }
    getVal(){
        return this.val;
    }
    getNext(){
        return this.next;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val){
        let n = new Node(val);

        if(this.isEmpty()){
            this.head = n;
        }else{
            this.tail.setNext(n);
        }

        this.tail = n;
        this.size++;
    }

    dequeue(){
        if(this.isEmpty())
            return null;

        let x = this.head.getVal();
        
        if(this.head.getNext() == null)
            this.tail = null;

        this.head = this.head.getNext();
        this.size--;
        return x;
    }

    len(){
        return this.size;
    }

    isEmpty(){
        return this.size == 0;
    }
}


function test(){
    let q = new Queue();

    console.log(q.dequeue()); //null
    
    for(let i = 1; i < 100; i *= 2){
        q.enqueue(i);
    }

    while(!q.isEmpty()){
        console.log('Size: '+ q.len());
        console.log(q.dequeue());
    }
    console.log('Size: '+ q.len() + '. isEmpty?: ' + q.isEmpty());
}

test();