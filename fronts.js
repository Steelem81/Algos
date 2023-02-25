class Node {
    constructor(data) {
        this.data = data;
        this.next=null;
    }
}

class SLL{
    constructor() {
        this.head = null;
    }
    addFront(value){
        var newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }


    removeFront(){
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
        
    }

    front(){
        return this.head.data
    }

    display() {
        var valList = []
        var runner = this.head
        while(runner !== null){
            valList.push(runner.data)
            runner=runner.next
        }
        console.log(valList)
        return valList
    }

}

SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
console.log(SLL1)
console.log(SLL1.front())
SLL1.removeFront()
console.log(SLL1.front())
SLL1.addFront(76)
SLL1.addFront(2)
SLL1.display()