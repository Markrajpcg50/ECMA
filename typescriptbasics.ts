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

const dragonsTag: MaybePopularTag=null;

// void in Typescript
// void is undefined and null
const doSomething=(): void =>{
    console.log("doSomething");
    return 
}
const foo:any ="foo"; // avoid using any

// never in TypeScript

const doAnything=():never=>{
    console.log("doAnything");
    throw "never";
}

// unknown in TypeScript

let vAny:any=10;
let vUnknown:unknown="Mohan";
let s1:string=vAny;
let s2:string=vUnknown as string;

//console.log(vAny.foo());
//console.log(vUnknown.foo());

// converting one type to another

let pageNumber:string="1"
let numericpageNumber:number=(pageNumber as unknown) as number;
 
// Working with DOM- document object module 
let page:any="1";
let pageNum=page as string;
pageNum="1";

//const someElement=document.querySelector(".foo") as HTMLInputElement;

//console.log('someElement',someElement.value);
//someElement.addEventListener("blur",(event)=>{
//    console.log('event',event.target.value);
//})

// Classes and Interfaces in TypeScript

interface UserInterface2{
    getFullName():string;
}
class User3 implements UserInterface2 {
    private firstName: string
    private lastName: string
    readonly unchangableName:string;
    static readonly maxAge =50;
    constructor(firstName:string, lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    changeUnchangeablename():void{
        //this.unchangableName="foo";
    }
    getFullName():string{
        return this.firstName+" "+this.lastName
    }
}

class Admin extends User3{
    private editor:string;
    setEditor(editor:string):void{
        this.editor=editor;
    }
    getEditor():string{
        return this.editor;
    }
}

const user7=new User3("Monster","lessons");
console.log(user7.unchangableName);
console.log(User3.maxAge);

const admin= new Admin("Foo","Bar");
console.log(admin.getFullName());
admin.setEditor("VS-Code")
console.log(admin.getEditor());

// Generics in TypeScript

//const updatedArray=append<string>("baz",["foo","bar"]);
//const searchStr="foo"
//const hasSearchString=any<string>((el:string)=>el.contains(searchStr),[
//    "foo",
//    "bar",
//    "baz"
//]);

const addID= <T extends object>(obj:T)=>{
    const id= Math.random().toString(16)
    return{
    ...obj,
    id
    }
}

interface UserInterface3<T,V>{
    name:string,
    data:T;
    meta:V;
}
const user8:UserInterface3<{meta: string},string>={
    name:"jack",
    data:{
        meta:"foo",
    },
    meta:"bar",
}
const user9:UserInterface3<string[],string>={
    name:"Johan",
    data:["foo","boo"],
    meta:"guu",
}
const result= addID<UserInterface3<{meta:string},string>>(user8);
console.log("result",result);

// Enums in Typescript
// can hold constants
const statuses={
    notStarted:0,
    inProgress:1,
    done:2
};

console.log(statuses.inProgress);

enum StatusEnum{
    NotStarted="notStarted",
    InProgress="inProgress",
    Done="done"
}

interface Task{
    id:string;
    status:StatusEnum;
}

console.log(Status.InProgress);
