// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
 
function createUser(name, age) {
    const user = {
      name: name,
      age: age
    };
  
  
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
user.sayHello = function() {
    alert(`Welcome ${this.name}`);
  };

  return user;
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let personOne = createUser("Ram",30);
let personTwo = createUser("Sam",27);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())  
function createUser(name, age) {
    const userPrototype = {
      sayHello: function() {
        alert(`Welcome ${this.name}`);
      }
    };
    
    const user = Object.create(userPrototype);
    user.name = name;
    user.age = age;
    
    return user;
  }
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods.  `F.prototype` means storing the methods in prototype property of the function.
function newUser(name, age) {
    this.name = name;
    this.age = age;
  }
  
  newUser.prototype.sayHello = function() {
    alert(`Welcome ${this.name}`);
  };
  
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
let person1 = new newUser("John", 30);
let person2 = new newUser("Alice", 25);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello(); // Output: Welcome Rama
personTwo.sayHello(); // Output: Welcome Sama

// 8. Convert the `createUser` function into `User` class 
class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;``
    }
  
    sayHello() {
      alert(`Welcome ${this.name}`);
    }
  }
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let personOne1 = new User("John", 30);
let personTwo2 = new User("Alice", 25);
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello();
