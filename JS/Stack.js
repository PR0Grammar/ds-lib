class Stack {

    constructor() {
        this.stack = [];
        this.top = -1;
    }

    size() {
        return this.top + 1;
    }

    isEmpty() {
        return this.top == -1;
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.top];
    }

    push(val) {
        this.stack.push(val);
        this.top++;
    }

    pop(){
        if(this.isEmpty())
            return null;

        let rtrVal = this.stack[this.top];
        
        this.stack[this.top] = null;
        this.top--;

        return rtrVal;
    }

}

(function test() {
    let stack = new Stack();

    console.log(stack.size()); // 0
    console.log(stack.isEmpty()); // true
    console.log(stack.peek()); // null
    console.log(stack.pop()); // null

    stack.push(5);
    stack.push(3);
    stack.push(54);

    console.log(stack.size()); // 3
    console.log(stack.peek()); // 54
    console.log(stack.pop()); // 54
    console.log(stack.size()); // 2
    console.log(stack.peek()); // 3
    console.log(stack.isEmpty()); // false

})();