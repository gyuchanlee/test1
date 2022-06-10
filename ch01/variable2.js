// 원시형 vs 참조형
// string, number, boolean, undefined  vs  object(object, array, function)

let str1 = 'Hello';
let str2 = str1;
console.log(`${str1}, ${str2}`);
str2 = 'Nice';
console.log(`${str1}, ${str2}`);

let obj1 = {
  fname : 'Hong'
}
let obj2 = obj1;
console.log(`${obj1.fname}, ${obj2.fname}`);
obj2.fname = 'Hwang';
console.log(`${obj1.fname}, ${obj2.fname}`);

const obj3 = {
  fname:'park'
}
// 상수는 변경 불가능


// 심볼
let sym1 = Symbol('text');
let sym2 = Symbol('text');

console.log(sym1 == sym2); // false

let hong = {
  sym1:'홍길동'
}