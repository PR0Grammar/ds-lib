class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  
  insert(val){
    if(this.root == null)
      this.root = new BinaryNode(val);
    else
      this._insertHelper(this.root, val)
  }
  
  findMin(node){
    if(isLeaf(node))
      return node.getData();
    findMin(node.getLeft());
  }
  
  findMax(node){
    if(isLeaf(node))
      return node.getData();
    findMax(node.getRight());
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
  _insertHelper(parent, val){
    if(parent == null)
      parent = new BinaryNode(val);
    
    else{
      if(val < parent.getData()){
        if(parent.getLeft() == null)
          parent.setLeft(new BinaryNode(val));
        else
          this._insertHelper(parent.getLeft(), val);
      }
      
      else{
        if(parent.getRight() == null)
          parent.setRight(new BinaryNode(val));
        else
          this._insertHelper(parent.getRight(), val);
      }
    }
  }
  
  inOrder(node = this.root){
    if(node == null)
      return;
    this.inOrder(node.getLeft());
    console.log(node.getData());
    this.inOrder(node.getRight());
  }
}


let x = new BinarySearchTree();

x.insert(4);
x.insert(6);
x.insert(5);
x.insert(2);
x.insert(8);
