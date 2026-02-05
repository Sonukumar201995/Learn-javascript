let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});

p.then((value) => {
    console.log("Handler 1:", value);
});

p.then((value) => {
    console.log("Handler 2:", value * 2);
});

p.then((value) => {
    console.log("Handler 3:", value * 3);
});
