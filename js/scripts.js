class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

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

const refresh = () => {
  bookList.innerHTML = '';
  const storedBooks = JSON.parse(localStorage.books);
  storedBooks.forEach(
    (book) => {
      bookList.appendChild(addLi(book.title, book.author));
    },
  );
};

const addBook = () => {
  const title = document.getElementById('enterTitle').value;
  const author = document.getElementById('enterAuthor').value;
  const storedBooks = JSON.parse(localStorage.books);
  storedBooks.push(new Book(title, author));
  localStorage.setItem('books', JSON.stringify(storedBooks));
  document.getElementById('enterTitle').value = '';
  document.getElementById('enterAuthor').value = '';
  refresh();
};

const removeBook = (e) => {
  const tgt = e.target;
  if (tgt.tagName === 'BUTTON') {
    const title = e.composedPath()[1].firstChild.data.split(' - ')[0];
    let storedBooks = JSON.parse(localStorage.books);
    storedBooks = storedBooks.filter((el) => el.title !== title);
    localStorage.setItem('books', JSON.stringify(storedBooks));
    tgt.closest('li').remove();
  }
  refresh();
};

bookList.addEventListener('click', removeBook);
document.getElementById('btnAdd').addEventListener('click', addBook);

window.onload = () => {
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify([]));
    refresh();
  } else {
    refresh();
  }
};
