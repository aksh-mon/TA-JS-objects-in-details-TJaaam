We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

1. Quiz is a collection of Questions.
2. Question will need `Title`, `Options` and `Correct Answer`

### Make a Question class with these data and methods:

DATA:

- Title of the question
- Options of the question
- Correct answer

METHODS:

- isCorrect(answer)

Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

- getCorrectAnswer()
  This method will return the correct answer of the question.

- createUI (this will create the layout of a single question)

This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

### Make quiz class with these data and properties

DATA:

- allQuestions
  Collection of Questions. An array with multiple question.
- activeIndex
  Index of the active visible question
- score
  Total number of correct answer

METHOD:

- nextQuestion()
  This method should get the next question.
- createUI
  This will create the ui of the whole app.
- updateScore
  This method will update the score.


## Question Class
```js
class Question {
    constructor(title, options, correctAnswer) {
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(answer) {
        return answer === this.correctAnswer;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }

    createUI() {
        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = `
            <h2>${this.title}</h2>
            <ul>
                ${this.options.map(option => `<li>${option}</li>`).join("")}
            </ul>
        `;
        return questionElement;
    }
}

```
## Quiz Class
```js
class Quiz {
    constructor() {
        this.allQuestions = []; // Collection of Questions
        this.activeIndex = 0; // Index of the active visible question
        this.score = 0; // Total number of correct answers
    }

    nextQuestion() {
        if (this.activeIndex < this.allQuestions.length - 1) {
            this.activeIndex++;
        } else {
            // Handle quiz completion
            alert("Quiz completed!");
        }
    }

    createUI() {
        const quizContainer = document.createElement("div");
        quizContainer.id = "quiz-container";

        const questionContainer = document.createElement("div");
        questionContainer.id = "question-container";

        const scoreElement = document.createElement("p");
        scoreElement.id = "score";
        scoreElement.textContent = `Score: ${this.score}`;

        const nextButton = document.createElement("button");
        nextButton.id = "next-button";
        nextButton.textContent = "Next Question";
        nextButton.addEventListener("click", () => {
            this.nextQuestion();
            this.updateUI();
        });

        quizContainer.appendChild(questionContainer);
        quizContainer.appendChild(scoreElement);
        quizContainer.appendChild(nextButton);

        document.body.appendChild(quizContainer);
        this.updateUI();
    }

    updateScore() {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = `Score: ${this.score}`;
    }

    updateUI() {
        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML = "";
        const currentQuestion = this.allQuestions[this.activeIndex];
        if (currentQuestion) {
            const questionElement = currentQuestion.createUI();
            questionContainer.appendChild(questionElement);
        }
        this.updateScore();
    }
}

```
## Instance of Quiz Class
```js
const quiz = new Quiz();

const question1 = new Question(
    "What is the capital of France?",
    ["Paris", "London", "Berlin"],
    "Paris"
);

const question2 = new Question(
    "Which planet is known as the Red Planet?",
    ["Mars", "Venus", "Jupiter"],
    "Mars"
);

quiz.allQuestions.push(question1, question2);

quiz.createUI();

```
