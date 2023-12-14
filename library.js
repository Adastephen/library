// let formIn = document.querySelector(form);
let readIn = document.querySelector('#readIn');
let submit = document.querySelector('#submit');
let clear = document.querySelector('#clear');
let output = document.querySelector('#output');
let myBook;

// let titstatus = document.querySelector('#titlesStatus');
// let noa = document.queryselector('#nameOfAuthorStatus');
// let nop = document.queryselector('#numberOfPagesStatus');
// let nrs = document.queryselector('#numberReadStatus');


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


function listdiv (){
    let list = document.createElement('div');
    list.style.cssText = 'width: 80%; margin: auto; background-color: white padding: 30px display: flex; justify-content: space-between;'
    let ts = document.createElement('p')
    ts.textContent = 'the title';
    let ta = document.createElement('p');
    ta.textContent = 'authors name';
    let tnp = document.createElement('p');
    tnp.textContent = 456;
    let tnr = document.createElement('p');
    tnr.textContent = 334;

    list.appendChild(ts);
    list.appendChild(ta);
    list.appendChild(tnp);
    list.appendChild(tnr);
}




// function newDiv () {
//     let div = document.createElement('div');
//     div = output;
//     div.textContent = titstatus; 
// }

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
    listdiv();
    // let addDiv = new newDiv;
    // addDiv.myBook;



    // console.log(addDiv);
    // let cloneOutput = output.cloneNode(true);
    // return cloneOutput
    // document.querySelector('#titlesStatus').textContent = myBook.forEach(book => {
    //     console.log(cloneOutput);
})
    // display it on the output
   


   


// itemsArray.forEach(function(item) {
//     var div = document.createElement('div');
//     div.textContent = item.trim();  // Trim removes leading/trailing spaces
//     addBook.appendChild(div);














// let book1 = new Book(titles, noa, nop);
// myLibrary.push(book1);
// console.log(myLibrary);

  // this.readings = readings;
    
    // function() {
    //         readIn.textContent = 'Unread';
    //         readIn.style.cssText = 'background-color:white; color:black;'
    //     };