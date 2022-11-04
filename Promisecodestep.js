//this is initizing the promise when promixe is resolve the then part is executed ohterwise catch part is excuted and show error written in the reject.

// const data = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        // resolve('first run')
//       // reject('rejected')
//     }, 2000);
// })
//the final keyword work with both resolve and reject
// data.finally((item)=>{
//    console.log('this is finally keyword',item);
// }).catch((e)=>{
//     console.log('rejected finally',e);
// })
// data.then((item)=>{
//       console.log(item);
// }).catch((e)=>{
//     console.log('the error is',e);
// })

//this is all about the promise all ,promiseseelted,promise.race


//In the promise.all the all promise grater time find and then print the reslovetiion if any one promise is reject then all promise are rejected
//overcome the problam of promise all we used promise.allsettled in which if one promise are reject then another promise work ssame as and show rejected promise
//promise.race are used for synchronace promice working it means the first compelte the promise it,s resolve and another promise is run
const data = Promise.all([
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('2 second')
        }, 2000);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('3 seconds')
        }, 3000);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('1 seconds')
        }, 1000);
    })
])

data.then((result) => {
    console.log('resolve the program',result);
}).catch((err) => {
    console.log('the error is',err);
});