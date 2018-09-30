public interface Queue<E>{
    public int size();
    public boolean isEmpty();
    public void enqueue(E value) throws Exception;
    public E dequeue() throws Exception;
}