import javax.management.RuntimeErrorException;
import java.util.Iterator;

public class GTree<E> extends Tree {
    public GTree() {
        super();
    }

    //Add the inital node(root)
    public void add(E data) {
        if(root != null)
            throw new RuntimeException();
        root = new GTNode<E>(data, null);
        size++;
    }

    //Create a new node with the 'node' as the parent, and add as one of 'node' child
    public void add(GTNode<E> node, E data) {
        node.add(new GTNode<E>(data, node));
        size++;
    }

    public void add(int i, GTNode<E> node, E data) {
        if(node.numberChildren() < i || i < 0){
            throw new IllegalArgumentException("Illegal index within node");
        }
        node.add(i, new GTNode<E>(data, node));
    }

    //To remove a node, subtract the size of the entire subtree from the master tree
    //Tell parent to remove that child node
    public GTNode<E> remove(GTNode<E> node) {
        GTNode<E> parent = (GTNode<E>) node.getParent();
        size -= node.size();
        if(parent == null){
            root = null;
        }else{
            parent.remove(node);
        }
        return parent;
    }

    public static void main(String[] args) {
        GTree<Integer> tree = new GTree<Integer>();

        tree.add(32);
        tree.add((GTNode<Integer>) tree.root(), 43);
        tree.add((GTNode<Integer>) tree.root(), 2);
        tree.add((GTNode<Integer>) tree.root(), 222);

        Iterator<TNode> childs = tree.root().children();
        System.out.println(tree.root().printData());

        while(childs.hasNext()){
            System.out.print('|' + ((GTNode<Integer>) childs.next()).printData() + '|');
        }
        System.out.println("");

    }
}