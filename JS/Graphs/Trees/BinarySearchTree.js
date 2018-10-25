class BinarySearchTree {
  constructor(){
    this.root = null;
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
}
