const {service, test} = require('./module1')

// interpolation
var str1 = "var"
let str2 = "let string"
console.log(`This is ${str1} string and this is ${str2} `)

// understanding exporting modules
console.log(service.name)
console.log(service.add(12,12))
console.log(test)

// Access object
let v= `this is ${1+1}`;
let o1 = {f:v};
console.log('Access fields on the object:',o1,'using dot o1.f:',o1.f,' using indexing:',o1['f'])

// Access array
let a = [1,2,3]
console.log('accessing array position:',a[2]);

// understanding Spread operator

let b = [...a];
let e = {...a};
console.log('Spread operator used to create object from array:',e,'access field:',a[1]);

let c = { 'f1' : 'v1', 'f2':'v2', 'm1':()=>{console.log('Inside arrow function');return 0;}}
let d = { ...c,'f3':'v3'}
console.log(b);
console.log('Creating object:',d,'with the help of object ',c);
d.m1()
d.m1 = ()=> console.log('I am modified by the object d')
d.m1()