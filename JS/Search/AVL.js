const Node = require('../Nodes/AVLNode');

class AVL{
    constructor(){
        this.root = null;
    }

    insert(key, val){
        if(key == null)
            throw new Error('Null key.');
            
        if(this.root == null)
            this.root = new Node(key, val, 0, 1);
        else
            this._insert(this.root, key, val);
        

    }

    _insert(node, key, val){
        if(key < node.key){
            if(node.left == null)
                node.left = new Node(key, val, 0, 1);
            else
                this._insert(node.left, key, val);
        }
        else{
            if(node.right == null)
                node.right = new Node(key, val, 0, 1);
            else
                this._insert(node.right, key, val);
        }
    }

    find(key){
        if(key == null)
            throw new Error('Null key.');

        let node = this._find(this.root, key);
        if(node == null)
            return null;
        return node.val;
    }

    _find(node, key){
        if(node == null)
            return null;
        if(key < node.key)
            this._find(node.left, key);
        else if(key > node.key)
            this._find(node.right, key);
        else
            return node;
    }

    isEmpty(){
        return this.root == null;
    }

    size(node){
        return node == null ? 0 : node.size; 
    }

    height(node){
        return node == null ? -1 : node.height;
    }
}


function test(){

}