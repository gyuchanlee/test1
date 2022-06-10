// function1.js

// 오브젝트.
const hong = {
  memberId : '001',
  memberName: '홍길동',
  memberAge: 25,
  memberHeight: 170
}

const hwang = {
  memberId : '002',
  memberName: '황길동',
  memberAge: 20,
  memberHeight: 174
}

const kill = {
  memberId : '003',
  memberName: '홍킬동',
  memberAge: 30,
  memberHeight: 180
}

const friends = [hong, hwang, kill];

// 테이블 생성.
function createTable(arr=[]){
  let tag = '<table border=2>';
  
  // th 생성
  tag += createHeader(arr[0]);
  //tr,td 생성
  tag += createBody(arr);

  tag+='</table>';
  return tag;
}
// 자동적으로 tbody를 만들어줌.
// 자바스크립트의 함수 > 주로 화면요소 만드는데 사용.

// th 생성 함수
// obj => 속성.
function createHeader(obj= {}){
  let thead = '<thead><tr>';
  
  for(let field in obj){
    thead += `<th>${field}</th>`;
  }
  thead += '</tr></thead>';

  return thead;
}

// tr, td 생성 함수
function createBody(arr=[]){
  let tag1 = '';
  for(let i=0; i<arr.length; i++){
    tag1 += '<tr>';
    for(let field in arr[i]){
      tag1 +=`<td> ${arr[i][field]} </td>`;
    }
    tag1 += '</tr>';
  }
  return tag1;
}

document.write(createTable(friends));
