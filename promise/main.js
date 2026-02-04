let promise = new Promise(function(resolve, reject){
    console.log('hello');
    resolve(56);
});

console.log('hello one');

setTimeout(function(){
    console.log('hello two on 2 seconds')
}, 2000);

console.log('hello three');
console.log(promise);
