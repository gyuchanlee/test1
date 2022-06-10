//object5

for(let i=0; i<5; i++){
  console.log(parseInt(Math.random()*10));
}
console.log('----');
let ceil1 = Math.ceil(4.15);
console.log(ceil1); // 5
Math.floor(3.3); // 3
Math.trunc(3.3); // 3 > 무조건 소수점을 잘라냄.
Math.round(3.5) // 4 반올림

Math.floor(-3.3); // -4
Math.trunc(-3.3); // -3

console.log(Math.PI); // 인스턴스 생성없이 정적 필드 사용 가능

// 클로저.
// 지역변수 선언 > 메서드 밖에서도 쓸 수 있음.
function outerFunc(name) {
  let saying = 'Hello'+name;

  return function () {
    return saying;
  }
}

let f1 = outerFunc('홍길동');
console.log(f1());

// 클로저 : 함수가 실행되는 시점의 변수
function initFunc() {
  let cnt = 0;

  return function addCnt() {
    cnt += 1;
    console.log(cnt);
  }
  // addCnt();
  // console.log(cnt);
}

let add = initFunc();
add();
add();
add();
// initFunc();
// initFunc();
// initFunc();