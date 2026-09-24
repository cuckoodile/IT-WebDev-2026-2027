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
let students = ['pam', 'toni', 'de guzman', 'talavera']
console.log(students)

let newStudents = ['diaz', 'villadarez']
console.log(newStudents)

// Using Spread Operator, we can copy the value of an existing array
// Syntax: ...Array
newStudents = [...newStudents, ...students]
console.log(newStudents)

// In React, we cannot mutate a useState value, therefore we re-create the useState from scratch while passing it's original previous value.