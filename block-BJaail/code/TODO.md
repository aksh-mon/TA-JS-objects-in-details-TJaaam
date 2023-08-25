# Creating a book store app using OOP

You should have the following features in the bookly app:

- User can add a new book by adding the name, author and url of the image
- Once added the book will be marked not read
- You can change the state of the book to `Read` and it will be marked as completed
- User can delete the book

![DEMO](../assets/bookly.png)

```js

class Book {
            constructor(title, author, isbn) {
                this.title = title;
                this.author = author;
                this.isbn = isbn;
            }
        }

        class BookList {
            constructor() {
                this.books = [];
            }

            addBook(book) {
                this.books.push(book);
            }

            removeBook(isbn) {
                this.books = this.books.filter(book => book.isbn !== isbn);
            }

            displayBooks() {
                const bookList = document.getElementById('bookList');
                bookList.innerHTML = '';

                this.books.forEach(book => {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><button class="deleteBtn" data-isbn="${book.isbn}">❌</button></td>
                    `;

                    bookList.appendChild(newRow);
                });

                const deleteButtons = document.querySelectorAll('.deleteBtn');
                deleteButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const isbn = button.getAttribute('data-isbn');
                        this.removeBook(isbn);
                        this.displayBooks();
                    });
                });
            }
        }

        let addBtn = document.getElementById('btn');
        let titleInput = document.getElementById('title');
        let authorInput = document.getElementById('author');
        let isbnInput = document.getElementById('isbn');
        let bookListInstance = new BookList();

        addBtn.addEventListener('click', () => {
            let title = titleInput.value;
            let author = authorInput.value;
            let isbn = isbnInput.value;

            if (title && author && isbn) {
                let newBook = new Book(title, author, isbn);
                bookListInstance.addBook(newBook);
                bookListInstance.displayBooks();
                clearInputs();
            }
        });

        function clearInputs() {
            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';
        }

```