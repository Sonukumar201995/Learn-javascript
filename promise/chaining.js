let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise resolve');
        resolve(56);
    }, 2000)
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise 2 resolved');
        }, 3000)
    });
    return p2;   // ⭐ important
}).then((value) => {
    console.log(value);
    console.log('we are done');
})
