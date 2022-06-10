// ajax

// Asynchronous JavaScript And Xml
// 비동기 방식으로 자바스크립트, xml을 처리하는 방법.

// 1. 비동기 vs 동기
setTimeout(e => {
  console.log('first');
},1000);

setTimeout(e => {
  console.log('second');
},3000);

setTimeout(e => {
  console.log('third');
},2000);
// 비동기 : 순차적 처리가 아닌 동시에 여러 작업을 처리하는 방식
// 한 처리작업을 하고 남는 시간동안 다른 처리작업을 실시.
// 요청 > 결과가 바로 나오지 않지만 처리 시간동안 다른 작업 처리가능.
// 자원의 효율적 사용 가능.