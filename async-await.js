// When dealing with async await, producer does not have to change the way its creating promises, only the consumer of those promises is changed to use async await
const multiply = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 12) {
                reject("Invalid number again")
            }
            resolve(a * b)
        }, 2000)
    })

}

//  await is only valid in async function
async function demoAsync() {
    try {

        // in promise chaining, x,y and z values wont be available easily to use since they are part of different code blocks unless we initialize them at the top well before
        // using async await code looks synchronous and easy to understand.
        // In try catch block, catch is used if the promise is not fulfilled
        // in the example below, z waits for y, y waits for x to get computed.
        let x = await multiply(12, 12)
        let y = await multiply(x, 12)
        let z = await multiply(y, 12)
        console.log(x, y, z)
    } catch (e) {
        console.error(e);
    }

    // if there are failures from any promise those can be handled using try catch
    try {
        let x = await multiply(11, 12)
        console.log(x);
    } catch (e) {
        console.log('error from the function:', e)
    }
}

demoAsync()
