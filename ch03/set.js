// set

// 속성 => 속성값 : Map type

// 속성 => 속성 : Set Type

let set = new Set();
set.add("그바르디올");
set.add(20);
set.add({});
set.add("그바르디올");
// 중복된 값 허용 X.

console.log(set.size); // 3

// key와 value 형식으로 return.
for(let [key,val] of set.entries()){
  console.log(`key: ${key}, val: ${val}`);
}
// set은 key, value값이 동일.

for(let key of set.keys()){
  console.log(`key: ${key}`);
}

for(let val of set.values()){
  console.log(`val: ${val}`);
}

let obj1 = {name:'hong'};
let obj2 = {name:'hong'};
set.add(obj1);
set.add(obj2);
// 각각 다른 객체이므로 name 중복을 골라낼 수 없음.
console.log(set.size); // 5