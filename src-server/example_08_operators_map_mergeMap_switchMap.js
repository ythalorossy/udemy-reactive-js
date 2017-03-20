import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Map

// Rx.Observable.interval(1000)
//     .take(3)
//     .map(a => a * a )
//     .subscribe(createSubscriber("map"));

// function arrayMap(array, projection) {
//     const returnArray = [];
//     for (let item of array) {
//         const projected = projection(item);
//         returnArray.push(projected);
//     }
//     return returnArray;
// }

// // console.log(arrayMap([1,2,3], a => a * a ));

// function arrayMergeMap(array, projection) {
//     const returnArray = [];
//     for (let item of array) {
//         const projectedArray = projection(item);
//         for (let projected of projectedArray) {
//             returnArray.push(projected);
//         }
//     }
//     return returnArray;
// }

// const albums = [
//     {title: "Album 1", tracks: [{id:1, title:"Track 1"}, {id:2, title:"Track 1"}]},
//     {title: "Album 2", tracks: [{id:1, title:"Track 43"}, {id:2, title:"Track 432"}]}
// ];

// const tracksWrong = arrayMap(albums, album => album.tracks);
// const tracksRight = arrayMergeMap(albums, album => album.tracks);

// // console.log(JSON.stringify(tracksWrong));
// console.log(JSON.stringify(tracksRight));


// Rx.Observable.range(1, 3)
//     .mergeMap(i => Rx.Observable.timer(i * 1000).map(() => `After ${i} seconds`))
//     .subscribe(createSubscriber("mergeMap"));



// Rx.Observable.fromPromise(getTracks())
//     .mergeMap(tracks => Rx.Observable.from(tracks))
//     .subscribe(createSubscriber("tracks"));

// function getTracks() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(["tack 1", "track 2", "track 3"]);
//         }, 1000)
//     })
// };


Rx.Observable.of("my query")
    .do(() => console.log("Querying"))
    .mergeMap(a => query(a))
    .do(() => console.log("After query"))
    .subscribe(createSubscriber("query"));

function query(value) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("THIS IS THE VALUE");
        }, 1000)
    });
}