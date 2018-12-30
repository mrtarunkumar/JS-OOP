// object of protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// create object
// method 1
// const book1 = Object.create(bookProtos)
// book1.title = 'Book One'
// book1.author = 'John Doe'
// book1.year = '2018'

// const book2 = Object.create(bookProtos)
// book2.title = 'Book Two'
// book2.author = 'Jane Doe'
// book2.year = '2016'


// create object
// method 2
const book1 = Object.create(bookProtos, {
    title: { value: 'Book One'},
    author: {value: 'John Doe'},
    year: {value: '2018'}
})

const book2 = Object.create(bookProtos, {
    title: { value: 'Book Tow'},
    author: {value: 'Jane Doe'},
    year: {value: '2016'}
})

// output
console.log(book1)
console.log(book2)