let books = [];

const bookList = document.getElementById('booklist');

const addLi = (title, author) => {
  const li = document.createElement('li');
  li.innerText = `${title} - ${author}`;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Remove';
  btn.onclick = 'removeBook';
  li.appendChild(btn);
  return li;
};

const popLi = () => {
  books.forEach(
    (book) => {
      bookList.appendChild(addLi(book.title, book.author));
    },
  );
};

const refresh = () => {
  bookList.innerHTML = '';
  localStorage.setItem('books', JSON.stringify(books));
  popLi();
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    this.title = document.getElementById('enterTitle').value;
    this.author = document.getElementById('enterAuthor').value;
    books.push({ title: this.title, author: this.author });
    document.getElementById('enterTitle').value = '';
    document.getElementById('enterAuthor').value = '';
    refresh();
  }

  removeBook(e) {
    const tgt = e.target;
    if (tgt.tagName === 'BUTTON') {
      [this.title] = e.composedPath()[1].firstChild.data.split(' - ');
      books = books.filter((el) => el.title !== this.title);
      tgt.closest('li').remove();
    }
    refresh();
  }
}

const myBook = new Book();
bookList.addEventListener('click', myBook.removeBook);
document.getElementById('btnAdd').addEventListener('click', myBook.addBook);

window.onload = () => {
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify([]));
  } else {
    books = JSON.parse(localStorage.books);
    popLi();
  }
};