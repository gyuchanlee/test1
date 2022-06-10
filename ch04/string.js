// string vs object

let str1 = '홍길동';
let str2 = new String('홍길동'); // object

console.log(str1,str2);
console.log(typeof str1, typeof str2); // string, object
console.log(str1 == str2); // 값이 같은 지 비교
console.log(str1 === str2); // 값과 타입이 모두 같은 지 비교

str1 = '    홍 길동   ';
console.log(str1.trim());

// replace > 찾을 문자열을 대체문자로 변경
// split() > 문자열을 매개값 기준으로 잘라서 배열로 생성
// join(매개값) > 배열타입을 문자로 변경, 매개값을 구분자로 사용
// /s+/ > 정규표현식에서 s는 문자, + 는 1개이상을 의미
// filter() > 배열에서 매개값의 함수의 true값만 새로운 배열로 생성

// indexOf() : 앞에서부터 인덱스 검색
//lastIndexOf() :뒤에서부터 인덱스 검색

// charAt() : n번째에 있는 문자를 가져옴.

// 표현식 g :전체
let str = 'nice12 hello13'.replace(/\d/g,' ');
console.log(str);

// concat() : 두 개의 문자열을 하나로 합침.
let a = '문자1';
let b ='문자2';
console.log(a.concat(b));
