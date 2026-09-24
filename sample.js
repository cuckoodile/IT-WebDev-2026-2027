// const containerDiv = document.getElementById('container')

// // const cardDiv = User input

// containerDiv.append

// ========= Mutation ========= 
/*
    Process of updating or modifying the current data.
*/
// let students = ['pam', 'toni', 'de guzman', 'talavera']
// console.log(students)

// students.push('diaz', 'villadarez')
// console.log(students)


// ========= Data Re-creation ========= 
// let students = ['pam', 'toni', 'de guzman', 'talavera']
// console.log(students)

// let newStudents = ['diaz', 'villadarez']
// console.log(newStudents)

// Using Spread Operator, we can copy the value of an existing array
// Syntax: ...Array
// newStudents = [...newStudents, ...students]
// console.log(newStudents)

// In React, we cannot mutate a useState value, therefore we re-create the useState from scratch while passing it's original previous value.

// ========= Objects and Arrays =========
// Object (Key Value pair): Curly bracket {}
// Syntax: {Key: Value, ...}

// Array (List): Square bracket []
// Syntax: [val1, val2, val3, ...]


let teacher = {name: 'Ian', age: 99}

// console.log(teacher)

// Get the teacher's name only. (Two ways to get an attribute using key)
// console.log(teacher.name)
// console.log(teacher['name'])

// Add an attribute "last_name" with a value of "Sube" (Two methods: "." and "[]")
teacher.last_name = "sube"
teacher['last_name'] = 'Sube'

/* in PHP
teacher['last_name'] = 'Sube'
*/

// console.log(teacher)

// Update or modify an Object, Update the value of name (Ian) = 'Lhourde'
teacher.name = 'Lhourde'
teacher['name'] = 'Lhourde'
console.log(teacher)

// name: "Lhourde", last_name: "Sube"

// Delete the key: 'name'
delete teacher.name
console.log(teacher)