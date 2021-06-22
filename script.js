function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
       let res = `${title} by ${author}, ${pages} pages, ${read}`;
       console.log(res)
    }
}
const theHobbit = new Book('The hobbit', "JRR Tolkien", 295, "not read yet") 