// practice 1

let friends = [{name:'라이언',age:5},{name:'어피치',age:3},
               {name:'콘',age:4}, {name:'프로도',age:2}];

let obj1 = {};              
let newFriends = friends.map(function(val, idx){
  let obj = {};
  obj.sno = idx + 1;
  obj.sname = val.name;
  obj.age = val.age*2;
  obj1 = Object.assign({}, obj);


  return `<td>${obj.sno}</td><td>${obj.sname}</td><td>${obj.age}</td>`;
});
console.log(newFriends.join('-'));

let tag = '<table border=1>';
tag+='<tr>';
for(let field in obj1){
  console.log(field);
  tag += `<th>${field}</th>`;
}
tag+='</tr>';

tag += '<tr>'+newFriends.join('</tr><tr>')+'</tr>';

tag += '</table>'; 

document.write(tag);