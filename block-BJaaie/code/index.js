// pseudoclassical pattern

// Animal constructor function
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
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs} legs`);
};

// Dog constructor function
function Dog(location, numberOfLegs, name, color) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`I am ${this.name} and I can bark 🐶`);
};

Dog.prototype.changeName = function(newName) {
    this.name = newName;
};

Dog.prototype.changeColor = function(newColor) {
    this.color = newColor;
};

Dog.prototype.summary = function() {
    console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`);
};

// Cat constructor function
function Cat(location, numberOfLegs, name, colorOfEyes) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function() {
    console.log(`I am ${this.name} and I can do mewo meow 😹`);
};

Cat.prototype.changeName = function(newName) {
    this.name = newName;
};

Cat.prototype.changeColorOfEyes = function(newColor) {
    this.colorOfEyes = newColor;
};

Cat.prototype.summary = function() {
    console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`);
};

// Example usage:
let myDog = new Dog("Mexico", 4, "Jesse", "Brown");
let myCat = new Cat("Brazi;", 4, "Arya", "Green");

myDog.bark();
myCat.meow();
myDog.summary();
myCat.summary();

// Class Pattern

// Animal class
class ClassAnimal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }

    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }

    changeLocation(newLocation) {
        this.location = newLocation;
    }

    summary() {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs} legs`);
    }
}

// Dog class
class NewDog extends ClassAnimal {
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }

    bark() {
        console.log(`I am ${this.name} and I can bark 🐶`);
    }

    changeName(newName) {
        this.name = newName;
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    summary() {
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    }
}

// Cat class
class NewCat extends ClassAnimal {
    constructor(location, numberOfLegs, name, colorOfEyes) {
        super(location, numberOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }

    meow() {
        console.log(`I am ${this.name} and I can do mewo meow 😹`);
    }

    changeName(newName) {
        this.name = newName;
    }

    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
    }

    summary() {
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`);
    }
}

// Example usage:
let myNewDog = new NewDog("Sao Paolo", 4, "Jeffrey", "Brown");
let myNewCat = new NewCat("Italy", 8, "Kate", "Green");

myNewDog.bark();
myNewCat.meow();
myNewDog.summary();
myNewCat.summary();
