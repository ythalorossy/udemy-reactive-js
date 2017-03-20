'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const simple$ = new Rx.Observable(observer => {
//     observer.next(1);
//     observer.next(2);
//     // observer.next(3);
//     // observer.next(4);

//     observer.complete()
// });

// simple$.first()
//     .subscribe(createSubscriber("first"));  // If nothing returned an erro will be throw

// simple$.last()
//     .subscribe(createSubscriber("last"));

// simple$.single()
//     .subscribe(createSubscriber("single")); // If more then one return will throw error 

// simple$.take(2)
//     .subscribe(createSubscriber("take")); 

// simple$.skip(2)
//     .subscribe(createSubscriber("skip"));

// simple$
//     .take(2)
//     .skip(1)
//     .subscribe(createSubscriber("take/skip"));


// Rx.Observable.interval(500)
//     .skipWhile( i => i < 4)
//     .takeWhile( i => i < 10)
//     .subscribe(createSubscriber("skipWhile"));


_Rx2.default.Observable.interval(500).skipUntil(_Rx2.default.Observable.timer(2000)).takeUntil(_Rx2.default.Observable.timer(4000)).subscribe((0, _util.createSubscriber)("skipUntil"));