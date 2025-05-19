const myLibrary = [];

function Book(title, author, page, id){
    this.title = title;
    this.author = author;
    this.page = page;
    this.id = id;
}

function addBookToLibrary(title, author, page){
    let id = crypto.randomUUID();
    myLibrary.push(new Book(title, author, page, id));  
}

function displayBooks(){ 
    const container = document.querySelector(".books");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    myLibrary.forEach(book => {
        const div = document.createElement("div");
        const deleteBtn = document.createElement("button");
        div.classList.add("book");
        div.textContent = `Title:${book.title} 
        Author:${book.author} 
        Pages:${book.page} 
        ID: ${book.id}`;
        deleteBtn.classList.add("delete-btn");
        deleteBtn.id = "deleteBtn";
        deleteBtn.setAttribute("data_id",book.id);
        deleteBtn.textContent = "Delete";
        div.appendChild(deleteBtn);
        container.appendChild(div);
    });
}

const showButton = document.getElementById("modalBtn");
const modal = document.getElementById("addModal");
const title = modal.querySelector("#title");
const author = modal.querySelector("#author");
const pages = modal.querySelector("#pages");
const confirmBtn = modal.querySelector("#confirmBtn");

showButton.addEventListener("click",()=>{
    modal.showModal();    
});
modal.addEventListener("close",(e)=>{
    addBookToLibrary(title.value,author.value,pages.value);
    displayBooks();
})
confirmBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.close();
})
