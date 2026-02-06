let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 1')
    },1000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 2')
    },2000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('value 3')
    },3000)
})

Promise.all([p1, p2, p3])
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})