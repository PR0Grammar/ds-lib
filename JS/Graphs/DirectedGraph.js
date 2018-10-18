class DirectedGraph {
  constructor(){
    this.nodes = {};
  }
  
  addNode(val){
    if(this.nodes[val])
      throw new Error('node already exists');
    this.nodes[val] = new Set();
  }
  
  addEdge(nodeFrom, nodeTo){
    if(this.nodes[nodeFrom] == undefined || this.nodes[nodeTo] == undefined)
      throw new Error('node(s) is undefined');
    this.nodes[nodeFrom].add(nodeTo);
  }
  
  getEdges(node) {
    if(!this.nodes[node])
      throw new Error('node not found');
    return Array.from(this.nodes[node]);
  }
  
  hasEdge(nodeFrom, nodeTo){
    if(!this.nodes[nodeFrom])
      throw new Error('node not found');
    return this.nodes[nodeFrom].has(nodeTo);
  }
  
 removeEdge(nodeFrom, nodeTo){
  if(!this.nodes[nodeFrom])
    throw new Error('node not found');
   this.nodes[nodeFrom].delete(nodeTo);
 }
  
 removeNode(node){
  if(this.nodes[node])
    throw new Error('node not found.');
   
   for(let currentNode in this.nodes){
     if(this.nodes[currentNode].has(node)){
       this.nodes[currentNode].delete(node);
     }
   }
   delete this.nodes[node];
 }
}


let x = new DirectedGraph();

x.addNode(5);
x.addNode(4);
x.addNode(6);
x.addEdge(5,4);
x.addEdge(5,6);

console.log(x.getEdges(5)); //[4,6]
console.log(x.getEdges(4)); // []

x.removeEdge(5, 4);
console.log(x.getEdges(5)); //[6]
