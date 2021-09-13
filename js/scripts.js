let books = [];
const Book = function (title,author) {
    this.title = title;
    this.author = author;
};

const addBook = ()=>{
    const title = document.getElementById('enterTitle').value;
    const author = document.getElementById('enterAuthor').value;
    console.log(title);
    
    books.push(new Book(title,author));
    console.log(books);
    console.log('This function is called');
};
const removeBook = (title)=>{
    books = books.filter(el => el.title != title);
};

//addBook('A','B');
console.log(books);
//removeBook('A');
console.log(books);