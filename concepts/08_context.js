const person = {
    surname: 'Stark',
    knows: function(what, name) {
        console.log(`You ${what} know ${name} ${this.surname}`);
    }
}

const John = {
    surname: 'Snow'
}

person.knows('All', 'Bran');

// John.__proto__ = person;
// John.knows('All', 'John');

person.knows.call(John, "All", "John");
person.knows.apply(John, ["NOTHING", "John"]);

person.knows = person.knows.bind(John);

person.knows( "All", "John");


per