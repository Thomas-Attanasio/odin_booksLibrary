const myBooks = [];

function Books(title, author, pagesNumber, readStatus) {
    if (!new.target) {
        console.log('You must use the "new" key to create a book object');
    }

    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.readStatus = readStatus;

    this.id = Date.now();
}

export function addBook(title, author, pagesNumber, readStatus) {
    const newBook = new Books(title, author, pagesNumber, readStatus);
    Books.push(newBook);
}