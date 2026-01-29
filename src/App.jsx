const names = ['Alice','Bob','Charlie'];
const doubled = names.map(name => name.length * 2);
console.log('Doubled lengths:', doubled);

const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log('Destructured:', name, age);

