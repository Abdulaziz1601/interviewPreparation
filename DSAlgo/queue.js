function Queue () {
    const collection = [];
    this.print = function() {
        console.log(collection);
    };
    
    this.enqueue  = function(el) {
        collection.push(el);
    };

    this.dequeue = function() {
        return collection.shift();
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0;
    };
}


// let q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

function PriorityQueue () {
    let collection = [];
    this.printCollection = function() {
        console.log(collection);
    };

    this.enqueue = function (el) {
        if(this.isEmpty()) {
            collection.push(el);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if(el[1] < collection[i][1]) { // checking priorities
                    collection.splice(i, 0, el);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(el);
            }
        }
    };
    this.dequeue = function () {
        let value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0;
    };
};

let pq = new PriorityQueue();
pq.enqueue(["Abdullaev Abdulaziz", 2]);
pq.enqueue(["Abdullaev Ali", 3]);
pq.enqueue(["Abdullaev John", 1]);
pq.printCollection();    
pq.dequeue();
pq.front();
pq.printCollection();