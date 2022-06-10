// tagged literal

let str = 'Hello World';
let message  = 'Hi';
str = `${message}`;

let result = `${str=='Hi'?true:false}`;
console.log(result);

// 배열요소 : map A -> B, filter (true) A -> A, reduce map,filter, 집계
let friends = [{name:'라이언',age:5},{name:'어피치',age:3},
               {name:'콘',age:4}, {name:'프로도',age:2}];

// 매핑처리.
let newFriends = friends.map(function(val,idx){
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age*2;
  obj.sno = idx+1;

  return obj;
});

console.log(newFriends);

newFriends= friends.filter(function(val,idx){
  return idx > 1;
});
console.log(newFriends);

console.clear();

newFriends = friends.reduce(function(accum,val,idx,arr){
  // console.log(accum,val)
  // return accum + val.age;
  let tag = '';
  if(idx==0){ // table 열기
    tag += '<table border=2>';
    // th
    tag += '<tr>';
    for(let field in friends[0]){
      tag += `<th>${field}</th>`;
    }
    tag += '</tr>';
  }
  // td
  tag += `<tr><td>${val.name}</td><td>${val.age}</td></tr>`;  

  if(idx==friends.length-1){ // table 닫기
    tag += '</table>';
  }
  return accum + tag;
  // let obj = {};
  // obj.sname = val.name;
  // obj.age = val.age*2;
  // obj.sno = idx+1;
  // if(obj.age > 7){
  //   accum.push(obj); // [{}] {}/
  // }
  // return accum; 
},'');
console.log(newFriends);

document.write(newFriends);