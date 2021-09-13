const books = [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const bookList = document.getElementById('booklist');
const title = document.getElementById('enterTitle').value;
const author = document.getElementById('enterAuthor').value;

const addLi = (title, author) => {
  const li = document.createElement('li');
  li.innerText = `${title} - ${author}`;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Remove';
  li.appendChild(btn);
  return li;
};

const addBook = () => {
  bookList.appendChild(addLi(title, author));
  
  books.push(new Book(title,author));
  console.log(books);
  console.log('This function is called');
};

// const removeBook = (title)=>{
//   books = books.filter(el => el.title != title);
// };

const addNRefresh = () => {
  console.log('REFRESHING');
  bookList.innerHTML = "";
  books.push(new Book(title, author));
  books.forEach(
    (book) => {
      bookList.appendChild(addLi(book.title, book.author));
    },
  );
};

document.getElementById("btnAdd").addEventListener("click", addNRefresh());

//addBook('A','B');
console.log(books);
//removeBook('A');
console.log(books);