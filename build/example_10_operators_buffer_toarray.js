'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_Rx2.default.Observable.range(1, 10)
// .merge(Rx.Observable.never())
.toArray().subscribe((0, _util.createSubscriber)("range"));