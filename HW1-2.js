class Node
{
    constructor()
    {
        this.value=0;
        this.node=null;
    }
}
 
class Stack
{
    constructor()
    {
        this.top=null;
    }
     
    push(input)
    {
        let temp = new Node();
        temp.value = input;
        temp.node = this.top;
        this.top = temp;
    }

    isEmpty()
    {
      return this.top == null;
    }
  
    peek()
    {
        if (!this.isEmpty()) {
            console.log(this.top.value)
            console.log('---------')
        }
        else {
            console.log("Empty Stack")
            console.log('---------')
            return -1;
        }
    }
     

    pop()
    {
        if (this.top == null) {
            console.log('[stack is empty]')
            console.log('---------')
            return;
        }
  
        this.top = this.top.node;
    }
     
    check()
    {
        if (this.top == null) {
            console.log('Empty Stack')
            console.log('---------')
             
        }
        else {
            let temp = this.top;
            while (temp != null) {
                console.log(temp.value)
                temp = temp.node;
            }
          console.log('---------')
        }
    }
}

let myStack = new Stack()
myStack.push('Milk')
myStack.push('Egg')
myStack.push('Honey')
myStack.check()
myStack.pop()
myStack.check()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.push('Sosig')
myStack.push('Tuna')
myStack.peek()
myStack.push('Pilk')
myStack.push('Bepis')
myStack.check()
myStack.peek()
