"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    display() {
        console.log(`${this.name} : $${this.price}`);
    }
}
class User {
    constructor(name, age) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._age = age;
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    addToCart(item) {
        this._cart.push(item);
    }
    removeFromCart(item) {
        this._cart = this._cart.filter(cartItem => cartItem.id !== item.id);
    }
    removeQuantityFromCart(item, quantity) {
        const filteredCart = [];
        let count = quantity;
        for (const cartItem of this._cart) {
            if (cartItem.id === item.id && count > 0) {
                count--;
            }
            else {
                filteredCart.push(cartItem);
            }
        }
        this._cart = filteredCart;
    }
    cartTotal() {
        return this._cart.reduce((total, item) => total + item.price, 0);
    }
    printCart() {
        console.log("User's Cart:", this._cart.map(item => `${item.name}: $${item.price}`).join(', '));
    }
}
class Shop {
    constructor() {
        this._items = [];
        this.initializeShop();
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    initializeShop() {
        this._items.push(new Item("Laptop", 1000, "High-performance laptop"));
        this._items.push(new Item("Smartphone", 700, "Latest model smartphone"));
        this._items.push(new Item("Headphones", 150, "Noise-cancelling headphones"));
    }
}
// Example usage
const shop = new Shop();
const user = new User("John Doe", 30);
const item = shop.items[0];
user.addToCart(item);
user.printCart();
console.log("Cart Total: $", user.cartTotal());
// Driver Code
const myshop = new Shop();
console.log(shop);
const myuser = new User("John Doe", 30);
console.log(user);
// Simulate adding items to the cart
shop.items.forEach(item => user.addToCart(item));
user.printCart();
// Remove all instances of the first item
user.removeFromCart(shop.items[0]);
user.printCart();
// Remove a quantity from the cart
user.removeQuantityFromCart(shop.items[1], 1);
user.printCart();
console.log(`Total Cart Value: $${user.cartTotal()}`);
