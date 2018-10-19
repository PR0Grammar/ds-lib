class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(data){
    let node = new BinaryTreeNode(data);
    if(this.root == null)
      root = node;
    else
      this.insertNode(this.root, node); //Starting from root, find where it belongs
    
  }
  
  insertNode(parentNode, newNode){
  	if(newNode.getVal() < parentNode.getVal()){
    	if(parentNode.getLeft() == null){
      	parentNode.setLeft(newNode.getVal());
      }else{
      	this.insertNode(parentNode.getLeft(), newNode)
      }
    }else{
    	if(parentNode.getRight() == null){
      	parentNode.setRight(newNode.getVal());
      }else{
      	this.insertNode(parentNode.getRight(), newNode);
      }
    }
  }
    // remove(data) 
  remove(data){
  	this.root = this.removeData(this.root, data);
  }
  
  removeNode(node, key){
  	if(node == null)
    	return null;
    
    //Search left or right depending on value
    if(key < node.getVal()){
    	node.left = this.removeNode(node.left, key);
      return node;
    }
    else if(key > node.getVal()){
    	node.right = this.removeNode(node.right, key);
      return node;
    }   
    //Once found
    else{
    	if(this.isLeaf(node)){
      	node = null;
        return node;
      }
      else if(node.getLeft() == null){
      	node = node.getRight();
        return node;
      }
      else if(node.getRight() == null){
      	node = node.getLeft();
        return node;
      }
      
      //If node has two children, we replace it with the smallest value of its right
      //subtree and remove that smallest right node
      let smallestNode = this.findMinNode(node.getRight());
      node.setData(smallestNode.getData());
      
      node.setRight(this.removeNode(node.getRight(), smallestNode.getData()));
    }
  }
  
  isLeaf(node){
  	return node.getRight() == null && node.getLeft() == null;
  }
  
  inOrderPrint(node){
  	if(node == null)
    	return;
    this.inOrderPrint(node.getLeft());
    console.log(node.getVal());
    this.inOrderPrint(node.getRight());
  }
  
  preOrderPrint(node){
  	if(node == null)
    	return;
    console.log(node.getVal());
    this.preOrdePrint(node.getLeft());
    this.preOrderPrint(node.getRight());
  }
  
  postOrderPrint(node){
  	if(node == null)
    	return;
    this.postOrderPrint(node.getLeft());
    this.postOrderPrint(node.getRight());
    console.log(node.getVal());
  }
  
  getRoot(){
  	return this.root;
  }
    // Helper function 
    // findMinNode() 
    // search(node, data) 
}
