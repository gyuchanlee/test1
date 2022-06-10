// map

let obj = {
  sname : 'Lee',
  age: 10
}

let map = new Map();

map.set('sname','hong');
map.set(10,2);
map.set(obj,3);
map.set(obj,3);
map.set('sname','Kim')

console.log(map.size); // 3

console.log(map.get('sname'));

// entry 값 반환 => 배열
for(let [key,val] of map.entries() ){
  console.log(`key:${key}, val:${val}`);
}
// 키값만 가져오기
for(let key of map.keys()){
  console.log(`key:${key}`);
} 
// 밸류값만 가져오기
for(let val of map.values()){
  console.log(`val:${val}`);
}

map.clear();
console.log(map.size);

let friends = [['원태인',20],['구자욱', 27],
                ['황동재',19]];

map = new Map(friends);
console.log(map);

let tag = '';

tag += '<ul>';
for(let [key,val] of map.entries()) {
  tag += createList(key, val); 
}
tag += '</ul>';

function createList(k,v){
  //<li>속성 - 속성깂</li>
  return `<li>${k} - ${v}</li>`;
}

document.write(tag);