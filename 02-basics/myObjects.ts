type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const userObj: User = {
  name: "darshil",
  email: "",
  isActive: true,
};

function createUser(obj: { name: string; isActive: boolean }) {
  console.log(obj);
}

createUser(userObj);

function createUser2(user: User): User {
  console.log(user);
  return user;
}

createUser(userObj);

function createCourse(): { name: string; price: number } {
  return { name: "ts", price: 0 };
}

type AnotherUser = {
  readonly _id:string,
  name: string,
  creditCardDetail?: number // ? suggests that it is optional
}

let anotherUser: AnotherUser = {
  _id: "",
  name: ""
}

anotherUser.name = "user1"
// anotherUser._id = "abc"

export {};
