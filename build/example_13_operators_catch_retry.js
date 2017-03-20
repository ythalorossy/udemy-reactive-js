'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rx.Observable.concat(
//     Rx.Observable.of(42),
//     Rx.Observable.throw(new Error("BLEGH")),
//     Rx.Observable.of(42))
//     .subscribe(createSubscriber("catch"));


getApi().retry(3).catch(function (error) {
    return _Rx2.default.Observable.of(error);
}).do(function () {
    return console.log("THING");
}).subscribe((0, _util.createSubscriber)("api"));

function getApi() {
    return new _Rx2.default.Observable(function (observer) {
        console.log("Getting API");
        setTimeout(function () {
            // observer.next();
            // observer.complete();
            observer.error(new Error());
        }, 1000);
    });
}