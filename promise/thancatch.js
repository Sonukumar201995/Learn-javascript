let p1=new Promise(function(resolve,reject){
    resolve(56);

    setTimeout(() => {
        console.log('resolve promise')
    }, 2000);
})

let p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(new Error('i am eroor'))
    },3000)
})

p1.then((value)=>{
    console.log(value);
})

p2.catch((error)=>{
    console.log('some error occured in p2')
})