const BSTNode = require('../Nodes/BSTNode');

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  
  insert(key, val){
    if(this.root == null)
      this.root = new BSTNode(key, val);
    
    else
      this._insert(this.root, key, val);
  }

  _insert(node, key, val){
    if(key >= node.getKey()){
      if(node.getRight() == null)
        node.setRight(new BSTNode(key, val));
      else
        this._insert(node.getRight(), key, val);
    }
    
    else{
      if(node.getLeft() == null)
        node.setLeft(new BSTNode(key, val));
      else
        this._insert(node.getLeft(), key, val);
    }
  }

  find(key){
    if(this.root == null)
      return null;
    else
      return this._find(this.root, key);
  }

  _find(node, key){
    if(node == null)
      return null;

    if(node.getKey() === key)
      return node.getValue();
    
    if(key >= node.getKey())
      return this._find(node.getRight(), key);
    else
      return this._find(node.getLeft(), key);
  }

  getRoot(){
    return this.root;
  }
  
  isLeaf(node){
    return node.getLeft() == null && node.getRight() == null;
  }
  
  isInternal(node){
    return node.getLeft() != null || node.getRight() != null;
  }

  inOrder(node = this.root){
    if(node == null)
      return;
    this.inOrder(node.getLeft());
    console.log(`${node.getKey()} : ${node.getValue()}`);
    this.inOrder(node.getRight());
  }
}

function test(){
  let x = new BinarySearchTree();

  x.insert(2, 'w');
  x.insert(0, 'a');
  x.insert(4, 'b');
  x.insert(3, 'c');
  x.insert(1, 'f');

  x.inOrder(); // a --> f --> w --> c --> b

  console.log(x.find(3)); // c
  console.log(x.find(1)) // f
  console.log(x.find(7)); // null
}

test();