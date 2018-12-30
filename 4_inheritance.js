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

// magazine constructor (inherit propeties from book constructor)
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

// magazine prototype (inherit from book prototype getSummary)
Magazine.prototype = Object.create(Book.prototype)

/*************************************/
// instantiate object's magazine1 and magazine2
const mag1 = new Magazine('Magazine One', 'John Doe', '2018', 'Jan')
const mag2 = new Magazine('Magazine Two', 'Jan Doe', '2016', 'Dec')


// use magazine constructor
Magazine.prototype.constructor = Magazine

// output
console.log(mag1)
//console.log(mag1.getSummary())
console.log(mag2)
//console.log(mag2.getSummary())
