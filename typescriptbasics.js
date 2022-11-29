// we get errors in transpiler phase and compilation is done to .js file
// 
var a = "1";
console.log(a);
console.log("aaa", a);
// variables in typescript
var hello = "World";
//hello=foo;
//hello=true; // hello is a string and a boolean cannot be assigned to it
var hell = "Mohan";
console.log(hell);
hell = "Ruban";
console.log(hell);
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Mark", "raj"));
// defining a function
var value = function (name) {
    console.log(name);
    return "hello " + name;
};
console.log(value("Mohan"));
// creating objects
var user = {
    name: "Monster",
    age: 3
};
var user2 = {
    name: "jack"
};
user.name = "Dratini";
console.log(user);
console.log(user2);
var user3 = {
    name: "Monster",
    age: 3
};
// user4 cannot be created as we didnt provide age , as per User we nned to give boht name and age
var user4 = {
    name: "Monster"
};
console.log(user3);
console.log(user4);
var user5 = {
    name: "Monster",
    age: 3,
    getMessage: function () {
        return "hello " + this.name;
    }
};
console.log(user5.getMessage());
