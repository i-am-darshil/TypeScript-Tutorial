"use strict";
console.log("hello world");
class User {
    constructor(email, name) {
        this.city = "Mumbai";
        this.email = email;
        this.name = name;
    }
}
const user1 = new User("user1@gmail.com", "user1");
class AnotherUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.someProtectedField = 5;
        this.city = "Mumbai";
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        this._courseCount = courseNum;
    }
}
const user2 = new AnotherUser("user1@gmail.com", "user1");
user2.courseCount = 50;
console.log(user2.courseCount);
class SubUser extends AnotherUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 4 // not possible due to the field being private
        this.courseCount = 4; // via setter
        this.someProtectedField = 20;
    }
}
