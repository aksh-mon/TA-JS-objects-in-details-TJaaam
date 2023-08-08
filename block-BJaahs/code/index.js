// without object

let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// Testing
console.log(isAnswerCorrect(1)); // true
console.log(getCorrectAnswer()); // Amaan


// using object

let obj = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index) {
      return index === this.correctAnswerIndex;
    },
    getCorrectAnswer() {
      return this.options[this.correctAnswerIndex];
    }
  };
  
  // Testing
  console.log(obj.isAnswerCorrect(1)); // true
  console.log(obj.isAnswerCorrect(0)); // false  
  console.log(obj.getCorrectAnswer()); // Amaan
  
// using fxn to create object

function quiz(title, options, correctAnswerIndex) {
    return {
      title,
      options,
      correctAnswerIndex,
      isAnswerCorrect(index) {
        return index === correctAnswerIndex;
      },
      getCorrectAnswer() {
        return options[correctAnswerIndex];
      }
    };
  }
  
  // Create object using the function
  let question = quiz(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
  // Testing
  console.log(question.isAnswerCorrect(1)); // true
  console.log(question.isAnswerCorrect(3)); // false
  console.log(question.getCorrectAnswer()); // Amaan
  


// convert the fxn to use this keyWord

function quiz1(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.isAnswerCorrect = function (index) {
      return index === this.correctAnswerIndex;
    };
    this.getCorrectAnswer = function () {
      return this.options[this.correctAnswerIndex];
    };
  }
  
  // Create object using constructor function
  let newQuest = new quiz1(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
  // Testing
  console.log(newQuest.isAnswerCorrect(1)); // true
  console.log(newQuest.isAnswerCorrect(2)); // false
  console.log(newQuest.getCorrectAnswer()); // Amaan
  

  // writing Test

  const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };
  
  // Using object testing
  
  console.log(newQuest.isAnswerCorrect(testData.correctAnswerIndex)); // true
  console.log(newQuest.getCorrectAnswer()); // Amaan
  
  console.log(question.isAnswerCorrect(testData.correctAnswerIndex)); // true
  console.log(question.getCorrectAnswer()); // Amaan
  
  console.log(obj.isAnswerCorrect(testData.correctAnswerIndex)); // true
  console.log(obj.getCorrectAnswer()); // Amaan
  
