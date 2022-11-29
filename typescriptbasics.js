// we get errors in transpiler phase and compilation is done to .js file
// 
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
;
;
// Union and type aliased 
var username = "mohan";
var pageName = "first"; // can have both string and number
var errorMessage = null;
var user6 = null;
var someProp;
var popularTags = ["dragon", "coffee"];
var dragonsTag = null;
// void in Typescript
// void is undefined and null
var doSomething = function () {
    console.log("doSomething");
    return;
};
var foo = "foo"; // avoid using any
// never in TypeScript
var doAnything = function () {
    console.log("doAnything");
    throw "never";
};
// unknown in TypeScript
var vAny = 10;
var vUnknown = "Mohan";
var s1 = vAny;
var s2 = vUnknown;
//console.log(vAny.foo());
//console.log(vUnknown.foo());
// converting one type to another
var pageNumber = "1";
var numericpageNumber = pageNumber;
// Working with DOM- document object module 
var page = "1";
var pageNum = page;
pageNum = "1";
var User3 = /** @class */ (function () {
    function User3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User3.prototype.changeUnchangeablename = function () {
        //this.unchangableName="foo";
    };
    User3.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User3.maxAge = 50;
    return User3;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User3));
var user7 = new User3("Monster", "lessons");
console.log(user7.unchangableName);
console.log(User3.maxAge);
var admin = new Admin("Foo", "Bar");
console.log(admin.getFullName());
admin.setEditor("VS-Code");
console.log(admin.getEditor());
// Generics in TypeScript
//const updatedArray=append<string>("baz",["foo","bar"]);
//const searchStr="foo"
//const hasSearchString=any<string>((el:string)=>el.contains(searchStr),[
//    "foo",
//    "bar",
//    "baz"
//]);
var addID = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user8 = {
    name: "jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user9 = {
    name: "Johan",
    data: ["foo", "boo"],
    meta: "guu"
};
var result = addID(user8);
console.log("result", result);
// Enums in Typescript
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status["NotStarted"] = "notStarted";
    Status["InProgress"] = "inProgress";
    Status["Done"] = "done";
})(Status || (Status = {}));
console.log(Status.InProgress);
