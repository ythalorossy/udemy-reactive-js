import Rx from 'rxjs';
import {createSubscriber} from './lib/util';
import fs from 'fs';

// Part 01 - Observable to remove checks

// fs.readdir("./src-server", (err, items) => {
//     if (err) console.error(err);
//     else {
//         console.log(items);
//     }
// });

// const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);
// readdir$("./src-server")
//     .mergeMap(files => Rx.Observable.from(files))   //return [file1,file2, ..., fileN]
//     .map(file => `MANIPULATED ${file}`)
//     .subscribe(createSubscriber("readdir"));

 
// Part 02 - Promise to Observable

// function getItems () {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve("HELLO");
//         }, 100)
//     });
// }

// Rx.Observable.fromPromise(getItems())
//     .subscribe(createSubscriber("promise"));