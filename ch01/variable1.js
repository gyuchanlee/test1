// 변수 호이스팅. 변수 끌어올리기


let sum = 10; // 변수 선언 & 초기화
console.log(sum);

console.log(sum2);
var sum2 = 100;
// undefined > var로 선언한 변수는 맨 위 첫부분에 선언한것으로 간주 : 호이스팅

console.log(myName());

function myName(){
  return '홍Kill동';
}
//object 참조타입변수 : object, array,function(){}

var result = 100; // 전역변수
// var : 전역변수 or 지역변수 영역만 가짐. {} 코드블록은 구분못함.
// let : 다양한 범위(스코프)를 가짐. 코드블록 레벨의 범위도 가지므로 result가 겹치지 않음.
{
  let result = 50;
}

function run()
{
  //지역변수 (local variable)
  var result = 0;
  console.log(result); // 메서드 내에서만 유효.
}
run();
console.log(result); // 전역변수 result

