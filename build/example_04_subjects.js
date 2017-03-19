'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const simple$ = new Rx.Subject();

// simple$.subscribe(createSubscriber("simple$"));

// simple$.next("HELLO");
// simple$.next("WORLD");
// simple$.complete();

// const interval$ = new Rx.Observable.interval(1000).take(5);
// const intervalSubject$ = new Rx.Subject();
// interval$.subscribe(intervalSubject$);

// intervalSubject$.subscribe(createSubscriber("sub1"));
// intervalSubject$.subscribe(createSubscriber("sub2"));
// intervalSubject$.subscribe(createSubscriber("sub3"));

// setTimeout(() => {
//     intervalSubject$.subscribe(createSubscriber("LOOK AT ME!"));
// }, 3000);

// const currentUser$ = new Rx.BehaviorSubject({isLoggedIn: false});
// const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

// isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));
// currentUser$.next({isLoggedIn: false});

// setTimeout(() => {
//     currentUser$.next( {isLoggedIn : true, name: "nelson"});
// }, 2000);

// setTimeout(() => {
//     isLoggedIn$.subscribe(createSubscriber("delayed"));
// }, 1000);

// Part 2 - Replay Subject

// const replay$ = new Rx.ReplaySubject(3);

// replay$.next(1);
// replay$.next(2);

// replay$.subscribe(createSubscriber("one"));

// replay$.next(3);
// replay$.next(4);
// replay$.next(5);

// replay$.subscribe(createSubscriber("two"));


// Part 3 - Async Subject

var apiCall$ = new _rxjs2.default.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe((0, _util.createSubscriber)("one"));
apiCall$.next(2);
apiCall$.complete(); // All subscribes will be called only after the complete method be called

setTimeout(function () {
    apiCall$.subscribe((0, _util.createSubscriber)("two"));
}, 2000);