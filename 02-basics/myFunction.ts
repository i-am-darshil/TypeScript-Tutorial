function addTwo(num: number): number {
  return num + 2;
}

let total = addTwo(4);

// variableName: type = defaultValue
let loginUser = (
  email: string,
  password: string,
  isPaid: boolean = false
) => {};

loginUser("", "");

// union type usecase
function getVal(num: number = 10) {
  if (num > 5) {
    return true;
  }

  return "200 Ok";
}

const getHello = (): string => {
  return "hello world";
};

const heros = ["thor", "spiderman", "ironman", 2, true];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(message: string): void {
  console.log(`[ERROR] ${message}`);
}
