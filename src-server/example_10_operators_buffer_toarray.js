import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Part 1 - Buffer

// Rx.Observable.range(1, 110)
//     .bufferCount(10)
//     .subscribe(createSubscriber("items"));

// Rx.Observable.interval(1000)
//     .bufferTime(2000)
//     .subscribe(createSubscriber("bufferTime"));

// Rx.Observable.interval(500)
//     .buffer(Rx.Observable.interval(2000))
//     .subscribe(createSubscriber("buffer"));

// const stopSubject$ = new Rx.Subject();
// Rx.Observable.interval(500)
//     .buffer(stopSubject$)
//     .subscribe(createSubscriber("buffer"));

// setTimeout( () => {
//     stopSubject$.next();
// }, 3000);    


// Part 02 - To Array

Rx.Observable.range(1, 10)
    // .merge(Rx.Observable.never())
    .toArray()
    .subscribe(createSubscriber("range"));