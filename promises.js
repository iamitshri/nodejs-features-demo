const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
            // resolve(a + b)
        }, 1000)
    })
}

// Promise
add(1, 2).then((sum) => {
    console.log("resolved",sum)
}).catch((sum) => {
    console.log("Rejected Promise",sum);
})

// Promise Chaining
add(12,12).then((sum) => {
    return add(sum, 12)
}).then((sum2) => {
    return add(sum2,12)
}).then((sum3)=>{
    console.log('Result after promise chaining:',sum3)
}).catch((e)=>{
    console.log('error',e)
})


const multiply =  (a, b) => {
    if (a < 12) {
        throw new Error("Invalid number again")
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a * b * 10)
        }, 2000)
    })
}

console.log('final example:')
// regular way of doing multiple operations
multiply(12, 12)
    .then((result) => {
        console.log('return:', result)
        return multiply(12 , result)
    }).then((result1) => {
    console.log(result1)
}).catch((err) => {
    console.log('error:',err)
})