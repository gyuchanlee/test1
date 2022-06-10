// function2

//arguments 객체 : 함수에 전달된 인수에 해당하는 Array 형태의 객체.
function sum(n1,n2,n3){
  let result = 0;
  for(let i=0; i<arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(`결과: ${sum(10,5,2,5,4,4,2,7,78,2,2)}`);

// ...args : 배열처럼 인수를 받음.
// 받는 인수가 2개 이상일 때 사용하면 좋음.
function mySum(a1=0, a2=0, ...args){
  // a1 값이 없을 경우.
  if(a1 == undefined){
    return 0;
  }
  // a2가 없을 경우.
  if(a2==undefined){
    return a1;
  }

  let result = 0;
  args.forEach((val) => {
    result += val;
  });
  return a1 + a2 + result
}

console.log(`결과: ${mySum()}`);

// ...arg : 펼침연산자.
let arr1 = [1,2,3];
let arr2 = arr1;
arr2[3] =4;

// arr1의 요소들을 받아옴.
// 주소복사 X(참조X), 새로운 배열 복사.
let arr3 = [...arr1];
arr3.push(5); // arr3에 5 추가.

console.log(arr1,arr2);
console.log(arr3);