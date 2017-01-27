'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------
// Part 1

// const simple$ = new RX.Observable(observer => {
//     console.log('Generating observable');
//     setTimeout(() => {
//         observer.next('An Item!');
//         setTimeout(() => {
//             observer.next('Anoter Item!');
//             observer.complete();
//         }, 1000)
//     }, 1000);
// });

// const error$ = new RX.Observable(observer => {
//     observer.error(new Error('STUFF'));
// });

// error$.subscribe(
//     item => console.log(`one.next ${item}`),
//     error => console.log(`one.error ${error}`),
//     () => console.log('one.complete'));

// setTimeout(() => {
//     simple$.subscribe({
//         next: item => console.log(`two.next ${item}`),
//         error(error){
//             console.log(`two.error ${error}`);
//         },
//         complete: function () {
//             console.log('two.complete');
//         }
//     });
// }, 3000);

// ------------------
// Part 2


function createInterval$(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log('Generating ' + index);
            observer.next(index++);
        }, time);

        return function () {
            console.log('Interval Unsubscribe');
            clearInterval(interval);
        };
    });
};

// const y$ = createInterval$(1000).subscribe(createSubscriber('ythalo'));

// setTimeout(() => {
//     y$.unsubscribe();
// }, 5000)

function take$(sourceObservable$, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        var subscription = sourceObservable$.subscribe({
            next: function next(item) {
                observer.next(item);
                if (++count >= amount) {
                    observer.complete();
                }
            },
            error: function error(_error) {
                observer.error(_error);
            },
            complete: function complete() {
                observer.complete();
            }
        });

        return function () {
            return subscription.unsubscribe();
        };
    });
}

var everySeconds$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySeconds$, 5);
var subscription = firstFiveSeconds$.subscribe((0, _util.createSubscriber)('one'));