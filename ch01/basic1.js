//basic1.js

//오브젝트 타입 배열 활용
// 오브젝트.
const hong = {
  memberId : '001',
  memberName: '홍길동',
  memberAge: 25
}

const hwang = {
  memberId : '002',
  memberName: '황길동',
  memberAge: 20
}

const Kill = {
  memberId : '003',
  memberName: '홍킬동',
  memberAge: 30
}

const members = [hong,hwang,Kill];

// for..of , for..in (오브젝트)
for(let member of members)
{
  for(let obj in member)
  {
    console.log(obj+', '+member[obj]);
  }
  console.log("");
}

// 웹브라우저가 제공하는 객체  > document영역에 써짐.
document.write('<h3>Hello, world</h3>');
document.write('<ul>');
document.write('<li>사과</li>');
document.write('<li>복숭아</li>');
document.write('<li>딸기</li>');
document.write('</ul>');

let table = '<table border=1>';
table += '<tr><th>회원 아이디</th><th>회원 이름</th><th>회원 나이</th></tr>';
for(let member of members)
{
  // table += '<tr><td>'+member.memberId+'</td><td>'+member.memberName+'</td><td>'+member.memberAge+'</td></tr>';
  table += '<tr>';
  for(let field in member)
  {
    table+='<td>'+member[field]+'</td>';
  }
  table += '</tr>';
}
table += '</table>';
document.write(table);