class Book {
    constructor (titles, namesOfAuthor, numberOfPages, readings) {
    this.titles = titles;
    this.namesOfAuthor = namesOfAuthor;
    this.numberOfPages = numberOfPages;
    this.readings = readings;
    
    // function() {
    //         readIn.textContent = 'Unread';
    //         readIn.style.cssText = 'background-color:white; color:black;'
    //     };
    };
}

// const formIn = querySelector(form);
// let readIn = document.getElementById('#readIn');
// let submit = document.getElementById('#submit');
// let clear = document.getElementById('#clear');
// let output = document.getElementById('#output');
// let titles = document.getElementById('#titles');
// let numberRead = document.getElementById('numberRead');
// let namesOfAuthor = document.getElementById('#namesOfAuthor');
// let numberOfPages = document.getElementById('#numberOfPages');



const myLibrary = [];

//---------------------The Constructor------------------------------------------------

// let inut = prompt('name of book:',);
// titles = inut;
let titles = 'stehne';
let noa = 'chuana achebe';
let nop = 50;

let book1 = new Book(titles, noa, nop);
myLibrary.push(book1);
console.log(myLibrary);
