// array 배열

// 인덱스

let arr = new Array();
arr = [];

arr.push('홍길동');
arr.push(20);
arr.push({name:"Hwang", id:"1001"});
arr.push(arr1=["고양이","개"]);

arr.pop(); // 제거
arr.unshift(arr1=["고양이","개"]); // 추가. 0번째에 추가.
arr[0] = 'test'; // 그 주소에 덮어쓰기
arr.shift(); // 순차적으로 제거(처음)

arr.splice(1, 1, 'spliceTest'); // 특정위치 추가. (시작위치, 제거할 요수 개수, 추가할 요소)

console.log(arr);

const arr123 = [1,2,3,4,5];

// debugger; // 웹브라우저에서 디버깅 브레이크포인트 설정
// reduce() > 누적합계 구하기
const sum = arr123.reduce((stack, el)=>{
  return stack + el;
}, 0);
console.log(sum);

// forEach()  > 누적합계
let sum2 = 0;
arr123.forEach(function(el){sum2+=el;});
console.log(sum2);

let arr2 = [1,[1,2,3],['hong','kill','dong']];

console.clear();

let arr_concat = arr2.reduce((stack,el)=>{
  console.log(stack,el);
  return stack.concat(el); // 기존배열에 새로운 배열을 이어붙임.
}, []);

console.log(arr_concat);