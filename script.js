"use strict";

let myLibrary = []; //The array having all the data of the books

//Global Variables
let index = 0; // The index
let a = "0";
let b = "0";
let c = 0;
let d = "0";
let formOpen = false;

//User Interaction
const addBtn = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector(".main");
const closeBtn = document.querySelector(".close-form");
const container = document.querySelector(".container");
const submitBtn = document.getElementById("btn-submit");
const container_books = document.querySelector('.container-books');
const form = document.getElementById("theForm");
const books = document.querySelector(".books");

const title = document.getElementById("Title");
const author = document.getElementById("Author");
const NoOfPages = document.getElementById("No");
const option = document.getElementById("name");

//Event Listeners
addBtn.addEventListener("click", function () {
  if (!formOpen) {
    form.classList.toggle("hidden");
    addBtn.style.transform = "rotate(45deg)";
    formOpen = true;
  } else {
    form.classList.toggle("hidden");
    addBtn.style.transform = "rotate(0deg)";
    formOpen = false;
  }
});

closeBtn.addEventListener("click", function () {
  form.classList.toggle("hidden");
  addBtn.style.transform = "rotate(0deg)";
});


submitBtn.addEventListener("click", addBookToLibrary);


//The class for The Book
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

//Function that add Books to the array by retrieving values from the DOM
function addBookToLibrary() {
  a = title.value;
  b = author.value;
  c = NoOfPages.value;
  d = option.options[option.selectedIndex].value;
  myLibrary[index++] = new Book(a, b, c, d);
  form.classList.toggle("hidden");
  form.reset();
  addBtn.style.transform="rotate(0deg)";
  showBooks(myLibrary);
}


function showBooks(myLibrary) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (index == i + 1) {
      //The Condition which checks wether the number of divs is equal to current index
      let div = document.createElement("div");
      div.className = "container-books";
      div.id = `div${i}`;

      let p = document.createElement("p");
      p.className = "Title";
      p.textContent = ` Title: ${myLibrary[i].title}`;
      div.appendChild(p);

      let p1 = document.createElement("p");
      p1.className = "Author";
      p1.textContent = ` Author: ${myLibrary[i].author}`;
      div.appendChild(p1);

      let p2 = document.createElement("p");
      p2.className = "Pages";
      p2.textContent = `Pages Read: ${myLibrary[i].pages}`;
      div.appendChild(p2);

      let p3 = document.createElement("p");
      p3.className = "Option";
      p3.textContent = `Satus: ${myLibrary[i].status}`;
      div.appendChild(p3);

      let button = document.createElement("button");
      button.className = "Delete";
      button.id=`Delete${i}`
      button.textContent = "Delete";
      div.appendChild(button);

      books.appendChild(div);

      const delBtn = document.getElementById(`Delete${i}`);

      delBtn.addEventListener("click", function() {
        document.getElementById(`div${i}`).remove();
        myLibrary.splice(i,1);
      });
    }
  }
}

