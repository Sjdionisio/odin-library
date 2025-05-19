const myLibrary = [];

function Book(title, author, page, id){
    this.title = title;
    this.author = author;
    this.page = page;
    this.id = id;
    this.info = title+" by "+author+" "+page+" pages "+id;
}

function addBookToLibrary(title, author, page){
    let id = crypto.randomUUID();
    myLibrary.push(new Book(title, author, page, id));  
}

function displayBooks(){ 
    myLibrary.forEach(book => {
        const container = document.querySelector(".books");
        const div = document.createElement("div");
        div.classList.add("book");
        div.textContent = `Title:${book.title}`;
        container.appendChild(div);
    });
}