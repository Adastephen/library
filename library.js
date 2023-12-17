// let formIn = document.querySelector(form);
let readIn = document.querySelector('#readIn');
let submit = document.querySelector('#submit');
let clear = document.querySelector('#clear');
let output = document.querySelector('#output');
let myBook;


// myBook = []

// let titstatus = document.querySelector('#titlesStatus');
// let noa = document.querySelector('#nameOfAuthorStatus');
// let nop = document.querySelector('#numberOfPagesStatus');
// let nrs = document.querySelector('#numberReadStatus');


// // class object to control the values
// class Book {
//     constructor (titles, nameOfAuthor, noOfPages, noRead) {
//     this.titles = titles;
//     this.Author = nameOfAuthor;
//     this.Pages = noOfPages;
//     this.read = noRead;
//     };
// }
// // display a list inside the list
// function addBook(bookList) {
//     bookList.forEach(book => {
//         Object.keys(book).forEach(book => {
//             console.log(key, book[key]);

//         })
//     });
// }

// // button that will accept all the values
// submit.addEventListener('click', () => {
//     let title = document.querySelector('#titleBook').value;
//     let Author = document.querySelector('#nameOfAuthor').value;
//     let noPages = document.querySelector('#noOfPages').value;
//     let noRead = document.querySelector('#noRead').value;

//     // the object that will return the new lists
//     let book1 = new Book(title, Author, noPages, noRead);
//     console.log(book1);
//     myBook.push(book1)
//     console.log(myBook);
//     addBook(myBook);
//     console.log(book1.titles);
//     output.listdiv(); 
// })




// function listdiv (){
//     let list = document.createElement('div');
//     list.style.cssText = 'width:40px; height:40px; margin:auto; background-color:blue padding:30px display:flex; justify-content: space-between;';
//     let ts = document.createElement('p');
//     ts.textContent = 'the title';
//     let ta = document.createElement('p');
//     ta.textContent = 'authors name';
//     let tnp = document.createElement('p');
//     tnp.textContent = 456;
//     let tnr = document.createElement('p');
//     tnr.textContent = 334;

//     list.appendElementChild(ts);
//     list.appendChild(ta);
//     list.appendChild(tnp);
//     list.appendChild(tnr);

//     return list;
// }
// rootDiv.list;
// console.log(listdiv);

// class object to control the values
class Book {
    constructor (titles, nameOfAuthors, noOfPages) {
    this.titles = titles;
    this.Author = nameOfAuthors;
    this.Pages = noOfPages;
    // this.read = noRead;
    };
}

let rootDiv = document.querySelector("#output2");
// rootDiv.classList.add ='';

function addButton (){
  // create the main div that carries the whole body of the input forms
    let mainDiv = document.createElement('div');

    // the mainDiv styling
    mainDiv.style.cssText= 'width:100%; display:block;';

    // creating another div in the maindiv----------------->
    let mainbDiv = document.createElement('div');
    mainbDiv.style.cssText = 'width:100%;';
    let secDiv = mainDiv.appendChild(mainbDiv);
    
    // styling the secdiv 
    secDiv.style.cssText = 'width: 50%; margin: auto;';

    //----------the name of book-field-----------------------

    let nameOfBookDiv = document.createElement('div');
    let nameFBdiv = secDiv.appendChild(nameOfBookDiv); 
    // the label of the name of book
    let nameOfBook = document.createElement('label');
    nameOfBook.textContent ='Name of book:';
    nameFBdiv.appendChild(nameOfBook);

    // the inputName field in the form
    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');

    // the input css styling
    inputName.style.cssText = 'width: 100%; margin: 2px; padding:4px;';
    nameFBdiv.appendChild(inputName);
    //================================================

    //----------the name of author-field-----------------------

    let nameOfAuthorDiv = document.createElement('div');
    let nameFAdiv = secDiv.appendChild(nameOfAuthorDiv); 
    // the label of the name of book
    let nameOfAuthor = document.createElement('label');
    nameOfAuthor.textContent ='Name of Author:';
    nameFAdiv.appendChild(nameOfAuthor);

    // the inputName field in the form
    let inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('type', 'text');

    // the input css styling
    inputAuthor.style.cssText = 'width: 100%; margin: 2px; padding:4px;';
    nameFAdiv.appendChild(inputAuthor);
    //============================================

    //----------the number of pages field-----------------------

    let numberOfPageDiv = document.createElement('div');
    let numberFPdiv = secDiv.appendChild(numberOfPageDiv); 
    // the label of the number of page
    let numberOfPage = document.createElement('label');
    numberOfPage.textContent ='Number of pages:';
    numberFPdiv.appendChild(numberOfPage);

    // the number of pages field in the form
    let inputNumber = document.createElement('input');
    inputNumber.setAttribute('type', 'number');

    // the input css styling
    inputNumber.style.cssText = 'width: 100%; margin: 2px; padding:4px;';
    numberFPdiv.appendChild(inputNumber);
    //=========================================================

    // -------the button element------------------------------------
    let buttons = document.createElement('div');
    let btnkeys = secDiv.appendChild(buttons);
    btnkeys.style.cssText ='display:flex; justify-content:space-around; width: 100%;'


    // the submit button 
    let buttonSubmit = document.createElement('button');

    // button submit styles 
    buttonSubmit.textContent = 'Submit';
    buttonSubmit.setAttribute('id', 'buttonSubmit');
    buttonSubmit.style.cssText = 'border:1px solid black; width: 50%; margin: ';

    //button submit appends
    btnkeys.appendChild(buttonSubmit);
    // =============================================
    // the clear button 
    let buttonClear = document.createElement('button');
    
    //style the clear button
    buttonClear.textContent = 'Clear';
    buttonClear.setAttribute('id', 'buttonClear');
    buttonClear.style.cssText ='border:1px solid black; width: 50%';
    btnkeys.appendChild(buttonClear);
    // ======================================================

    // the return fuctions that will be responsible for the return of the input value.----------------------------------------------
    buttonSubmit.addEventListener('click', () => {

      // get input value----------------------------
      let titles = inputName.value;
      let inputDIvAuthor = inputAuthor.value;
      let inputDIvNumber = inputNumber.value;
      let newResult = new Book;



      // create a div that input will display----------------------
      let resultDivs = document.createElement('div');
      resultDivs.style.cssText = 'display: flex; border: 2px solid black; margin-top: 4px; padding: 10px; background-color: white'; 
      let resultDiv = mainDiv.appendChild(resultDivs);

      // the book name result div in the div display-------------------
      let bookNameResultDiv = document.createElement('div');
      let BNResultDiv = resultDiv.appendChild(bookNameResultDiv);
      BNResultDiv.style.cssText = 'display:block;'

      //the label of the book name result
      let bookName = document.createElement('p');
      bookName.textContent = 'Name of Book:';
      BNResultDiv.appendChild(bookName);
      // the result of the book name value
      let bookNameResultdisplay = document.createElement('p');
      let bookNameResult = titles;
      if (titles === ''){
        alert('book name cannot be empty');
      }
        bookNameResultdisplay.textContent = bookNameResult;BNResultDiv.appendChild(bookNameResultdisplay);
      
      resultDiv.appendChild(newResult);
      
      

      // resultDiv.textContent = 'the input value: ' + inputDIvName;

      //append the resultDiv to the rootDiv
      // rootDiv.appendChild(resultDiv)

    })


    return mainDiv;
}
rootDiv.appendChild(addButton());

console.log(addButton());

























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