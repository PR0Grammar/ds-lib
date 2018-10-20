class PriorityQueue {
  constructor(compFunc){
    this.keys = [];
    this.comparator = compFunc || (a,b) => a > b; //Default to max pq
  } 
  
  insert(val){
    this.keys.push(val);
    this.swim(this.len() - 1);
  }
  
  max(){
    return this.keys[0];
    
  }
  
  extractMax(){
    let max = this.keys[0];  //Get the top level key
    this.swap(0, this.len() - 1); //Put the last inserted as the root
    this.keys.pop(); //Remove the max key value as a leaf
    this.sink(0); //Restore the heap property
    return max;
  }
  
  
  greaterPriority(a, b){
    return this.comparator(a, b);
  }
  
  sink(i){
    let leftChildIndex = this.leftChildIndex(i);
    let rightChildIndex = this.rightChildIndex(i);
    let size = this.len();
    
    //We check against the leftChild because of the order of insertion
    while(leftChildIndex < size){
      let j = leftChildIndex;
      
      //If the right child has greater priority, set it as j
      if(j < size && this.greaterPriority(rightChildIndex, leftChildIndex))
        j++;
      //If the current index is greater priority than its children, we're done
      if(!this.greaterPriority(i, j ))
        break;
      //Swap the parent with the child of greater priority
      this.swap(i, j);
      //Set the pos of the child as the "root"
      i = j;
    }
  }
  
  swim(i){
    //TODO
  }
  
  swap(a, b){
    let temp = this.keys[a];
    this.keys[a] = this.keys[b];
    this.keys[b] = temp;
  } 
    
  len(){
    return this.keys.length
  }
  
  parentIndex(i){
    return Math.floor((i - 1) / 2);
  }
  leftChildIndex(i){
    return 2 * i + 1;
  }
  rightChildIndex(i){
    return 2 * i + 2;
  }
  
  isEmpty(){
    return this.keys.length == 0;
  }
}

class MaxPQ extends PriorityQueue {
  constructor(){
    super();
  }
}

class MinPQ extends PriorityQueue {
  constructor(){
    super((a,b) => a < b);
  }
}
