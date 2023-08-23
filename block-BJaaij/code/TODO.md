## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
```js
class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }

  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.currentIndex = 0;
  }

  add(booksToAdd) {
    this.books.push(...booksToAdd);
  }

  getCurrentBook() {
    if (this.books.length === 0) {
      return "No books in the list.";
    }
    return this.books[this.currentIndex];
  }

  getNextBook() {
    if (this.books.length === 0) {
      return "No books in the list.";
    }
    this.currentIndex = (this.currentIndex + 1) % this.books.length;
    return this.books[this.currentIndex];
  }

  getPrevBook() {
    if (this.books.length === 0) {
      return "No books in the list.";
    }
    this.currentIndex = (this.currentIndex - 1 + this.books.length) % this.books.length;
    return this.books[this.currentIndex];
  }

  changeCurrentBook(index) {
    if (index >= 0 && index < this.books.length) {
      this.currentIndex = index;
    } else {
      return "Invalid index.";
    }
  }
}

// Create Book objects
let book1 = new Book("Book 1", "Category 1", "Author 1");
let book2 = new Book("Book 2", "Category 2", "Author 2");
let book3 = new Book("Book 3", "Category 1", "Author 3");
let book4 = new Book("Book 4", "Category 3", "Author 4");
let book5 = new Book("Book 5", "Category 2", "Author 5");

// Create BookList
let bookList = new BookList();

// Add books to the BookList
bookList.add([book1, book2, book3, book4, book5]);

// Test the methods
console.log(bookList.getCurrentBook()); //  display Book 1
console.log(bookList.getNextBook()); //  display Book 2
console.log(bookList.getPrevBook()); //  display Book 1

bookList.changeCurrentBook(3); // Change current book to Book 4
console.log(bookList.getCurrentBook()); //  display Book 4

bookList.getCurrentBook().markBookAsRead();
console.log(bookList.getCurrentBook()); //  display Book 4 with isRead as true and finishedDate set

console.log(bookList.getNextBook()); //  display Book 5
console.log(bookList.getPrevBook()); //  display Book 3
```