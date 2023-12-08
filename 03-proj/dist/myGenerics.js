"use strict";
const score1 = [];
const score2 = []; // Generics
function identity1(val) {
    return val;
}
let i1 = identity1(23); // i1 becomes a number
let i2 = identity1("23"); // i2 becomes a string
let i3 = identity1({ brand: "", type: 2 }); // i3 becomes a Bottle
function getSearchProducts(products) {
    return products[0];
}
const getMoreSearchProducts = (products) => {
    return products[0];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
anotherFunction(3, 4);
function oneMoreFunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
oneMoreFunction(4, { connection: "", userName: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
