import { addBook } from "./books.js";

const booksContainer = document.getElementById('newBookFormContainer');
const newBookForm = document.getElementById('newBookForm');
const newBooksContainer = document.getElementById('newBooks');
const showFormButton = document.getElementById('showFormButton');
const hideFormButton = document.getElementById('hideFormButton');

showFormButton.addEventListener('click', () => {
    booksContainer.style.display = 'flex';
});

hideFormButton.addEventListener('click', () => {
    booksContainer.style.display = 'none';
    newBookForm.reset();
});

function displayBook(book) {
    const newBook = document.createElement('div');
    newBook.classList.add('newBookContainer');

    newBook.innerHTML = `
        <div style="margin-bottom: 10px;"><b>Title:</b> ${book.title}</div>
        <div style="margin-bottom: 10px;"><b>Author:</b> ${book.author}</div>
        <div style="margin-bottom: 10px;"><b>Pages:</b> ${book.pagesNumber}</div>
        <div><b>Read:</b> <span class="readText">${book.readStatus ? 'Yes' : 'No'}</span></div>
    `;

    const changeStatusButton = document.createElement('button');
    changeStatusButton.classList.add('changeReadStatus');
    changeStatusButton.innerHTML = 'Change Read Status';

    changeStatusButton.addEventListener('click', () => {
        const readStatusText = newBook.querySelector('.readText');

        book.readStatus = !book.readStatus;
        readStatusText.textContent = book.readStatus ? 'Yes' : 'No';
    });

    newBooksContainer.appendChild(newBook);
    newBook.appendChild(changeStatusButton);
}

const defaultBook = addBook('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 352, true);
displayBook(defaultBook);

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pagesNumber = document.getElementById('pagesNumber').value;
    const isBookRead = document.getElementById('isRead');
    let isRead;

    if (isBookRead.checked) {
        isRead = true;
    } else {
        isRead = false;
    }

    const currentBook = addBook(title, author, pagesNumber, isRead);
    displayBook(currentBook);

    booksContainer.style.display = 'none';
    newBookForm.reset();
});