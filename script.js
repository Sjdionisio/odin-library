const myLibrary = [];

function Book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.id = crypto.randomUUID();
    this.read = read;
}
Book.prototype.toggleRead = function(){
    this.read = !this.read;
}
function addBookToLibrary(title, author, page, read){
    myLibrary.push(new Book(title, author, page, read));  
}
function displayBooks(){ 
    const container = document.querySelector(".books");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    myLibrary.forEach((book, index) => {
        const div = document.createElement("div");
        const deleteBtn = document.createElement("button");
        const readBtn = document.createElement("button");
        div.classList.add("book");
        div.textContent = `Title:${book.title} 
        Author:${book.author} 
        Pages:${book.page} 
        ID: ${book.id}  `;
        deleteBtn.classList.add("delete-btn");
        deleteBtn.id = "deleteBtn";
        deleteBtn.textContent = "Delete";

        readBtn.classList.add("read-btn");
        readBtn.id = "readBtn";
        readBtn.textContent = `${book.read ? "Read" : "Not Read"}`;
        div.appendChild(deleteBtn);
        div.appendChild(readBtn);
        container.appendChild(div);
        deleteBtn.addEventListener("click",()=>{
            myLibrary.splice(index,1);
            displayBooks();
        });
        readBtn.addEventListener("click",()=>{
            book.toggleRead();
            displayBooks();
        });
    });
}

const showButton = document.getElementById("modalBtn");
const modal = document.getElementById("addModal");
const confirmBtn = modal.querySelector("#confirmBtn");



showButton.addEventListener("click",()=>{
    modal.showModal();    
});

confirmBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const addForm = new FormData(document.querySelector("#addForm"));
    const title = addForm.get("title");
    const author = addForm.get("author");
    const pages = addForm.get("pages");
    const readStatus = addForm.get("read") === "1" ? true : false;
    console.log(readStatus);
    addBookToLibrary(title,author,pages,readStatus);
    displayBooks();
    modal.close();
})
