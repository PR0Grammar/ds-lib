const Node = require('../Nodes/AVLNode');

class AVL{
    constructor(){
        this.root = null;
    }

    insert(key, val){
        if(key == null)
            throw new Error('Null key.');
        this.root = this._insert(this.root, key, val);
    }

    _insert(node, key, val){
        if(node == null)
            return new Node(key, val);
        if(key < node.key)
            node.left = this._insert(node.left, key, val);
        else if(key > node.key)
            node.right = this._insert(node.right, key, val);
        else
            return node;

        node.size = 1 + this._size(node.left) + this.size(node.right);
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        return this._balance(node)
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
    _balance(node){
        //Left heavy node
        if(this._balanceFactor(node) > 1){
            //If left child's right subtree is heavier
            if(this._balanceFactor(node.left) < 0)
                node.left = this._rotateLeft(node.left)
            node = this._rotateRight(node)
        }
        //Right heavy node
        else if(this._balanceFactor(node) < -1){
            //If right child's left subtree is heavier
            if(this._balanceFactor(node.right) > 0)
                node.right = this._rotateRight(node.right)
            node = this._rotateLeft(node)
        }
        return node;
    }

    _rotateLeft(node){
        let y = node.right
        let t = y.left

        y.left = node
        node.right = t

        //Update size
        y.size = node.size
        node.size = 1 + this._size(node.left) + this._size(node.right);

        //Update height
        y.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        return y;
    }

    _rotateRight(node){
        let y = node.left;
        let t = y.right

        y.right = node;
        node.left = t;

        //Update sizes
        y.size = node.size
        node.size = 1 + this._size(node.left) + this._size(node.right)

        //Update heights
        y.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        return y;
    }

    _balanceFactor(node){
        return this.height(node.left) - this.height(node.right)
    }

    _size(node){
        if(node == null)
            return -1;
        return node.size;
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

    inOrderPrint(node = this.root){
        if(node == null)
            return;
        this.inOrderPrint(node.left);
        console.log(node.val);
        this.inOrderPrint(node.right)
    }
}


function test(){
    let x  = new AVL()

    x.insert(2, 'b')
    x.inOrderPrint()
    console.log('___')

    x.insert(45, 'g')
    x.inOrderPrint()
    console.log('___')

    x.insert(1, 'a')
    x.inOrderPrint()
    console.log('___')

    x.insert(23, 'd')
    x.inOrderPrint()
    console.log('___')

    x.insert(30, 'e')
    x.inOrderPrint()
    console.log('___')

    x.insert(40, 'f')
    x.inOrderPrint()
    console.log('___')

    x.insert(4, 'c')
    x.inOrderPrint()
    console.log('___')

    x.insert(4, 'c')
    x.inOrderPrint()
    console.log('___')
    
    console.log(x.root)
    console.log(x.height(x.root))
    
}

test()