// Function to create User object
function createUser(name, id, noOfProjects) {
    return {
      name,
      id,
      noOfProjects,
      getProjects: function() {
        return this.noOfProjects;
      },
      changeName: function(newName) {
        let oldName = this.name;
        this.name = newName;
        return oldName;
      },
      incrementProject: function() {
        this.noOfProjects++;
        return this.noOfProjects;
      },
      decrementProject: function() {
        if (this.noOfProjects > 0) {
          this.noOfProjects--;
        }
        return this.noOfProjects;
      }
    };
  }
  
  // Test using the function
  let user1 = createUser('Ram', 1, 3);
  let user2 = createUser('Sam', 2, 5);
  
  console.log(user1.getProjects()); // Output: 3
  console.log(user2.changeName('Rama')); // Output: Sam
  console.log(user1.incrementProject()); // Output: 4
  console.log(user2.decrementProject()); // Output: 4
  

  // Prototype object containing methods
   
    let userMethods = {
    getProjects: function() {
      return this.noOfProjects;
    },
    changeName: function(newName) {
      const oldName = this.name;
      this.name = newName;
      return oldName;
    },
    incrementProject: function() {
      this.noOfProjects++;
      return this.noOfProjects;
    },
    decrementProject: function() {
      if (this.noOfProjects > 0) {
        this.noOfProjects--;
      }
      return this.noOfProjects;
    }
  };
  
  // Create User objects using Object.create
  function newCreateUser(name, id, noOfProjects) {
    const user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
  }
  
  // Test using Object.create
  let protouser1 = newCreateUser('Ram', 13, 15);
  let protouser2 = newCreateUser('Sam', 12, 25);
  
  console.log(protouser1.getProjects()); // Output: 15
  console.log(protouser2.changeName('Rama')); // Output: Rama
  console.log(protouser1.incrementProject()); // Output: 16
  console.log(protouser2.decrementProject()); // Output: 24
  

// Constructor function for User
 function cosntructorUser(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  
  // Methods added to the prototype of the constructor
  cosntructorUser.prototype.getProjects = function() {
    return this.noOfProjects;
  };
  
  cosntructorUser.prototype.changeName = function(newName) {
    const oldName = this.name;
    this.name = newName;
    return oldName;
  };
  
  cosntructorUser.prototype.incrementProject = function() {
    this.noOfProjects++;
    return this.noOfProjects;
  };
  
  cosntructorUser.prototype.decrementProject = function() {
    if (this.noOfProjects > 0) {
      this.noOfProjects--;
    }
    return this.noOfProjects;
  };
  
  // Test using Pseudoclassical Pattern
  let constructoruser1 = new cosntructorUser('Ram', 12, 23);
  let constructoruser2 = new cosntructorUser('Sam', 21, 52);
  
  console.log(constructoruser1.getProjects()); // Output: 23
  console.log(constructoruser2.changeName('Rama')); // Output: Sam
  console.log(constructoruser1.incrementProject()); // Output: 24
  console.log(constructoruser2.decrementProject()); // Output: 51
  

// User class definition
class classUser {
    constructor(name, id, noOfProjects) {
      this.name = name;
      this.id = id;
      this.noOfProjects = noOfProjects;
    }
  
    getProjects() {
      return this.noOfProjects;
    }
  
    changeName(newName) {
      const oldName = this.name;
      this.name = newName;
      return oldName;
    }
  
    incrementProject() {
      this.noOfProjects++;
      return this.noOfProjects;
    }
  
    decrementProject() {
      if (this.noOfProjects > 0) {
        this.noOfProjects--;
      }
      return this.noOfProjects;
    }
  }
  
  // Test using Class
  let classUser1 = new classUser('Ram', 321, 1123);
  let classUser2 = new classUser('Sam', 23123, 513);
  
  console.log(classUser1.getProjects()); // Output: 1123
  console.log(classUser2.changeName('Rama')); // Output: Sam
  console.log(classUser1.incrementProject()); // Output: 1124
  console.log(classUser2.decrementProject()); // Output: 512
  