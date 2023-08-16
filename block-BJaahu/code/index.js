// prototypal Pattern

const questionMethods = {
    isAnswerCorrect: function(index) {
      return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function() {
      return this.options[this.correctAnswerIndex];
    }
  };
  
  // Create an object using Object.create and attach methods
  function createQuestion(title, options, correctAnswerIndex) {
    const question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    return question;
  }
  
  // Create test objects
  let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
  let secondQuestion = createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  
  // Test the methods
  console.log(firstQuestion.isAnswerCorrect(1)); // Output: true
  console.log(firstQuestion.getCorrectAnswer()); // Output: Amaan
  console.log(secondQuestion.isAnswerCorrect(3)); // Output: false
  console.log(secondQuestion.getCorrectAnswer()); // Output: Kingston
  

  // pseudoclassical pattern

  // Constructor function
function Question(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  
  // Methods added to the prototype of the constructor
  Question.prototype.isAnswerCorrect = function(index) {
    return index === this.correctAnswerIndex;
  };
  
  Question.prototype.getCorrectAnswer = function() {
    return this.options[this.correctAnswerIndex];
  };
  
  // Create test objects
  let first = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
  let second = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  
  // Test the methods
  console.log(first.isAnswerCorrect(1)); // Output: true
  console.log(first.getCorrectAnswer()); // Output: Amaan
  console.log(second.isAnswerCorrect(3)); // Output: false
  console.log(second.getCorrectAnswer()); // Output: Kingston
  

  // class pattern

  class Question {
    constructor(title, options, correctAnswerIndex) {
      this.title = title;
      this.options = options;
      this.correctAnswerIndex = correctAnswerIndex;
    }
  
    isAnswerCorrect(index) {
      return index === this.correctAnswerIndex;
    }
  
    getCorrectAnswer() {
      return this.options[this.correctAnswerIndex];
    }
  }
  
  // Create test objects
  let firstQuest = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
  let secondQuest = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  
  // Test the methods
  console.log(firstQuest.isAnswerCorrect(1)); // Output: true
  console.log(firstQuest.getCorrectAnswer()); // Output: Amaan
  console.log(secondQuest.isAnswerCorrect(3)); // Output: false
  console.log(secondQuest.getCorrectAnswer()); // Output: Kingston
  