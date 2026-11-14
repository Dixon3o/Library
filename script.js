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

    const deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete";
    deleteBook.classList.add("deleteBtn");
    deleteBook.dataset.id = book.id;

    const changeRead = document.createElement("button");
    changeRead.textContent = "Change read status";
    changeRead.classList.add("statusBtn");
    changeRead.dataset.id = book.id;

    div.append(title,author,pages,year,read, deleteBook, changeRead);
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
    //this is preventing a form to sends its values to the server by default
    e.preventDefault();
    extractingTheForm();
});


cdiv.addEventListener('click', (e)=> {
    if(e.target.classList.contains("deleteBtn")){
        const id = e.target.dataset.id;
        const index = myLibrary.findIndex(book => book.id === id);
        if(index != -1){
            myLibrary.splice(index, 1);
        }
        displayBooks();
    }
    
});

Book.prototype.statusChange = function(){
    if(this.read == true){
        this.read = false;
    }else{
        this.read = true;
    }
}

cdiv.addEventListener('click', (e) =>{
    if(e.target.classList.contains("statusBtn")){
        const id = e.target.dataset.id;
        const book = myLibrary.find(book => book.id === id);
        book.statusChange();
        displayBooks();
    }
});

displayBooks();