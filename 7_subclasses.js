class Book {
    // object constructor
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // getSummary method Prototype
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// magazine subclass
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}


const mag1 = new Magazine('Magazine One', 'John Doe', '2018', 'Jan')
const mag2 = new Magazine('Magazine Two', 'Jan Doe', '2016', 'Dec')

// output
console.log(mag1)
console.log(mag1.getSummary())
console.log(mag2)
console.log(mag2.getSummary())
