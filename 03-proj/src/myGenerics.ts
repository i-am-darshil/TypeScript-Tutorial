const score1: number[] = [];
const score2: Array<number> = []; // Generics

function identity1<T>(val: T): T {
  return val;
}

let i1 = identity1(23); // i1 becomes a number
let i2 = identity1("23"); // i2 becomes a string

interface Bottle {
  brand: string;
  type: number;
}

let i3 = identity1<Bottle>({ brand: "", type: 2 }); // i3 becomes a Bottle

function getSearchProducts<T>(products: T[]): T {
  return products[0];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[0];
};

function anotherFunction<T, U extends number>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

anotherFunction(3, 4);

interface Database {
  connection: string;
  userName: string;
  password: string;
}

function oneMoreFunction<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

oneMoreFunction(4, { connection: "", userName: "", password: "" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
