import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

// Rx.Observable.timer(1000, 500)
//     .take(3)
//     .subscribe(createSubscriber("timer"));

// Rx.Observable.of("HELLO, WORLD")
//     .subscribe(createSubscriber("of"));

// const arr = [1, 2, 3, 4, 5];
// Rx.Observable.from(arr)
//     .map(i => i * 5)
//     .subscribe(createSubscriber("from"));

// Rx.Observable.throw(new Error("HEY"))
//     .subscribe(createSubscriber("throw"));

// Rx.Observable.empty()
//     .subscribe(createSubscriber("empty"));

// let sideEffect = 0;
// const defer$ = Rx.Observable.defer(() => {
//     sideEffect++;
//     return Rx.Observable.of(sideEffect);
// })

// defer$.subscribe(createSubscriber("defer$.one"));
// defer$.subscribe(createSubscriber("defer$.two"));
// defer$.subscribe(createSubscriber("defer$.three"));

// Rx.Observable.never()
//     .subscribe(createSubscriber("never"));

// Rx.Observable.range(10, 30)
//     .map(i => i * i)
//     .subscribe(createSubscriber("range"));