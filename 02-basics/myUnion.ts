let unionData1: string | number;

if (true) {
  unionData1 = "";
} else {
  unionData1 = 0;
}

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let user1: User | Admin = { name: "darshil", id: 2 };

user1 = { username: "darshil", id: 2 };

function getId(id: string | number): string | number {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return 2 + id;
  }
}

const data: (number | string)[] = [1, 2, "3"]; 
