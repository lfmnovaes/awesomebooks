/* eslint max-classes-per-file: ["error", 2] */

class Book {
  constructor(title, author) {
    this.id = (new Date()).getTime();
    this.title = title;
    this.author = author;
  }
}

const bookList = document.getElementById('booklist');

const addLi = (id, title, author) => {
  const li = document.createElement('li');
  li.id = id;
  li.className = 'element';
  li.innerText = `${title} - ${author}`;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Remove';
  li.appendChild(btn);
  return li;
};

class Bookshelf {
  constructor() {
    this.data = [];
  }

  addBook(title, author) {
    this.data.push(new Book(title, author));
    document.getElementById('enterTitle').value = '';
    document.getElementById('enterAuthor').value = '';
    this.refresh();
  }

  removeBook(id) {
    this.data = this.data.filter((el) => el.id !== id);
    this.refresh();
  }

  refresh() {
    bookList.innerHTML = '';
    localStorage.setItem('books', JSON.stringify(this.data));
    this.data.forEach(
      (book) => {
        bookList.appendChild(addLi(book.id, book.title, book.author));
      },
    );
  }
}

const myCollection = new Bookshelf();

bookList.addEventListener('click', (e) => {
  const tgt = e.target;
  if (tgt.tagName === 'BUTTON') {
    tgt.closest('li').remove();
    myCollection.removeBook(parseInt(tgt.closest('li').id, 10));
  }
}, false);

document.getElementById('btnAdd').addEventListener('click', () => {
  myCollection.addBook(document.getElementById('enterTitle').value, document.getElementById('enterAuthor').value);
}, false);

window.onload = () => {
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify([]));
  } else {
    myCollection.data = JSON.parse(localStorage.books);
    myCollection.refresh();
  }
};
