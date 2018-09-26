public interface Stack <E> {
    public void push(E e) throws Exception;
    public E pop() throws Exception;
    public int size();
    public E top() throws Exception;
    public boolean isEmpty();
}