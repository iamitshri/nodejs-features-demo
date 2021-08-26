const {service, test} = require('./module1')
const assert = require("assert")
const {strictEqual} = require("assert");

// interpolation
var str1 = "var"
let str2 = "let string"
console.log(`This is ${str1} string and this is ${str2} `)

// understanding exporting modules
console.log(service.name)
console.log(service.add(12, 12))
console.log(test)

// Access object
let v = `this is ${1 + 1}`;
let o1 = {f: v};
console.log('Access fields on the object:', o1, 'using dot o1.f:', o1.f, ' using indexing:', o1['f'])

// Access array
let a = [1, 2, 3]
console.log('accessing array position:', a[2]);

// understanding Spread operator
let b = [...a];
let e = {...a};
console.log('Spread operator used to create object from array:', e, 'access field:', a[1]);

let c = {
    'f1': 'v1', 'f2': 'v2', 'm1': () => {
        console.log('Inside arrow function');
        return 0;
    }
}
let d = {...c, 'f3': 'v3'}
console.log(b);
console.log('Creating object:', d, 'with the help of object ', c);
d.m1()
d.m1 = () => console.log('I am modified by the object d')
d.m1()


// Understanding destructuring
let arr1 = [1, 2, [3, 4]];
let [v1, v2, v3] = arr1;
assert.strictEqual(v1, arr1[0], "equal");
assert.strictEqual(v2, arr1[1], "equal");
assert.strictEqual(v3[0], arr1[2][0], "equal");
assert.strictEqual(v3[1], arr1[2][1], "equal");
assert.strictEqual(v3, arr1[2], "equal");

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [v4, v5, v6, ...v7] = arr2
assert.strictEqual(v4, arr2[0], 'expected equal')
assert.strictEqual(v5, arr2[1], 'expected equal')
assert.strictEqual(v6, arr2[2], 'expected equal')
assert.strictEqual(v7.length, arr2.slice(3).length, 'expected equal');

let f1,f2,objSpread;
 ({f1, f2, ...objSpread} = {f1: 'v1', f2: 'v2', f3: 'v3'})
console.log('f1:', f1);
console.log('f2:', f2);
console.log('objSpread:', objSpread);

/**
 *
 */
   function doLongOperation(){

    return new Promise( ()=>setTimeout( () =>{
        console.log('Starting time consuming operation at',new Date())
         for(let i=0; i < 10000;i++){
             for(let j=0; j < 1000;j++){
                 for(let k=0; k < 1000;k++){
                 }
             }
         }
         console.log('Finished with the tasks at',new Date())
     }, 10));
}


async function handler () {
    let response;
    try {
        response = await doLongOperation();
        console.log(response)
    } catch (err) {
        console.error(' error', err);
        return "failed";
    }

    return "Got the result finally:" + new Date();
}


console.log('calling handler:',handler(),new Date())
console.log('lets do something else while we execute long operation')


