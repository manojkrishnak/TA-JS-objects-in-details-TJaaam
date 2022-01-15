If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object
- Organize using object
- Use a function to create object
- Convert the function to use `this` keyword
- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};
```


<!-- without object -->
```js

let q1 = "what does 'this' refers to when there is nothing on left hand side to function call in browser?";
let options1 = ["window", "global", "same object", "none"];
let correctAnswerIndex1 = 0;

function isAnswerCorrect(index){
    return index === correctAnswerIndex1 ? true : false;
}

//isAnswerCorrect(2)

function getCorrectAnswer(){
    return options1[correctAnswerIndex1];
}

//getCorrectAnswer()

```

<!-- with object -->

```js
let q2 = {
    question: "what does 'this' refers to when there is nothing on left hand side to function call in browser?",
    options: ["window", "global", "same object", "none"],
    correctAnswerIndex: 0,
    isAnswerCorrect: function(index) {
        return index === q2.correctAnswerIndex ? true : false;
    },
    getCorrectAnswer: function() {
        return q2.options[q2.correctAnswerIndex];
    }
}
```

<!-- using function -->
```js

function createQuestion(title, options, correctAnswerIndex){
  let q = {
    title: title,
    options: options,
    correctAnswerIndex: correctAnswerIndex,
    isAnswerCorrect: function(index) {
        return index === q.correctAnswerIndex ? true : false;
    },
    getCorrectAnswer: function() {
        return q.options[q.correctAnswerIndex];
    }
}
return q;
}

console.log(createQuestion("bdhed", ["s", "f", "g", "o"], 3).correctAnswerIndex)
console.log(createQuestion("bdhed", ["s", "f", "g", "o"], 3).isAnswerCorrect(3))
console.log(createQuestion("bdhed", ["s", "f", "g", "o"], 3).getCorrectAnswer())
```

<!-- using this variable -->
```js

function createQuestion(title, options, correctAnswerIndex) {
    let q = {
        title: title,
        options: options,
        correctAnswerIndex: correctAnswerIndex,
        isAnswerCorrect: function(index) {
            return index === this.correctAnswerIndex ? true : false;
        },
        getCorrectAnswer: function() {
            return this.options[this.correctAnswerIndex];
        }
    }
    return q;
}

console.log(createQuestion("bdhed", ["s", "f", "g", "o"], 3).correctAnswerIndex)
console.log(createQuestion("bdhed", ["s", "f", "g", "o"], 3).isAnswerCorrect(3))
console.log(createQuestion("bdhed", ["s", "f", "g", "o"], 3).getCorrectAnswer())
```