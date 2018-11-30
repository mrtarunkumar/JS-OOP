// object constructor

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    // console.log('Book initialised..')  
}

/*************************************/
// instantiate object's book1 and book2

const book1 = new Book('Book One', 'John Doe', '2018')
console.log(book1)
// console.log(book1.title)
// console.log(Object.keys(book1))
// console.log(Object.values(book1))
console.log(book1.getSummary())

const book2 = new Book('Book Two', 'Jane Doe', '2016')
console.log(book2)
// console.log(book2.title)
// console.log(Object.keys(book2))
// console.log(Object.values(book2))
console.log(book2.getSummary())