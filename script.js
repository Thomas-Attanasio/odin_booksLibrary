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

    const currentBook = addBook(title, author, pagesNumber, isRead);

    const newBook = document.createElement('div');
    newBook.classList.add('newBookContainer');

    newBook.innerHTML = `
        <div style="margin-bottom: 10px;"><b>Title:</b> ${title}</div>
        <div style="margin-bottom: 10px;"><b>Author:</b> ${author}</div>
        <div style="margin-bottom: 10px;"><b>Pages:</b> ${pagesNumber}</div>
        <div><b>Read:</b> <span class="readText">${isRead ? 'Yes' : 'No'}</span></div>
    `;

    const changeStatusButton = document.createElement('button');
    changeStatusButton.classList.add('changeReadStatus');
    changeStatusButton.innerHTML = 'Change Read Status';

    changeStatusButton.addEventListener('click', () => {
        const readStatusText = newBook.querySelector('.readText');

        currentBook.readStatus = !currentBook.readStatus;
        readStatusText.textContent = currentBook.readStatus ? 'Yes' : 'No';
    });

    newBooksContainer.appendChild(newBook);
    newBook.appendChild(changeStatusButton);

    booksContainer.style.display = 'none';
    newBookForm.reset();
});