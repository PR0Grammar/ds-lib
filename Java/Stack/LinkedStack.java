public class LinkedStack<E> implements Stack<E> {
    private Node<E> top;
    private int size;


    public LinkedStack() {
        this.top = null;
        this.size = 0;
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public void push(E newValue) throws Exception{
        Node<E> newTop = new Node<E>(newValue);
        newTop.setNext(this.top);
        this.top = newTop;
        this.size++;
    }

    public E pop() throws Exception{
        if(this.isEmpty()){
            throw new Exception("Stack empty");
        }

        E rtrVal = this.top.getValue();
        this.top = this.top.getNext();
        this.size--;

        return rtrVal;

    }

    public E top() throws Exception {
        if(this.isEmpty()){
            throw new Exception("Stack empty");
        }

        return this.top.getValue();
    }

    public String toString() {
        String rtr = "";
        Node<E> currentNode = this.top;
        while(currentNode != null) {
            rtr += currentNode.getValue() + "-->";
            currentNode = currentNode.getNext();
        }
        return rtr;
    }

    public class Node<E>{
        private E value;
        private Node<E> next;

        public Node(E value) {
            this.value = value;
            this.next = null;
        }

        public E getValue() {
            return this.value;
        }

        public Node<E> getNext() {
            return this.next;
        }

        public void setValue(E e){
            this.value = e;
        }

        public void setNext(Node<E> node) {
            this.next = node;
        }
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new LinkedStack<Integer>();

        try{
            stack.push(3);
            stack.push(4);
            stack.push(5);

            System.out.println(stack); //3--4--5
            System.out.println("Size: " + stack.size()); //3
            System.out.println("POP! " + stack.pop()); //3
            System.out.println("Size: " + stack.size()); //2
            System.out.println(stack); //4--5
            stack.pop();
            stack.pop();
            stack.pop(); //Throws exception here

        }catch(Exception e){
            System.out.println(e);
        }
    }
}