'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const interval$ = Rx.Observable.interval(1000)
//     .take(10)
//     .publish();

// setTimeout(()=> 
// {
//     interval$.connect();
// });

// setTimeout(()=>{
//     interval$.subscribe(createSubscriber("one"))
// },  1200);

// setTimeout(()=>{
//     interval$.subscribe(createSubscriber("two"))
// },  3200);

// const socket = { on: () => {}};

// const chatMessages$ = new Rx.Observable(observer => {
//     console.log("subscribed");
//     socket.on("chat:message", message => observer.next(message));
// }).publish();

// chatMessages$.connect();

// chatMessages$.subscribe(createSubscriber("one"));
// chatMessages$.subscribe(createSubscriber("two"));


// const simple$ = new Rx.Observable(observer => {
//     observer.next("one");
//     observer.next("two");
//     observer.next("three");
//     // observer.complete();

//     return () => console.log("Disposed");  // Called when unsubscribe method is called
// })

// //const published$ = simple$.publishLast();   // Only the last value
// const published$ = simple$.publishReplay(2);   // Only the two last value
// const sub1 = published$.subscribe(createSubscriber("one"));
// const connection = published$.connect();
// const sub2 = published$.subscribe(createSubscriber("two"));

// sub1.unsubscribe()
// sub2.unsubscribe()

// connection.unsubscribe();


var simple$ = new _rxjs2.default.Observable(function (observer) {
    observer.next("one");
    observer.next("two");
    observer.next("three");

    return function () {
        return console.log("Disposed");
    }; // Called when unsubscribe method is called
});

// const published$ = simple$.publishReplay(2).refCount();
var published$ = simple$.share(); // Will connect and disconnetec when all unsubscribe was called 
var sub1 = published$.subscribe((0, _util.createSubscriber)("one"));
var sub2 = published$.subscribe((0, _util.createSubscriber)("two"));

sub1.unsubscribe();
sub2.unsubscribe();

// const range$ =  Rx.Observable.range(1, 10);
// range$.subscribe( {
//         next(item)   { console.log(`${item}`); },
//         error(error) { console.log(`${error.stack || error}`)},
//         complete()   { console.log(`complete`)}
//     }
// );