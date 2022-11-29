"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
exports.__esModule = true;
exports.Vehicle = exports.add = exports.value1 = void 0;
console.log("Hello World");
//let a=10;
//console.log(a+a);
function greetPerson(name) {
    var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "hai there";
    }
    console.log(greet);
}
greetPerson("Chandle");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); //10
    console.log(b_1); //20 // let is block scoped
}
console.log(a); //10 because a is a var
console.log(b); // 2
var c = 1;
var c = 2;
var d = 1;
//let d=2; once declared it cannot be redeclared
// instead of IFFE we use let
for (var i = 1; i <= 5; i++) {
    //setTimeout(function(){console.log(i);},1000);
}
// const
var num1;
var num2 = 10;
var obj1 = {
    name: "Joatmon"
};
console.log(obj1.name);
obj1.name = "Chandler";
console.log(obj1.name);
// let vs const
var pi = 3.14;
var MAX_SIZE = 100;
var aa = 5;
var bb = 10;
aa = aa + bb;
bb = aa - bb;
aa = aa - bb;
console.log(aa);
console.log(bb);
// arrow function
var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue());
var getArrowvalue = function (m, bonus) { return 10 * m + bonus; };
console.log(getArrowvalue(5, 50));
console.log(typeof getArrowvalue);
var employee = {
    id: 1,
    greet: function () {
        // setTimeout(()=>{console.log(this.id)},1000);
        //console.log(this.id);
    }
};
employee.greet();
var percentBonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
// rest operator/paramenter
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    //console.log(colors);// array
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of Colors";
//displayColors(message,'Red');
//displayColors(message,'Red','Blue');
//displayColors(message,'Red','blue','green');
// spread operator/parameter
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors.apply(void 0, __spreadArray([message], colorArray, false)); // at function call
// Object Literals
var firstname = "Chandler";
var lastname = "Bings";
var person = {
    firstname: firstname,
    lastname: lastname
};
//console.log(person.firstname);
//console.log(person.lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        fullname: fullname,
        lastname: lastname,
        firstname: firstname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Gellar", 32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
var ln = "last Name";
var person1 = (_a = {
        "first Name": "Chandler"
    },
    _a[ln] = "Bing",
    _a);
console.log(person1["first Name"]);
console.log(person1["last Name"]);
// destructuring array
var employees = ["Chandler", "Bing"];
//let [fname,lname,gender="Male"]=employees;
//console.log(fname);
//console.log(lname);
//console.log(gender);
console.log(person1["first Name"]);
// destructring Object
var employees2 = {
    fname: "Chandler",
    lname: "Bing",
    gender: "Male"
};
var f = employees2.fname, l = employees2.lname, g = employees2.gender;
console.log(f);
console.log(l);
console.log(g);
// string templates
var user = "Chandler";
var greet = "Welcome $(user) to ES2015\n            this is the second line\n            third";
console.log(greet);
// for of loop
var colors2 = ['red', 'blue', 'green'];
for (var _i = 0, colors2_1 = colors2; _i < colors2_1.length; _i++) {
    var color = colors2_1[_i];
    console.log(color);
}
var letters = "ABC";
//for(let letter of letters){
//    console.log(letter);
//};
// class
// class are similar to function but they are not hoisted
//let p3= new Person1();
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var p1 = new Person1();
employee3();
function employee3() { }
console.log(typeof Person1);
// a prop in a class is present in prototype aswell
// every class has one constructor
var Person = /** @class */ (function () {
    function Person(name) {
        //this.name=name;
        //console.log(this.name+" constructor"); 
    }
    Person.staticMethod = function () {
        console.log("Static Method");
    };
    Person.prototype.greetPerson = function () {
        console.log("Hello");
    };
    return Person;
}());
var p3 = new Person("Chandler");
Person.staticMethod();
p3.greetPerson();
// inheritance in class
// constructors are also inhrited
var Person2 = /** @class */ (function () {
    function Person2() {
        console.log("Person Constructor");
    }
    Person2.prototype.getID = function () {
        return 10;
    };
    return Person2;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super.call(this) || this;
        console.log("Employee Constructor");
        return _this;
    }
    return Employee;
}(Person2));
var e = new Employee();
console.log(e.getID());
exports.value1 = 100;
function add(a, b) {
    return a + b;
}
exports.add = add;
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        console.log("Vehicle Constructor");
    }
    Vehicle.prototype.drive = function () {
        console.log("Vehicle is moving");
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
