class BinaryNode{
  constructor(val){
    this.data = val;
    this.left = null;
    this.right = null;
  }
  
  setData(val){
    this.data = val;
  }
  
  setLeft(node){
    if(!(node instanceof BinaryNode))
      throw new Error('Must be a node');
    this.left = node;
  }
  
  setRight(node){
    if(!(node instanceof BinaryNode))
      throw new Error('Must be a node');
    this.right = node;
  }
  
  getData(){
    return this.data;
  }
  
  getLeft(){
    return this.left;
  }
  
  getRight(){
    return this.right
  }
}
