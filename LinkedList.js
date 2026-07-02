class LinkedList {
    constructor(head){
        this.head = null;

    }

    addFirst(node){
        node.next = this.head;
        this.head = node;
               

    }
    addLast(node){
        if(this.head === null){
            this.head = node;
            return;
        }

            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
     }

     indexOf(node){
         let current =  this.head;
         let index= 0;

         while(current !== null){
             if(current === node){
                 return index;
             }
             current = current.next;
             index++;
         }
         return -1;

     }
     removeAt(index) {
        // Case 1: remove head
        if (index === 0 && this.head !== null) {
            this.head = this.head.next;
            return;
        }

        // Case 2: remove non-head
        let current = this.head;
        let previous = null;
        let i = 0;

        while (current !== null && i < index) {
            previous = current;
            current = current.next;
            i++;
        }

        if (current !== null) {
            // stitch previous to current.next
            previous.next = current.next;
        }
    }
    
}

module.exports = LinkedList;
