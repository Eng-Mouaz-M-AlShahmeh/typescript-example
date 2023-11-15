// console.log('Hi, Eng. Mouaz M. Al-Shahmeh');
interface Person {
    name: string;
    age: number;
  }

  function greet(person: Person): string {
    return `Hello, ${person.name}!`;
  }

  const myPerson: Person = { name: 'John', age: 30 };
  console.log(greet(myPerson));
