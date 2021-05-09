const students = [
    { id: 1, name: 'Omar Sunny' },
    { id: 2, name: 'Mannaa' },
    { id: 3, name: 'Popy' },
    { id: 4, name: 'Dipjol' },
    { id: 5, name: 'Misa' },
];

const names = students.map(student => student.name);
console.log(names);

const bigger = students.filter(student => student.id > 4);
console.log(bigger);

const find = students.find(student => student.id > 2);
console.log(find);