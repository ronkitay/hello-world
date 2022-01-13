let people = [
    {"name" : "Avi", age:20},
    {"name" : "Ron", age:30},
    {"name" : "Dana", age:25}
]

function thePeople(people) {
    let peopleInRange = people.filter(person => person.age >= 22 && person.age <= 32);
    console.log(peopleInRange.map( person => person.name));
    return peopleInRange.map(person => person.name.length);
}

console.log(thePeople(people));
