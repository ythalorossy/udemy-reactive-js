'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.range(1, 10).do(function (a) {
    return console.log('From do ' + a);
}).map(function (a) {
    return a * a;
}).subscribe((0, _util.createSubscriber)("simple"));

_Rx2.default.Observable.range(1, 10).finally(function () {
    return console.log('From finally');
}).map(function (a) {
    return a * 2;
}).subscribe((0, _util.createSubscriber)("finnaly"));

_Rx2.default.Observable.range(1, 10).filter(function (a) {
    return a < 5;
}).subscribe((0, _util.createSubscriber)("filter"));

_Rx2.default.Observable.interval(1000).startWith(-1).subscribe((0, _util.createSubscriber)("interval"));