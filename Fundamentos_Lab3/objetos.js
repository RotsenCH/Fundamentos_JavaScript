'use strict';

/*
                Fundamentos
*/

// Acceder a sus claves

const user = {
    name: "Néstor",
    lastName: "Chumania",
    age: 20,
    address: {
        city: "Quito",
        telephone: "0991155259",
        street: "Adrian Navarro"
    },
    friends: ['Daniel', 'Danny', 'Carolina', 'Joel'],
    isActive: true,
    sendMail() {
        return `Send mail to ${this.friends[0]}`;
    },
    sendNotification() {
        return `Send notification to ${this.friends[3]}`;
    }
};

    console.log(user.isActive);
    console.log(user.sendMail());
    console.log(user.sendNotification());

// Agregar y eliminar propiedades al objeto.

const product = {
    name: "Smartphone",
    brand: "Samsung",
    price: 599.99,
    specifications: {
        screenSize: "6.5 inches",
        camera: "48MP",
        storage: "128GB"
    },
    reviews: ['Great phone!', 'Fast performance', 'Excellent camera'],
    available: true,
    displayInfo() {
        console.log(`Product: ${this.name}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Price: $${this.price}`);
    },
    addReview(review) {
        this.reviews.push(review);
    }
};

// Agregar una propiedad al objeto
product.color = "Black";

// Eliminar una propiedad del objeto
delete product.available;

console.log(product);

/*
                Destructuración de objetos 
*/

const person = {
    name: "Néstor",
    age: 20,
    city: "Quito"
};

const { name, age, city } = person;
    
console.log(name); 
console.log(age);
console.log(city); 

/*
                Congelar un objeto  
*/

// Uso del Freeze

const student = {
    name: "Néstor",
    age: 20,
    major: "TSDS",
    grades: [30, 25, 20, 28]
}; 
Object.freeze(student);

student.age = 21;
student.gpa = 3.8;
student.grades[0] = 22;
console.log(student);

// Uso de Seal

const person2 = {
    name: "John",
    age: 30
};

Object.seal(person2);

person2.city = "New York";
delete person2.age;

person2.name = "Mike";

console.log(person2);

/*
                Copiar dos objetos  
*/

// Spread operator.

const product = {
    name: "Camiseta",
    price: 29.99,
    colorOptions: ["Rojo", "Azul", "Verde"]
};

const sizeOptions = ["S", "M", "L", "XL"];
const combinedOptions = [...product.colorOptions, ...sizeOptions];

console.log(combinedOptions);

/*
                Uso del this en objetos  
*/

const button = {
    text: "Haz clic aquí",
    handleClick() {
    console.log(`Has hecho clic en el botón "${this.text}"`);
    }
};

button.handleClick();

/*
                Métodos para trabajar con objetos  
*/

const person4 = {
    name: "Néstor",
    age: 20,
    city: "Quito",
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    },
    getProperty(key) {
        return this[key];
    },
    setProperty(key, value) {
        this[key] = value;
    },
    getKeys() {
        return Object.keys(this);
    },
    getValues() {
        return Object.values(this);
    },
    getEntries() {
        return Object.entries(this);
    }
};

person4.printInfo();

person4.setProperty("age", 35);
console.log(person4.getProperty("age"));

console.log(person4.getKeys());
console.log(person4.getValues());
console.log(person4.getEntries());  

/*
                (ES6) Nombres abreviados de propiedades 
*/

const firstName = "Néstor";
const lastName = "Chumania";
const age2 = 20;

const person5 = {
    firstName,
    lastName,
    age2,
};

console.log(person);
