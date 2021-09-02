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
    console.log("example 1: resolved", sum)
}).catch((sum) => {
    console.log("Rejected Promise", sum);
})

// Promise Chaining
add(12, 12).then((sum) => {
    return add(sum, 12)
}).then((sum2) => {
    return add(sum2, 12)
}).then((sum3) => {
    console.log('example 1: Result after promise chaining:', sum3)
}).catch((e) => {
    console.log('error', e)
})

// Just another example
const multiply = (a, b) => {
    if (a < 12) {
        throw new Error("Invalid number ")
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a * b * 10)
        }, 2000)
    })
}

multiply(12, 12)
    .then((result) => {
        return multiply(12, result)
    }).then((result1) => {
    console.log('example 2: final result:',result1)
}).catch((err) => {
    console.log('error:', err)
})