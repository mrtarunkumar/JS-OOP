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

    // getAge method Prototype
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    // revise method Prototype
    revise (newYear){
        this.year = newYear;
        this.revised = true; 
    }

    //static method
    static topBookStore(){
        return 'Barnes & Noble'
    }
}

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2018');

// output
console.log(book1)
book1.revise('2019')
console.log(book1)

console.log(Book.topBookStore())