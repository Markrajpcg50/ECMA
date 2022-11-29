"use strict";
exports.__esModule = true;
// import statements are hoisted
var ECMAscriptbasics_js_1 = require("./ECMAscriptbasics.js");
console.log(ECMAscriptbasics_js_1.value1);
console.log((0, ECMAscriptbasics_js_1.add)(10, 4));
//value1=101; exported variables cannot be reassigned
console.log(ECMAscriptbasics_js_1.value1);
var v1 = new ECMAscriptbasics_js_1.Vehicle();
v1.drive();
