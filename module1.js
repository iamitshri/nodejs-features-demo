
let service1 = {};

service1.name = "this is a test service"

service1.add = function (a,b){
    if(a === null || b === null)
        throw new Error("a is null");
    console.log(`adding arguments ${a} and ${b}`);
    return a+b;
}


module.exports.test = "another test ";

module.exports.service = service1;
