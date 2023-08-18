// Animal constructor
function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

Animal.prototype.eat = function() {
    console.log(`I live in ${this.location} and I can eat`);
};

Animal.prototype.changeLocation = function(newLocation) {
    this.location = newLocation;
};

Animal.prototype.summary = function() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
};

// Dog constructor
function Dog(location, numberOfLegs, name, color) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
    alert(`I am ${this.name} and I can bark 🐶`);
};

Dog.prototype.changeName = function(newName) {
    this.name = newName;
};

Dog.prototype.changeColor = function(newColor) {
    this.color = newColor;
};

Dog.prototype.summary = function() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
};

// Cat constructor
function Cat(location, numberOfLegs, name, colorOfEyes) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function() {
    alert(`I am ${this.name} and I can do meow meow 😹`);
};

Cat.prototype.changeColorOfEyes = function(newColor) {
    this.colorOfEyes = newColor;
};

Cat.prototype.summary = function() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
};

// Creating instances
let animal = new Animal("Jungle", 4);
let dog = new Dog("Home", 4, "Dexter", "White");
let cat = new Cat("House", 4, "T-Bone", "Blue");

// Testing methods
animal.eat();
console.log(animal.summary());

dog.eat();
dog.bark();
console.log(dog.summary());

cat.eat();
cat.meow();
console.log(cat.summary());
