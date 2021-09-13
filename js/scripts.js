
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}


const addLi = (title, author) => {
  const li = document.createElement('li');
  li.innerText = `${title} - ${author}`;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Remove';
  btn.onclick = "removeBook()";
  li.appendChild(btn);
  return li;
};

const books = [];

const addBook = () => {
  //bookList.appendChild(addLi(title, author));
  
  const title = document.getElementById('enterTitle').value;
  const author = document.getElementById('enterAuthor').value;
  var storedBooks = JSON.parse(localStorage.books);
  storedBooks.push(new Book(title,author));
  window.localStorage.setItem("books",JSON.stringify(storedBooks));
  console.log('here1');
  console.log(window.localStorage);
  console.log('here2');
  console.log('This function is called');
  refresh();
};

const removeBook = ()=>{
  //const title = document.getElementById('delTitle').value;
   //books = books.filter(el => el.title != title);
   //window.localStorage.setItem("books",JSON.stringify(books));
};


const refresh = () => {
  console.log('REFRESHING');
  const bookList = document.getElementById('booklist');
  bookList.innerHTML = "";
  var storedBooks = JSON.parse(localStorage.books);
  console.log(storedBooks);
  storedBooks.forEach(
    (book) => {
      bookList.appendChild(addLi(book.title, book.author));
    },
  );
};

window.onload = () => {
  refresh();
};
//
//document.getElementById("btnAdd").addEventListener("click", addBook());

//addBook('A','B');

//removeBook('A');
