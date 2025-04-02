let myLibrary=[];

function Book(title, author, pages, read){
   
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.toggleRead=function(){
    this.read=!this.read
}

function toggleRead(index) {
    myLibrary[index].toggleRead()
    render()
}

function render(){
    let libraryBook=document.querySelector("#library")
    libraryBook.innerHTML = ""; //  Limpiar antes de agregar los libros
    for(let i=0;i<myLibrary.length;i++){
        let book=myLibrary[i]
        let bookEl=document.createElement("div")
        bookEl.innerHTML=`
            <div>
            <h2>Title: ${book.title}</h2>
            <h3>Author: ${book.author}</h3>
            <h3>Nº pages: ${book.pages}</h3>
            <h3>Estado: ${book.read ? "✅ Leído" : "❌ No leído"}</h3>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        `
        
        libraryBook.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1)
    render()
}


function addBookToLibrary(){
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let pages=document.querySelector("#pages").value;
    let read=document.querySelector("#read").checked;
    let newBook=new Book(title,author,pages,read);
    console.log(newBook)
    myLibrary.push(newBook)
    render()
    let newBookForm=document.querySelector("#new-book-form")
    newBookForm.style.display = "none"

}
render()
let newBookBtn=document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click",function(){
     // Limpiar los valores del formulario
     document.querySelector("#title").value = "VOTE ME(usted)";
     document.querySelector("#author").value = "";
     document.querySelector("#pages").value = "";
     document.querySelector("#read").checked = false;
   
   let newBookForm=document.querySelector("#new-book-form")
 newBookForm.style.display="block"
})
   document.querySelector("#new-book-form").addEventListener("submit",function(event){;
    event.preventDefault()
    addBookToLibrary() 
    
    console.log(myLibrary)
})