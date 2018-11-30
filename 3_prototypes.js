// object constructor

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary Prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// getAge Prototype
Book.prototype.getAge = function (){
    const years = new Date().getFullYear - this.year;
    return `${this.title} is ${this.years} years old`  
}

/*************************************/
// instantiate object's book1 and book2

const book1 = new Book('Book One', 'John Doe', '2018')
console.log(book1)
// console.log(book1.title)
// console.log(Object.keys(book1))
// console.log(Object.values(book1))
console.log(book1.getSummary())
console.log(book1.getAge())

const book2 = new Book('Book Two', 'Jane Doe', '2016')
console.log(book2)
// console.log(book2.title)
// console.log(Object.keys(book2))
// console.log(Object.values(book2))
console.log(book2.getSummary())
console.log(book1.getAge())