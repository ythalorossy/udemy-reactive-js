import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';
// ------------------
// Part 1

// const simple$ = new Rx.Observable(observer => {
//     console.log('Generating observable');
//     setTimeout(() => {
//         observer.next('An Item!');
//         setTimeout(() => {
//             observer.next('Anoter Item!');
//             observer.complete();
//         }, 1000)
//     }, 1000);
// });

// simple$.subscribe(
//     item => console.log(`one.next ${item}`),
//     error => console.error(`one.error ${error}`),
//     () => console.log(`one.complete`));

// const error$ = new Rx.Observable(observer => {
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
    return new Rx.Observable(observer =>{
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`);
            observer.next(index++);
        }, time);

        return () => {
            console.log('Interval Unsubscribe');
            clearInterval(interval);
        }
    });
};

// const everySecond$ = createInterval$(1000);
// const subscription = everySecond$.take(3).subscribe(createSubscriber('one'));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3000)

function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next: (item)=>{
                observer.next(item);
                if (++count >= amount) {
                    observer.complete();
                }
            },
            error(error) { observer.error(error); },
            complete() { observer.complete()}
        });

        return () => subscription.unsubscribe();
    });
}

const everySeconds$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySeconds$, 5);
const subscription = firstFiveSeconds$.subscribe(createSubscriber('one'));