//TODO:

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
    // remove(data) 
                  
  
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
}

