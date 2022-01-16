// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

// function createUser(name, age){
//     let obj = {
//         name,
//         age
//     };
//     return obj;
// }

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name, age){
    let obj = {
        name,
        age,
        sayHello(){
            alert(`Welcome ${name}`);
        }
    };
    return obj;
}
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let personOne = createUser("manoj", 27)
let personTwo = createUser("krishna", 27)
// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
let objMethods = {
    sayHello: function(){
        alert(`Welcome ${this.name}`);
    } 
};

function createUser(name, age){
    let obj = Object.create(objMethods);
    obj.name = name;
    obj.age = age;
    return obj;
}

let personThree = new createUser("manoj", 27)
let personFour = new createUser("krishna", 27)
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

createUser.prototype = {
    sayHello: function(){
        alert(`Welcome ${this.name}`);
    } 
};

function createUser(name, age){
    let obj = Object.create(createUser.prototype);
    obj.name = name;
    obj.age = age;
    return obj;
}

let personThree = new createUser("manojkk", 27);
let personFour = new createUser("krishnammm", 27);

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
 personOne = createUser("deded", 27)
 personTwo = createUser("krishdddkkkna", 27)
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello()
personTwo.sayHello()
// 8. Convert the `createUser` function into `User` class.
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        alert(`Welcome ${this.name}`);
    }
}

let u = new User("m", 27)
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
personOne = new User("deded", 27)
personTwo = new User("krishdddkkkna", 27)
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello()
personTwo.sayHello()