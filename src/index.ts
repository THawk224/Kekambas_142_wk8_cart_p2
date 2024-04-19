import { v4 as uuid4 } from 'uuid';


class Item {
    constructor(name:string, price:number, description:string) {
        this._id = uuid4();
        this._name = name;
        this._price = price;
        this._description = description;
    }

    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;
    
    get id(): string {
        return this._id;
    }
    
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    
    get price(): number {
        return this._price;
    }
    set price(value: number) {
        this._price = value;
    }
    
    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }
    display() {
        console.log(`${this.name} : $${this.price}`);
    }
}


class User {
    constructor(name: string, age: number) {
        this._id = uuid4();
        this._name = name;
        this._age = age;
        this._cart = [];
    }

    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Item[];

    public get id(): string {
        return this._id;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    
    public get cart(): Item[] {
        return this._cart;
    }

addToCart(item: Item): void {
    this._cart.push(item);
}

removeFromCart(item: Item): void {
    this._cart = this._cart.filter(cartItem => cartItem.id !== item.id);
}

removeQuantityFromCart(item: Item, quantity: number): void {
    const filteredCart: Item[] = [];
    let count = quantity;
    for (const cartItem of this._cart) {
        if (cartItem.id === item.id && count > 0) {
            count--;
        } else {
            filteredCart.push(cartItem);
        }
    }
    this._cart = filteredCart;
}

cartTotal(): number {
    return this._cart.reduce((total, item) => total + item.price, 0);
}

printCart(): void {
    console.log("User's Cart:", this._cart.map(item => `${item.name}: $${item.price}`).join(', '));
}
}

class Shop {
    private _items: Item[];

    constructor() {
        this._items = [];
        this.initializeShop();
    }

    get items(): Item[] {
        return this._items;
    }
    set items(value: Item[]) {
        this._items = value;
    }

    private initializeShop(): void {
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
