// 전역 객체(window), 전역 변수
var avar = '안녕'; // 전역변수
let alet = '안녕';
// 최상위 object : 윈도우 오브젝트

console.log(this.avar);
console.log(this.alet);
// window.alert("하위!");

function run()
{
  console.log(this.avar);
  console.log(this.alet);
}
run();
console.log(avar);
console.log(alet);