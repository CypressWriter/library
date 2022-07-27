let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}



document.getElementById("submit").onclick = function addBookToLibrary() {
  const newBook = Object.create(Book.prototype)

  var titleValue = document.getElementById("title").value
  newBook.title = titleValue

  console.log(newBook.title) 

  let titletext = newBook.title
  document.getElementById("booklist").innerText = titletext

  // document.getElementById("booklist").textContent = newBook.titleValue

  return newBook
}