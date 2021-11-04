// Task 1
// const names = [ 'Jonas', 'Tomas', 'Ona', 'Petras' ];
// console.log(names);
// names.forEach((name, index) => console.log(`${index} - ${name}`));

// Task 2
// NOTES: 1=='1' (true) / 1==='1' (false)
// NOTES: return nereikia naudo kai naudojam ES6 funkcija
// const names = [ 'Jonas', 'Tomas', 'Ona', 'Petras' ];
// const filteredNames = names.filter(name => name === 'Petras')
// console.log(filteredNames);

// const numbers = [ 1, 2, 3, 4 ];
// const filteredNumbers = numbers.filter(number => number >=3)
// console.log(filteredNumbers)

// Task 3
// const person = [
//     { id: 1, name: 'Jonas' },
//     { id: 2, name: 'Petras' },
//     { id: 3, name: 'Nida' }
// ]

// const filteredUser = person.filter(user => user.id === 3 || user.id === 2);
// console.log(filteredUser);

// Task 4
// const names = ['Jonas', 'Petras', 'Paulius', {id: 3, name: 'Jonas'} , 55];
// const filteredNames = names.filter(name => name === 55 || name === 'Jonas');
// console.log(filteredNames);

// Task 5
// const person = [
//     { id: 1, name: 'Jonas' },
//     { id: 2, name: 'Petras' },
//     { id: 3, name: 'Nida' }
// ];
// ES5
// const mappedPersons = person.map(function(user){
//     return user.name
// });

// ES6
// const mappedPersons = person.map(user => user.name );
// console.log(mappedPersons);

// TASK 6
// const persons = [
//     { id: 1, name: 'Jonas' },
//     { id: 2, name: 'Petras' },
//     { id: 3, name: 'Nida' }
// ];
// ES5
// const modifiedPersons = persons.map(function(person) {
//     return {
//         fullName: `${person.id} - ${person.name}`
//     }
// })
// ES6
// NOTES: Kuriant objekta arrow function reikalingi skliausteliai aplink objekta
// const modifiedPersons = persons.map(person => ({ fullName: `${person.id} - ${person.name}` }));
// console.log(modifiedPersons);

//Task 7
const numbers = [1, 2, 3, 4, 5];

const mappedNumbers = numbers.map((number) => ({ id: number }));
console.log(mappedNumbers);
