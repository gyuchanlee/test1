// function

// 1. 함수 선언식 정의.
function sum(n1,n2=0) {
  if(n1==undefined)
  {
    n1=0;
  }
  return n1+n2;
}
// 자바스크립트는 타입의 의미가 크게 없음

console.log(sum());
// undefined 문제 처리 > 함수에 초기값 설정
console.log(sum(1,3));

// 2. 함수표현식 정의
// 변수에 할당 가능한 것 : string, number, boolean, undefined, object, function구문
let mySum = function(v1=0,v2=0){
  return v1+v2;
}
// 0으로 초기값 설정.
console.log(mySum(10,20));
let hisSum = mySum;
console.log(hisSum(15,25));

// 3. 화살표 함수. 함수나 메소드 매개값으로 사용되어질 때.
let otherSum = (v1,v2) => v1+v2;
console.log(otherSum(20,30));

// 배열 forEach(기능);
const arr = [10,22,17,23,34,42];
let sum1 = 0;
let idxSum = 0;
arr.forEach(function(val,idx,arr){
  if(val%2==0){
    sum1 += val;
  }
  if(idx%2==1){
    idxSum += val;
  }
});
console.log(`짝수의 합:  ${sum1}`);
console.log(`인덱스값이 홀수인 값의 합:  ${idxSum}`);
//(배열요소, 요소의 인덱스, 배열)

// forEach메소드의 콜백함수.
function getOddSum(val,idx,arr){
  if(idx%2==1){
    sum1 += val;
  }
};