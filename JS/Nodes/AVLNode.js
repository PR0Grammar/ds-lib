class AVLNode {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.size = 1;
        this.height = 0;
        this.left = null;
        this.right = null;
    }
}

module.exports = AVLNode;