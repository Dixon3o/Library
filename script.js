const myLibrary = [];

function Book(title, author, pages, yearPublished, read){
    if(!new.target){
        throw Error("You must use word 'new'.");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yearPublished = yearPublished;
    this.read = read;
}

function addBookToLibrary(title, author, pages, yearPublished, read){

    const book = new Book(title, author, pages, yearPublished, read);
    myLibrary.push(book);

}