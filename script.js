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

    addBook(title, author, pagesNumber, isRead);

    const newBook = document.createElement('div');
    newBook.classList.add('newBookContainer');

    newBook.innerHTML = `
        <div style="margin-bottom: 10px;"><b>Title:</b> ${title}</div>
        <div style="margin-bottom: 10px;"><b>Author:</b> ${author}</div>
        <div style="margin-bottom: 10px;"><b>Pages:</b> ${pagesNumber}</div>
        <div><b>Read:</b> ${isRead ? 'Yes' : 'No'}
    `;

    newBooksContainer.appendChild(newBook);
    booksContainer.style.display = 'none';
    newBookForm.reset();
});