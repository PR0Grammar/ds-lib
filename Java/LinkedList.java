public class LinkedList<T>{
    private Node<T> head,tail;
    private int size;
   
    
    public LinkedList(){ 
        this.head = this.tail = null;
        this.size = 0;
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty(){
        return this.size == 0;
    }

    public T head() {
        if(this.isEmpty()){
            return null;
        }

        return this.head.getVal();
    }

    public T tail() {
        if(this.isEmpty()){
            return null;
        }

        return this.tail.getVal();
    }

    public void setHead(T val) {
        Node<T> newHead = new Node<>(val, head);

        this.head = newHead;

        if(this.isEmpty()) {
            this.tail = this.head;
        }

        this.size++;
    }

    public void setTail(T val) {
        Node<T> newTail = new Node<>(val, null);

        if(isEmpty()){
            this.head = newTail;
        }else {
            this.tail.setNext(newTail);;
        }

        this.tail = newTail;

        this.size++;
    }

    public T removeHead() {

        if(this.head == null) {
            throw new Error("Woah! List is emptyyy.");
        }

        Node<T> headToRemove = this.head;
        
        this.head = this.head.getNext();

        this.size--;

        return headToRemove.getVal();
    
    }


    public class Node<T> {
        private T val;
        private Node<T> next;

        public Node() {
            this.val = null;
            this.next = null;
        }

        public Node(T val, Node<T> next){
            this.val = val;
            this.next = next;
        }

        public Node(T val) {
            this.val = val;
            this.next = null;
        }

        public void setVal(T val){
            this.val = val;
        }

        public void setNext(Node<T> next){
            this.next = next;
        }

        public T getVal() {
            return this.val;
        }

        public Node<T> getNext() {
            return this.next;
        } 
    }

    public static void main(String[] args){
        LinkedList<Integer> l = new LinkedList<>();

        l.setHead(4);
        l.setTail(5);
        l.removeHead();
        System.out.println("" + l.tail() + " " + l.head() + l.size());
    }
}
