/* eslint-disable no-unused-vars */

// let - const
// class - extend
// Promise
// Async - await
// for of
// arrow functions
// DESTRUCTURING
// template strings
// Map / Set
// Iterators & generators

const obj = {
    name: 'Pepe',
    age: 22,
};

for (const key in obj) {
    const element = obj[key];
}

for (const iterator of 'Pepe') {
    console.log(iterator);
}

[1, 3, 4, 5].forEach(() => {});

[1, 2, 1, 3, 2, 1];

console.log(Array.from(new Set([1, 2, 1, 3, 2, 1])));

function add(a, b, ...rest) {
    console.log(rest);
    return a + b;
}

function addAny(...rest) {
    console.log(rest);
    return rest[0] + rest[1];
}

console.log(add(1, 3, 5, 6));
console.log(addAny(1, 3, 5, 6));

const aData = [10, 30, 50, 60];
console.log(addAny(...aData));

const obj1 = {
    name: 'Pepe',
    age: 22,
};
const obj2 = { ...obj1, age: 23 };

const { age, name: userName } = obj1;

// const name = obj1.name;
// const age = obj1.age;

console.log(userName, age);

let [uno, dos, tres] = [34, 56, 78];

function* gen() {
    yield 1;
    // TODO
    yield 2;
    // TODO
    yield 3;
    return 4;
}

const gen1 = gen();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

new Promise();
