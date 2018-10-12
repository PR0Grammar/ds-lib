import java.util.ArrayList;
import java.util.Iterator;

public class GTNode<E> implements TNode {
    E data;
    GTNode<E> parent;
    private ArrayList<TNode> children;

    public GTNode(E data, GTNode<E> parent){
        this.data = data;
        this.parent = parent;
        this.children = new ArrayList<TNode>();
    }

    public Iterator<TNode> children() {
        return this.children.iterator();
    }

    @Override
    public TNode getParent() {
        return this.parent;
    }

    @Override
    public String printData() {
        return this.data.toString();
    }

    public int numberChildren(){
        return children.size();
    }

    public void add(GTNode<E> gtNode) {
        children.add(gtNode);
    }

    public void add(int i, GTNode<E> gtNode){
        children.add(i, gtNode);
    }

    public GTNode<E> get(int i) {
        return (GTNode<E>) children.get(i);
    }

    public int size() {
        Iterator<TNode> child = this.children();
        int count = 0;
        while(child.hasNext()) {
            count+= ((GTNode<E>) child.next()).size();
        }
        return count;
    }

    public void remove(GTNode<E> gtNode) {
        this.children.remove(gtNode);
    }
}