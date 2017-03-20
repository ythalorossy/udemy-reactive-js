import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Rx.Observable.concat(
//     Rx.Observable.of(42),
//     Rx.Observable.throw(new Error("BLEGH")),
//     Rx.Observable.of(42))
//     .subscribe(createSubscriber("catch"));



getApi()
    .retry(3)
    .catch(error => Rx.Observable.of(error))
    .do(() => console.log("THING"))
    .subscribe(createSubscriber("api"));

function getApi() {
    return new Rx.Observable(observer => {
        console.log("Getting API");
        setTimeout(() => {
            // observer.next();
            // observer.complete();
            observer.error(new Error());
        }, 1000)
    })
}