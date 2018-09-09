public class DoublyLinkedList<T> {
    private DoublyNode<T> header, trailer;
    private int size;

    public DoublyLinkedList() {
        this.header = new DoublyNode<T>(null, null, null);
        this.trailer = new DoublyNode<T>(null, null, null);

	//Set pointers after initalization
        header.setNext(this.trailer);
        trailer.setPrev(this.header);

        this.size = 0;
    }

    //Utils

    public int size(){
        return this.size;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    //Getters
    public DoublyNode<T> first() {
        if(this.isEmpty()) {
            throw new Error("NO VAL");
        }

        return this.header.getNext();
    }

    public DoublyNode<T> last() {
        if(this.isEmpty()){
            throw new Error("NO VAL");
        }

        return this.trailer.getPrev();
    }

    //Modifiers
    public void addAfter(T val, DoublyNode<T> node) {
        DoublyNode<T> newNode = new DoublyNode<T>(val, node, node.getNext());

        node.setNext(newNode);

        newNode.getNext().setPrev(newNode);

        this.size++;
    }

    public void addBefore(T val, DoublyNode<T> node) {
        DoublyNode<T> newNode = new DoublyNode<T>(val, node.getPrev(), node);

        node.setPrev(newNode);
        newNode.getPrev().setNext(newNode);

        this.size++;
    }

    public T remove(DoublyNode<T> node) {
        if(node == this.trailer || node == this.header){
            throw new Error("GUARD EXCEPTION");
        }

        node.getPrev().setNext(node.getNext());
        node.getNext().setPrev(node.getPrev());

        node.setNext(null);
        node.setPrev(null);

        this.size--;

        return node.getVal();

    }

    public void addFirst (T val) {
        this.addAfter(val, this.header);
    }

    public void addLast (T val) {
        this.addBefore(val, this.trailer);
    }


    public T removeFirst () {
        return this.remove(this.header.getNext());
    }

    public T removeLast () {
        return this.remove(this.trailer.getPrev());
    }


    public class DoublyNode<T> {
        private T val;
        private DoublyNode<T> next;
        private DoublyNode<T> prev;

        public DoublyNode(T data, DoublyNode<T> prev, DoublyNode<T> next) {
            this.val = data;
            this.prev = prev;
            this.next = next;
        }

        public T getVal () {
            return this.val;
        }

        public DoublyNode<T> getPrev() {
            return this.prev;
        }

        public DoublyNode<T> getNext() {
            return this.next;
        }

        public void setVal (T data) {
            this.val = data;
        }

        public void setNext (DoublyNode<T> next) {
            this.next = next;
        }

        public void setPrev (DoublyNode<T> prev) {
            this.prev = prev;
        }
    }

//Test
    public static void main(String[] args){
        DoublyLinkedList<Integer> dl = new DoublyLinkedList<Integer>();

        dl.addFirst(3);
        dl.removeLast();
        dl.addFirst(43);
        dl.addLast(123);
        dl.addBefore(321, dl.first().getNext());
        dl.removeFirst();
        dl.addBefore(1, dl.last());
        dl.remove(dl.last().getPrev());
        dl.addFirst(213);

        //213,321, 123
        //Size: 3
        System.out.println("[H: "+ dl.first().getPrev().getVal() + "]--> "+dl.first().getVal() + "--> " + dl.first().getNext().getVal() + "--> " + dl.first().getNext().getNext().getVal() + "--> [T: " +dl.first().getNext().getNext().getNext().getVal() + "]");
        System.out.println("Size: "+ dl.size());

    }
}
