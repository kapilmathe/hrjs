// somePromise = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve('hey, It worked !');
//         reject("Unable to fulfill promise")
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
//   }, (errorMessage)=> {
//     console.log('Error: ', errorMessage);
//   });

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b)
            } else {
                reject("Provided input values are not numbers")
            }
        }, 1500);
    })
}

asyncAdd(5, '7').then((message)=> {
    console.log(`Result: ${message}`)
    return asyncAdd(message, 33);
}).then((res)=>{
    console.log('Should be 45', res);
}).catch((errorMessage)=>{
    console.log(errorMessage)
});