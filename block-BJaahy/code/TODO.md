# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

- Create a method inside the class named `calcArea` that will return the area of the square.

- Create a `area` getter method using which we can get the area of the square.

- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`.

- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

- Create two instance of the `Square` class

- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

- Check the `isEqual` method and pass the two instance you created above.

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property

- Create a getter method named `fullName` that will return the full name of the person.

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

- Create two instance of the `User` class

- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method


```js

class Square{
    constructor(side){
        this.width = side ;
         this.height = side;
    }
    description(){
        alert(`The square is ${width} x ${height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    }
    set area(area){
        this.width = this.height = Math.sqrt(area)
    }
    static isEqual(a, b){
        return ((a.width * a.height) === (b.width * b.height)) ? true : false;
    }
}

let s1 = new Square(7);
let s2 = new Square(10);

//Square.isEqual({width: 5, height: 5}, {width: 5, height: 6})
//s1.area
//s2.area
//Square.isEqual(s1, s2)
```


```js

class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }

    set fullName(name){
        if(name.length < 5){
            alert(`Full name should be more than 5 characters`);
            return;
        }
        let splittedName = name.split(" ");
        this.firstName = splittedName[0];
        this.lastName = splittedName[1];
    }
    nameContains(name){
        let fullName = this.firstName + " " +this.lastName;
        return fullName.includes(name);
    }
}
//3. u.fullName = "manoj krishna"
//4. u.nameContains("manoj krishna")
let u1 = new User();
let u2 = new User("manoj", "krishna");
```