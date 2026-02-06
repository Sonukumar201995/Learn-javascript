function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server down")
        }, 1000)
    })
}

async function fetchData() {
    try {
        let data = await getData()
        console.log(data)
    } catch (err) {
        console.log("Error:", err)
    }
}

fetchData()
