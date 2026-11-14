# My Library

A simple library app built with vanilla HTML, CSS and JavaScript. You can add books, remove them, and toggle whether you've read them. This is another project from The Odin Project.

# Features
* Add a new book (title, author, pages, year published, read status) through a modal form
* Display all books as cards on the page
* Remove a book from the library
* Toggle a book's read status
* Each book has a unique, stable id generated with crypto.randomUUID()
# Tech Stack
* HTML5 (including the <dialog> element)
* CSS3 (Flexbox)
* Vanilla JavaScript (no frameworks or libraries)

# Project Structure

├── index.html  
├── style.css    
├── script.js    
└── README.md
# How to clone it
1. Clone the repository:
   ```bash
   git clone https://github.com/Dixon3o/Library.git
   ```
2. Open the project folder:
   ```bash
   cd Library
   ```
3. Open `index.html` in your browser (or use an extension such as Live Server in VS Code).

# What I Learned
* Creating objects with constructor functions and the new keyword
* Using prototypes to share methods between instances
* Generating unique IDs with crypto.randomUUID()
* Connecting DOM elements to objects using data-* attributes
* Working with the 'dialog' element and preventing default form submission

# NOTE
I am not using any localStorage or any other way of perssiting the array, so every time you refresh the page or exit it, the array will be empty. Whole idea of this project is to test my JS knowledge I learned so far.