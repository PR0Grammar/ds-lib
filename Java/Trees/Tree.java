import java.sql.Array;
import java.util.Iterator;
import java.util.ArrayList;

public class Tree {
    protected TNode root;
    public int size;

    public Tree() {
        this.root = null;
        this.size = 0;
    }

    public TNode root() {
        return root;
    }

    public TNode parent(TNode node) {
        return node.getParent();
    }

    public boolean isRoot(TNode node) {
        return node == root;
    }

    public boolean isInternal(TNode node) {
        return node.children().hasNext();
    }

    public boolean isExternal(TNode node) {
        return !isInternal(node);
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public int depth(TNode node) {
        if(isRoot(node)){
            return 0;
        }
        return 1 + depth(parent(node));
    }

    public int height(TNode node) {
        if(isExternal(node)){
            return 0;
        }
        int maxHeight = 0;
        Iterator<TNode> child = node.children();

        while(child.hasNext()){
            int childHeight = height(child.next());
            if(maxHeight < childHeight)
                maxHeight = childHeight;
        }
        return 1 + maxHeight;

    }

    public int height() {
        if(root == null)
            return -1;
        return height(root);
    }

    public ArrayList<TNode> preOrder(TNode node) {
        ArrayList<TNode> list = new ArrayList<TNode>();
        preOrder(node, list);
        return list;
    }

    public void preOrder(TNode node, ArrayList<TNode> list) {
        if(node == null)
            return;
        list.add(node);
        Iterator<TNode> child = node.children();

        while(child.hasNext()) {
            preOrder(child.next(), list);
        }
    }

    public ArrayList<TNode> postOrder(TNode node){
        ArrayList<TNode> list = new ArrayList<TNode>();
        postOrder(node, list);
        return list;
    }

    public void postOrder(TNode node, ArrayList<TNode> list) {
        if(node == null)
            return;
        Iterator<TNode> child = node.children();

        while(child.hasNext()){
            postOrder(child.next(), list);
        }
        list.add(node);
    }


}