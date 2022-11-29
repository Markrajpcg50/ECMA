// import statements are hoisted
import {value1,add,Vehicle} from "./ECMAscriptbasics.js"

console.log(value1);

console.log(add(10,4));
//value1=101; exported variables cannot be reassigned
console.log(value1);

let v1=new Vehicle();
v1.drive();

