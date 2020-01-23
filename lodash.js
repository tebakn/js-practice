
//first install npm package for lodash
// >> npm i lodash


const _ = require("lodash");

const name = "shreshth"; 

if (_.isString(name)){

    console.log("working");

}
else{

    console.log("not working");

}

console.log(_.upperCase(name)); //SHREsHTH
console.log(_.random(0,9)); //random number

//create chunks of array

const x = _.chunk([1,2,3,4,5,6],2);
console.log(x);

console.log(_.compact([0,1,false,2,'',3]));  //_.compact removes falsey values




//concat function
var arr1 = [2];
var other = _.concat(arr1, 1, 2, [3], [[4]], "new");
console.log("first array", arr1);
console.log("concat array", other);
