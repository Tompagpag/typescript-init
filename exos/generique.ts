// class Queue<T>{
//     private _elems: T[] = [];

//     push(elem: T): void {
//         this._elems.push(elem);
//     }

//     pop(): T | undefined {
//         return this._elems.shift();
//     }

//     // getter
//     get elem(): T[] { return this._elems; }

// }


// let queue = new Queue<number>();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);

// console.log(queue.pop()) // affiche 1

// let queueArray = new Queue<number[]>();
// queueArray.push([1, 2]);
// queueArray.push([3, 4]);
// queueArray.push([5, 6]);
// queueArray.push([7, 8]);

// console.log(queueArray.pop()); // affiche [1,2]


//generics
interface Box<Type> {
    a: Type
}

let MyBox: Box<number> = {
    a: 8
}


function extend<T, U>(first: T, second: U): T & U {
    return { ...first, ...second };
  }
