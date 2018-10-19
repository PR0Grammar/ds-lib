class BinaryTreeNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null
  }
  getVal(){
    return this.val;
  }
  setVal(val){
    this.val = val;
  }
  getLeft(){
    return this.left;
  }
  setLeft(val){
    this.left = new BinaryTreeNode(val);
  }
  getRight(){
    return this.right;
  }
  setRight(val){
    this.right = new BinaryTreeNode(val);
  }
}

export default BinaryTreeNode;
