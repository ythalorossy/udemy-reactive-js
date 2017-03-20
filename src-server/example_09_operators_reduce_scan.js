import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Part 1 - Conventional Reduce

// function arrayReduce (array, accumulator, startValue ) {
//     let value = startValue;
//     for(let item of array) {
//         value = accumulator(value, item);
//     }
//     return value;
// }

// const values = [342, 432, 23, 1, 4];
// const sum = arrayReduce(values, (acc, i) => acc + i, 0);
// console.log(sum)

// const max = arrayReduce(values, Math.max, -1);

// console.log(max);


// Part 2 - Reduce Operator

// Rx.Observable.range(1, 10)
//     .merge(Rx.Observable.never())               // Will never finish the reduce operator.
//     .reduce( (acc, value) => acc + value)       
//     .subscribe(createSubscriber("reduce"));

// // Part 3 - scan Operator
// Rx.Observable.range(1, 10)
//     .merge(Rx.Observable.never())               // Will never finish the scan operator.
//     .scan( (acc, value) => acc + value)         // Scan operator will be openned for always
//     .subscribe(createSubscriber("scan"));    


Rx.Observable.range(1, 10)
    .map(i => i * i)
    .scan( ([last], current) => [current, last], [])
    .subscribe(createSubscriber("reduce"));
