public class LinkQueue<E> implements Queue<E>{
    private int size;
    private Node<E> front;
    private Node<E> back;

    public LinkQueue() {
        this.front = new Node<E>(null);
        this.back = new Node<E>(null);
        this.front.setNext(this.back);
        this.size = 0;
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public void enqueue(E val) throws Exception {
        Node<E> newNode = new Node<E>(val);

        if(this.size() == 0){
            this.front = newNode;
        }else{
            this.back.setNext(newNode);
        }

        this.back = newNode;
        this.size++;
    }

    public E dequeue() throws Exception{
        if(this.isEmpty()){
            throw new Exception("Queue is empty.");
        }
        E topValue = this.front.getValue();
        this.front = this.front.getNext();
        this.size--;
        return topValue;
    }

    public String toString() {
        String ans = "";
        Node<E> c = this.front;

        while(c != null) {
            ans += c.getValue() + "-->";
            c = c.getNext();
        }

        return ans;
    }

    public class Node<E> {
        private E value;
        private Node<E> next;

        public Node(E e) {
            this.value = e;
            this.next = null;
        }

        public E getValue() {
            return value;
        }

        public Node<E> getNext() {
            return next;
        }

        public void setNext(Node<E> next) {
            this.next = next;
        }

        public void setValue(E value) {
            this.value = value;
        }
    }

    public static void main(String[] args) {
        Queue<Integer> queue = new LinkQueue<Integer>();

        try{
            queue.enqueue(104);
            queue.enqueue(6);
            queue.enqueue(123);

            System.out.println(queue); //104--6--123
            System.out.println("SIZE: " + queue.size()); //3

            System.out.println(queue.dequeue()); //104
            System.out.println(queue); //6--123
            System.out.println("SIZE: " + queue.size()); //2

            System.out.println(queue.dequeue()); //123
            System.out.println(queue); //123
            System.out.println("SIZE: " + queue.size()); //1

            queue.dequeue();
            System.out.println("SIZE: " + queue.size()); //0
            queue.dequeue(); //Throw error


        }catch(Exception e){
            System.out.println(e);
        }
    }
}