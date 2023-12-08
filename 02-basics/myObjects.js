"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userObj = {
    name: "darshil",
    email: "",
    isActive: true,
};
function createUser(obj) {
    console.log(obj);
}
createUser(userObj);
function createUser2(user) {
    console.log(user);
    return user;
}
createUser(userObj);
function createCourse() {
    return { name: "ts", price: 0 };
}
var anotherUser = {
    _id: "",
    name: ""
};
anotherUser.name = "user1";
anotherUser._id = "abc";
