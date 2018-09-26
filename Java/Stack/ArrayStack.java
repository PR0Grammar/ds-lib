public class ArrayStack <E> implements Stack<E>{
    private int top;
    private int capacity;
    private E[] stack;

    public ArrayStack(int size) {
        this.capacity = size;
        this.stack = (E[]) new Object[size];
        this.top = -1;
    }

    public int size() {
        return this.top + 1;
    }

    public boolean isEmpty() {
        return this.top == -1;
    }

    public E top() throws Exception {
        if(this.isEmpty()){
            throw new Exception("Stack is empty");
        }
        return this.stack[top];
    }

    public void push(E e) throws Exception {
        if(this.size()  == capacity) {
            throw new Exception("Stack is at capacity");
        }
        this.stack[++top] = e;
    }

    public E pop() throws Exception {
        if(this.isEmpty()) {
            throw new Exception("Stack is empty.");
        }

        E val = this.stack[top];
        this.stack[top] = null;
        top--;
        return val;
    }

    public String toString() {
        String ans = "";

        for(int i = top; i >= 0; i--){
            ans+= this.stack[i] + " | ";
        }
        return ans;
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new ArrayStack<Integer>(4);

        try{
            stack.push(1);
            stack.push(5);
            stack.push(45);
            stack.push(4324);

            System.out.println(stack.pop()); //4324
            System.out.println(stack.top()); //45
            System.out.println(stack); //45 -> 5 -> 1
            System.out.println(stack.size()); //3

        }catch(Exception e) {
            System.out.println(e);
        }


    }
}