public class ArrayQueue<E> implements Queue<E> {
    private E[] queue;
    private int size;
    private int capacity;
    private int front;
    private int back;

    public ArrayQueue(int size) {
        this.queue = (E[]) new Object[size];
        this.capacity = size;
        this.size = 0;
        this.front = 0;
        this.back = 0;
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void enqueue(E e) throws Exception{
        if(this.size == this.capacity){
            throw new Exception("Queue is full");
        }
        queue[back] = e;
        this.back = (this.back + 1) % this.capacity;
        this.size++;
    }

    public E dequeue() throws Exception {
        if(this.isEmpty()){
            throw new Exception("Queue is empty");
        }
        E nextValue = queue[front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;

        return nextValue;
    }


    public static void main(String[] args) {
        Queue<Integer> q = new ArrayQueue<>(5);

        try{
            q.enqueue(3);
            q.enqueue(4);
            q.enqueue(5);
            q.enqueue(6);
            q.enqueue(7);

            System.out.println("SIZE: " + q.size()); //5
            System.out.println(q.dequeue()); //3
            System.out.println(q.dequeue()); //4
            System.out.println(q.dequeue()); //5
            System.out.println("SIZE: " + q.size()); //2
            System.out.println(q.dequeue()); //6
            System.out.println(q.dequeue()); //7
            System.out.println("SIZE: " + q.size()); //0
            System.out.println(q.dequeue()); //THROW ERROR: Queue empty;

        }catch(Exception e) {
            System.out.println(e);
        }

    }
}