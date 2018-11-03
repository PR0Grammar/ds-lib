class AVLNode {
    constructor(key, val, height, size){
        this.key = key;
        this.val = val;
        this.size = size;
        this.height = height;
        this.left = null;
        this.right = null;
    }
}

module.exports = AVLNode;