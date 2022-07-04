function sum(arrayOfNumbers) {
    let result = 0;
    arrayOfNumbers.forEach(element => result += element);
    return result;
}

let sumOfNumbers = sum([1, 2, 3]);
console.log(sumOfNumbers);

function countAsInString(string) {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "A") {
            result += 1;
        }
    }
    return result;
}

function countAs(arrayOfStrings) {
    let result = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {
        result += countAsInString(arrayOfStrings[i]);
    }
    return result;
}

console.log(countAs(["ABCD", "AABBCCDD", "AAABBBCCC", "There are no A's here!"]));

function add(num1, num2) {
    return num1 + num2;
}

function mil(num, times) {
    let result = 0;
    for (let i = 0; i < times; i++) {
        result = add(result, num);
    }
    return result;
}

console.log(mil(5, 7));
console.log(mil(3, 0));
console.log(mil(17, 1));
console.log(mil(11, 9));

function printInnerWordLength(array) {
    // console.log(typeof array);
    let lastElement = array[array.length-1];
    if (typeof lastElement === 'object') {
        printInnerWordLength(lastElement);
    }
    else {
        console.log(lastElement.length);
    }
}

printInnerWordLength([ 'Avi', 23, [ 1, 2, [ "A", "B", [ "Hello" ] ] ] ]);


function avgMatrix(matrix) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           count += 1;
           sum += matrix[i][j];
        }
    }
    return sum/count;
}

console.log(avgMatrix( [[1,2,3], [4,5,6] , [7,8,9]]));
console.log(avgMatrix( [[80,90,100], [90,90,90] , [60,75,78]]));

let person = {
    "Name": "Avi Cohen",
    "Age": 30,
    "Address": {
        "Street": "Herzel",
        "Num": 23,
        "City": "Tel Aviv",
        "Phones": {
            "Mobile": "054-1111",
            "Fax": "03-2222",
            "Home": "02-222222"
        }
    }
}

function whoHasMyPone(people, faxNumber) {
    function printIfHasMyFax(person, faxNumber) {
        if (person.Address.Phones.Fax == faxNumber) {
            console.log(`${person.Name} lives at ${person.Address.City}`)
        }
    }

    for (let i = 0; i < people.length; i++) {
        printIfHasMyFax(people[i], faxNumber);
    }
}

whoHasMyPone([ person ], "03-2222");


function showMeGoodGrades(student, minGrade) {
    console.log(`Name: ${student.Name}`)
    console.log(`Grades: `)
    for (let i = 0; i < student.Grades.length; i++) {
        if (student.Grades[i].Grade > minGrade) {
            console.log(`\t${student.Grades[i].Course} => ${student.Grades[i].Grade}` )
        }
    }
}

let student = {
    "Name": "John",
    "Id": "123",
    "Grades": [
        { "Course": "Extreme Math!", "Grade": 55},
        { "Course": "Easy Math", "Grade": 76},
        { "Course": "Evil Poetry", "Grade": 96},
    ]
}

showMeGoodGrades(student, 75);