async function Weather() {

    let DelhiW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('21 degree')
        }, 1000);
    })

    let BangaloreW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('20 degree');
        }, 2000)
    })

    let d = await DelhiW;
    let b = await BangaloreW;

    return [d, b];   // return important
}

let w = Weather();
console.log(w); // Promise

// w.then((result) => {
//     console.log(result);
// })
