import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Part 1 - Merge

// Rx.Observable.interval(1000)
//     .merge(Rx.Observable.interval(500))
//     .take(5)
//     .subscribe(createSubscriber("merge1"));

// Rx.Observable
//     .merge(
//         Rx.Observable.interval(1000).map(i => `${i} seconds`),
//         Rx.Observable.interval(500).map(i => `${i} half seconds`))
//     .take(5)
//     .subscribe(createSubscriber("merge1"));

// const currentUser$ = Rx.Observable.merge(
//     socket.on$("login").map(user => processUser(user)),
//     socket.on$("logout").map(() => null)
//     );    


// Part 2 - Concat
// Rx.Observable.interval(500)
//     .take(5)
//     .filter(i => i < 2)
//     .concat(Rx.Observable.range(10, 3))
//     .subscribe(createSubscriber("concat1"));

// Rx.Observable.concat(
//     Rx.Observable.interval(1000).map(i => `${i} seconds`).take(3),
//     Rx.Observable.interval(500).map(i => `${i} half seconds`).take(3))
//     .subscribe(createSubscriber("concat2"));
