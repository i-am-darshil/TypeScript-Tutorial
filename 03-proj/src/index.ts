console.log("hello world");

class User {
  private readonly email: string;
  name: string;
  city: string = "Mumbai";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const user1 = new User("user1@gmail.com", "user1");

class AnotherUser {
  private _courseCount: number = 1;
  protected someProtectedField: number = 5;
  city: string = "Mumbai";
  constructor(private readonly email: string, public name: string) {}

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    this._courseCount = courseNum;
  }
}

const user2 = new AnotherUser("user1@gmail.com", "user1");
user2.courseCount = 50;
console.log(user2.courseCount);

class SubUser extends AnotherUser {
  isFamily: boolean = true;

  changeCourseCount() {
    // this._courseCount = 4 // not possible due to the field being private
    this.courseCount = 4; // via setter
    this.someProtectedField = 20;
  }
}
