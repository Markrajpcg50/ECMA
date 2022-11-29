// we get errors in transpiler phase and compilation is done to .js file
// 

const a="1";
console.log(a);
console.log("aaa",a);

// variables in typescript

let hello="World";
//hello=foo;
//hello=true; // hello is a string and a boolean cannot be assigned to it

let hell:String="Mohan";
console.log(hell);
hell="Ruban";
console.log(hell);
const getFullName=(name:String,surname:String): string=>{
    return name+" "+surname;
}

console.log(getFullName("Mark","raj"));

// defining a function

const value= (name):string=>{
    console.log(name);
    return "hello "+name;
    
}

 console.log(value("Mohan"));

 // creating objects
 const user:{name:string,age:number}={
    name:"Monster",
    age:3,
 }

 const user2:{name:string/*,age:number  */}={
    name:"jack",
 }
 user.name="Dratini";

console.log(user);
console.log(user2);

// interfaces in typescript
interface User{
    name:string;
    age?:number; // by adding ? we make it not mandatory
}

const user3:User={
    name:"Monster",
    age:3,
 };

 // user4 cannot be created as we didnt provide age , as per User we nned to give boht name and age
 const user4:User={
    name:"Monster",
 };

 console.log(user3);
console.log(user4);
 
// functions in interface

interface User1{
    name:string;
    age?:number; // by adding ? we make it not mandatory
    getMessage():string
}

const user5:User1={
    name:"Monster",
    age:3,
    getMessage(){
        return "hello "+this.name;
    }
};

console.log(user5.getMessage());

// way to name interface
interface IUser{};
interface UserInterface{};


// Union and type aliased 

let username:String="mohan";
let pageName:String | number="first"; // can have both string and number

let errorMessage:String|null=null;

// typealiases
type ID=String;
type popularTag=string;
type MaybePopularTag=popularTag|null;
interface UserInterface{
    id:ID;
    name:string;
    surname:string;
}

let user6:UserInterface |null =null;
let someProp: String |number |undefined|string[]|object


const popularTags:popularTag[]=["dragon","coffee"];

