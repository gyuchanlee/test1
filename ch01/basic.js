//basic.js

// 변수 선언 : var, let
var fname = 'hello'; // string
fname = 100; // number
fname = true; // boolean
fname = null; // null값 > object

var lname; // undefined

console.log(typeof lname);

console.log(typeof fname);

var lname = 'Hong';
// 전역 변수
console.log(lname);

// let
// let lname; // let은  중복선언 ㄴㄴ.
{
  let lname = 'Hwang';
  console.log(lname);
} // 지역변수

const age = 10; //상수선언 > 변하지 않는 값
// age = 20; // err : Uncaught TypeError: Assignment to constant variable.

// 학생 : 이름, 나이, 학생번호
const student = {
  fname : '홍길동',
  age2 : 20,
  sno : '22-0101',
  info: function(){ // method
    return this.fname +' , '+ this.age2;
  }
}
// Object 타입.
console.log(student);
console.log(student.fname);
console.log(student['age2']);

let fieldName = 'sno';
console.log(student[fieldName]); // student의 sno 속성값

console.log(student.info());

// 오브젝트일 경우 for확장 .. for..in
for(let field in student)
{
  console.log(field+', '+student[field])
}
// 필드(속성값) 개수만큼 가져옴.

// 배열
const numArr = [1,2,3,4]; // 참조타입
console.log(numArr[0]); // 인덱스로 요소검색

for(let i = 0; i<numArr.length; i++)
{
  console.log(numArr[i]);
}

// 확장 for .. of
for(let num of numArr)
{
  console.log(num);
}