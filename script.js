import { addBook } from "./books.js";

const booksContainer = document.getElementById('newBookFormContainer');
const showFormButton = document.getElementById('showFormButton');
const hideFormButton = document.getElementById('hideFormButton');

showFormButton.addEventListener('click', () => {
    booksContainer.style.display = 'flex';
});

hideFormButton.addEventListener('click', () => {
    booksContainer.style.display = 'none';
});