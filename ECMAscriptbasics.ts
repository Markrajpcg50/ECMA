import { Map } from "core-js";
import { map } from "core-js/es6/array";

console.log("Hello World");

//let a=10;
//console.log(a+a);

function greetPerson(name){
    let greet;
    if(name==="Chandler"){
        greet="Hello Chandler";
    }
    else{
        greet="hai there";
    }
    console.log(greet);
}
greetPerson("Chandle");


var a=1;
var b=2;
if(a===1){
    var a=10;
    let b=20;
    console.log(a); //10
    console.log(b); //20 // let is block scoped
}
console.log(a); //10 because a is a var
console.log(b); // 2



var c=1;
var c=2;

let d=1;
//let d=2; once declared it cannot be redeclared

// instead of IFFE we use let

for(let i=1;i<=5;i++){
    //setTimeout(function(){console.log(i);},1000);
}
 

// const
let num1;
const num2=10;
const obj1={
    name:"Joatmon"
};
console.log(obj1.name);

obj1.name="Chandler";
console.log(obj1.name);

// let vs const

const pi=3.14;
const MAX_SIZE=100;
let aa=5;
let bb=10;
aa=aa+bb;
bb=aa-bb;
aa=aa-bb;
console.log(aa);
console.log(bb);

// arrow function
var getRegvalue= function(){
    return 10;
}

console.log(getRegvalue());

const getArrowvalue= (m,bonus) => 10*m+bonus;
console.log(getArrowvalue(5,50));

console.log(typeof getArrowvalue);

var employee={
    id:1,
    greet:function(){
       // setTimeout(()=>{console.log(this.id)},1000);
        //console.log(this.id);
    }
}
employee.greet(); 

let percentBonus= ()=> 0.1;
let getValue=function(value=10, bonus=value*percentBonus()){
    console.log(value+bonus);
    console.log(arguments.length);
}
getValue();
getValue(20);
getValue(20,30);
getValue(undefined,30);


// rest operator/paramenter
let displayColors=function(message,...colors){ // at function header
    console.log(message);
    //console.log(colors);// array
    console.log(arguments.length);
    
    for(let i in colors)
    {
        console.log(colors[i]);   
    }

}
let message ="List of Colors";
//displayColors(message,'Red');
//displayColors(message,'Red','Blue');
//displayColors(message,'Red','blue','green');

// spread operator/parameter

let colorArray=['Orange','Yellow','Indigo'];
displayColors(message, ...colorArray) // at function call


// Object Literals

let firstname="Chandler";
let lastname="Bings";

let person={
    firstname,
    lastname
}

//console.log(person.firstname);
//console.log(person.lastname);

function createPerson(firstname,lastname,age){
    let fullname=firstname+" "+lastname;
    return {
        fullname,
        lastname,
        firstname,
        isSenior(){
            return age>60;
        }
    };
} 

let p=createPerson("Ross","Gellar",32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());

let ln="last Name";
let person1={
    "first Name":"Chandler",
    [ln]:"Bing"
}
console.log(person1["first Name"]);
console.log(person1["last Name"]);

// destructuring array

let employees=["Chandler","Bing"]

//let [fname,lname,gender="Male"]=employees;

//console.log(fname);
//console.log(lname);
//console.log(gender);
console.log(person1["first Name"]);

// destructring Object


let employees2={
    fname:"Chandler",
    lname:"Bing",
    gender:"Male"
};

let {fname:f,lname:l,gender:g}=employees2;

console.log(f);
console.log(l);
console.log(g);

// string templates

let user="Chandler";
let greet=`Welcome $(user) to ES2015
            this is the second line
            third`;

console.log(greet);

// for of loop

let colors2=['red','blue','green']

for(let color of colors2){
console.log(color);

}

let letters="ABC";
//for(let letter of letters){
//    console.log(letter);
//};


// class
// class are similar to function but they are not hoisted

//let p3= new Person1();
class Person1{}

let p1=new Person1();

employee3();
function employee3(){}
console.log(typeof Person1);

// a prop in a class is present in prototype aswell

// every class has one constructor

class Person{
    constructor(name){
        //this.name=name;
        //console.log(this.name+" constructor"); 
    }
    static staticMethod(){
        console.log("Static Method");
        
    }
    greetPerson(){
        console.log("Hello");
        
    }
}

let p3= new Person("Chandler");
Person.staticMethod();
p3.greetPerson();

// inheritance in class
// constructors are also inhrited
class Person2{
    constructor(){
        console.log("Person Constructor");
    }
    getID(){
        return 10;
    }
}

class Employee extends Person2{
    constructor(){
        super();
        console.log("Employee Constructor");
    }
}

let e= new Employee();
console.log(e.getID());

export let value1=100;
export function add(a,b){
    return a+b;
}
export class Vehicle{
    constructor(){
        console.log("Vehicle Constructor");
    }
    drive(){
        console.log("Vehicle is moving");
        
    }
}


let myMap= new Map();

myMap.set("Mohan",1);
myMap.set("Naveen",2);
myMap.set("Pranav",3);

console.log(myMap);


