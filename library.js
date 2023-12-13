// let formIn = document.querySelector(form);
let readIn = document.querySelector('#readIn');
let submit = document.querySelector('#submit');
let clear = document.querySelector('#clear');
let output = document.querySelector('#output');
let myBook;

// class object to control the values
class Book {
    constructor (titles, nameOfAuthor, noOfPages, noRead) {
    this.titles = titles;
    this.Author = nameOfAuthor;
    this.Pages = noOfPages;
    this.read = noRead;
    };
}

myBook = []

function addBook(bookList) {
    bookList.forEach(book => {
        Object.keys(book).forEach(book => {
            console.log(key, book[key]);
        })
    });
}

// button that will accept all the values
submit.addEventListener('click', () => {
    let title = document.querySelector('#titleBook').value;
    let Author = document.querySelector('#nameOfAuthor').value;
    let noPages = document.querySelector('#noOfPages').value;
    let noRead = document.querySelector('#noRead').value;

    // the object that will return the new lists
    let book1 = new Book(title, Author, noPages, noRead);
    console.log(book1);
    myBook.push(book1)
    console.log(myBook);
    addBook(myBook);
    console.log(book1.titles);

    // display it on the output
    document.querySelector('#titleStatus').innerHTML = book1.titles;
    let AuthorStatus = document.queryselector ('#nameOfAuthorStatus');
    let PageStatus = document.queryselector ('#nameOfPagesStatus');
    let noOfread = document.queryselector ('#numberReadStatus');
});

















// let book1 = new Book(titles, noa, nop);
// myLibrary.push(book1);
// console.log(myLibrary);

  // this.readings = readings;
    
    // function() {
    //         readIn.textContent = 'Unread';
    //         readIn.style.cssText = 'background-color:white; color:black;'
    //     };