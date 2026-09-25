/* Spreader Operator
    Syntax: ...arr or ...obj
    
    Definition: allows you to expand or unpack an iterable—such as an array, an object, or a string—into individual elements
*/

let students = ["del rosario", "oronce", "aguirre", "nalog"];
// console.log(`Students: ${students}`);

let newStudents = ["ian", "marod", "dustin"];
// console.log(`New students: ${newStudents}`);

// How to add the new students in our array: 'students' ??
/* Mutation
    Definition: the act of changing or modifying the internal state or data structure of an object, array, or variable after it has been created

    In simple term: When we are changing the value of an existing collection.
*/
students.push(newStudents);
// console.log(`All Students: ${students}`);

/* Value Recreation
    > We are going to re-create the object (state) from scratch.
    1. We must keep the original value of our state
*/

let teacher = { name: "Ian", age: 99, gender: "Male" };
// console.log(teacher);

// teacher = { age: 100, ...teacher };
// console.log(teacher);

// How do we get a specific OBJ attribute?
let fern = [
  {
    first_name: "Ian",
    last_name: "Sube",
    age: 99,
    profile: "profile",
  },
  {
    first_name: "Fern",
    last_name: "No",
    age: 21,
    profile: "fern",
  },
];

/*
1. Object index position
2. Object key (first_name: "Fern")
*/

// console.log(`First Name: ${fern[1]}`);
console.log(fern[1].first_name);
