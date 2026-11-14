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

const cdiv = document.querySelector(".container");

function displayBooks(){
    cdiv.replaceChildren();
    myLibrary.forEach(book => {

    let div = document.createElement("div");
    div.classList.add("book");

    div.dataset.id = book.id;

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;
    
    const pages = document.createElement("p");
    pages.textContent = `pages: ${book.pages}`;

    const year = document.createElement("p");
    year.textContent = `Year published: ${book.yearPublished}`;

    const read = document.createElement("p");
    read.textContent = book.read ? "Has been read" : "Yet to read";

    div.append(title,author,pages,year,read);
    cdiv.appendChild(div);
    });
    
}

function extractingTheForm(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let year = document.querySelector("#year").value;
    let read = document.querySelector("#read").value;
    read = read === "yes";
    addBookToLibrary(title, author, pages, year, read);
    displayBooks();
    document.querySelector('#my-dialog').close();
    document.querySelector("#book-form").reset();
}

const form = document.querySelector("#book-form");
form.addEventListener("submit", (e) => {
    //this is preventing a from to sends its values to the server by default
    e.preventDefault();
    extractingTheForm();
});

displayBooks();