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

function addButton () {
    
  // create the main div that carries the whole body of the input forms
    let mainDiv = document.createElement('div');

    // the mainDiv styling
    mainDiv.style.cssText= 'width:100%; display:block;';

    // creating another div in the maindiv----------------->
      let mainbDiv = document.createElement('div');
      mainbDiv.style.cssText = 'width:100%;';
      let secDiv = mainDiv.appendChild(mainbDiv);
      
      // styling the secdiv 
      secDiv.style.cssText = 'width: 80%; margin: auto;';

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
      inputName.setAttribute('id', 'input');

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
      inputAuthor.setAttribute('id', 'input');

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
      inputNumber.setAttribute('id', 'input');

      // the input css styling
      inputNumber.style.cssText = 'width: 100%; margin: 2px; padding:4px;';
      numberFPdiv.appendChild(inputNumber);


      // Add a checkbox input for indicating whether the book is read or unread
      let readDiv = document.createElement('div');
      let readDivs = secDiv.appendChild(readDiv);
      readDivs.style.cssText = 'width: 100%; margin: 2px; padding:4px;';
      let readLabel = document.createElement('label');
      readLabel.textContent = 'Read? ';
      readDivs.appendChild(readLabel);

      let readCheckbox = document.createElement('input');
      readCheckbox.setAttribute('type', 'checkbox');
      readDivs.appendChild(readCheckbox);
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

        if (inputName.value === '' && inputAuthor.value === '' && inputPages.value ===  '') {
          alert('Please fill out all the fields');
          return;
      } 

        // get input value----------------------------
        titles = inputName.value;
        Author = inputAuthor.value;
        Pages = inputNumber.value;

        let newResult = new Book;



        // create a div that input will display--------------------------------------------------------------------
        let resultDivs = document.createElement('div');
        resultDivs.style.cssText = 'width: 100%; display: flex; border: 2px solid black; margin-top: 4px; padding: 10px; background-color: white; justify-content: space-between;'; 
        let resultDiv = rootDiv.appendChild(resultDivs);

        // the book name result div in the div display----------------------------------------------------
        let bookNameResultDiv = document.createElement('div');
        let BNResultDiv = resultDiv.appendChild(bookNameResultDiv);
        BNResultDiv.style.cssText = 'display:block;border-right:1px solid black; padding: 10px;';

        //the label of the book name result
        let bookName = document.createElement('p');
        bookName.textContent = 'Name of Book';
        bookName.style.cssText = 'font-weight:bold;border-bottom:1px solid black;';
        BNResultDiv.appendChild(bookName);

        // the result of the book name value
        let bookNameResultdisplay = document.createElement('p');
          bookNameResultdisplay.textContent = titles;
          bookNameResultdisplay.style.cssText = 'color:green; align-items: center;';
          BNResultDiv.appendChild(bookNameResultdisplay);
          // resultDiv.appendChild(newResult); 

        // the book author result div in the div display--------------------------------------------------------------->
        let bookAuthorResultDiv = document.createElement('div');
        let BAResultDiv = resultDiv.appendChild(bookAuthorResultDiv);
        BAResultDiv.style.cssText = 'display:block;border-right:1px solid black;padding:10px;';

        //the label of the book name result
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = 'Name of Author';
        bookAuthor.style.cssText = 'font-weight:bold;border-bottom:1px solid black;';
        BAResultDiv.appendChild(bookAuthor);

        // the result of the book name value
        let bookAuthorResultdisplay = document.createElement('p');
      
          bookAuthorResultdisplay.textContent = Author;
          bookAuthorResultdisplay.style.cssText = 'color:green; align-items: center;';
          BAResultDiv.appendChild(bookAuthorResultdisplay);
          // resultDiv.appendChild(newResult);
        

        // the book number of pages results
        let bookNumbersDiv = document.createElement('div');
        let BNumDIv = resultDiv.appendChild(bookNumbersDiv);
        BNumDIv.style.cssText = 'display:block;border-right:1px solid black;padding:10px;';

        // the label of the  number of pages 
        let bookPages = document.createElement('p');
        bookPages.textContent = 'Number of pages';
        bookPages.style.cssText = 'font-weight:bold;border-bottom:1px solid black;';
        BNumDIv.appendChild(bookPages);

        // the number of pages values
        let bookPageResultdisplay = document.createElement('p');
        bookPageResultdisplay.textContent = Pages;
        bookPageResultdisplay.style.cssText = 'color:green; align-items: center;';
        BNumDIv.appendChild(bookPageResultdisplay);
        // resultDiv.appendChild(newResult);
        // return and empty input
        
        let allInput = document.querySelectorAll('input');
        allInput.forEach(everyInput => {
          if (everyInput.type === 'checkbox') {
            everyInput.checked = false;
          } else {
            everyInput.value = '';
          }
        });

        // for the checkbox to show it is read or not
        // label for read status
        let readStatusDiv = document.createElement('div');
        let allReadStatus = resultDiv.appendChild(readStatusDiv);
        allReadStatus.style.cssText = 'display:block;border-right:1px solid black; padding:10px;';
        let readStatus = document.createElement('p');
        
        readStatus.textContent = 'Read Status';
        readStatus.style.cssText = 'font-weight:bold;border-bottom:1px solid black;';
        allReadStatus.appendChild(readStatus);

        // result for read status
        const isRead = readCheckbox.checked;

        // Display whether the book is read or unread
        
        let readStatusResult = document.createElement('p');
        readStatusResult.textContent = isRead ? 'Read' : 'Unread';
        readStatusResult.style.cssText = 'color:green; align-items: center;';
        let insideRead = resultDiv.appendChild(readStatusDiv)
        insideRead.appendChild(readStatusResult);
    

        // the delete button in the div 

        let deleteDiv = document.createElement('div');
        let Ddiv = resultDiv.appendChild(deleteDiv);
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.cssText = 'background-color:gray; border:1px solid black; margin:10px;border-radius:16px; padding:10px;';
        deleteDiv.style.cssText = 'align-items: center;';
        Ddiv.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
          // Assuming you want to remove the entire resultDiv when the delete button is clicked
          resultDiv.remove();
        });
        
        // ... (previous code)

    // the edit button in the div 
    let editDiv = document.createElement('div');
    let Ediv = resultDiv.appendChild(editDiv);
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.cssText = 'background-color: orange; border: 1px solid black; margin:10px;border-radius:16px; padding:10px;';
    editDiv.style.cssText = 'align-items: center; justify-content: center;';
    Ediv.appendChild(editBtn);


    // edit button event listener

    editBtn.addEventListener('click', () => {
      // Replace the display with input fields for editing

      // Replace the book name display with an input field
      let editBookNameInput = document.createElement('input');
      editBookNameInput.setAttribute('type', 'text');
      editBookNameInput.value = titles; // Set the current value

      BNResultDiv.replaceWith(editBookNameInput);

      // Replace the book author display with an input field
      let editBookAuthorInput = document.createElement('input');
      editBookAuthorInput.setAttribute('type', 'text');
      editBookAuthorInput.value = Author; // Set the current value

      BAResultDiv.replaceWith(editBookAuthorInput);

      // Replace the number of pages display with an input field
      let editBookPagesInput = document.createElement('input');
      editBookPagesInput.setAttribute('type', 'number');
      editBookPagesInput.value = Pages; // Set the current value

      BNumDIv.replaceWith(editBookPagesInput);

      // Add a "Save" button to save the changes
      let saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      saveBtn.style.cssText = 'background-color: green; border: 1px solid black;margin:10px; border-radius: 16px; padding: 10px;';
      editBtn.remove();
      Ediv.appendChild(saveBtn);

      saveBtn.addEventListener('click', () => {
        // Save the changes and update the display
        titles = editBookNameInput.value;
        Author = editBookAuthorInput.value;
        Pages = editBookPagesInput.value;

        // Update the display with the new values
        bookNameResultdisplay.textContent = titles;
        bookAuthorResultdisplay.textContent = Author;
        bookPageResultdisplay.textContent = Pages;

        // Remove the input fields and save button, and add back the "Edit" button
        editBookNameInput.replaceWith(BNResultDiv);
        editBookAuthorInput.replaceWith(BAResultDiv);
        editBookPagesInput.replaceWith(BNumDIv);
        saveBtn.remove();
        Ediv.appendChild(editBtn);
      });
  });
      
      // console.log(newResult);
    })
    
    buttonClear.addEventListener('click', () => {
        let allInput = document.querySelectorAll('input');
        allInput.forEach(everyInput => {
          if (everyInput.type === 'checkbox') {
            everyInput.checked = false;
          } else {
            everyInput.value = '';
          }
        });
})



    return mainDiv;
}

// button the clear all the input

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