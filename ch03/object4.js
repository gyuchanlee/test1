// 오브젝트 : 클래스 활용

// 객체리터럴 => let obj = {sname:'김길동',score:80}
// 인스턴스의 값이 아닌 고정값을 할당.

// 생성자 함수 function Student() {}

// getter, setter 구글 검색.

function Student(name, age, score) {
  this.name = name;
  this.age = age;
  this.score = score;
  this.getInfo = function(){
    return `이름은 ${this.name}, 나이는 ${age}입니다.`;
  }
}

let salah = new Student('모하메드살라',29,23);
console.log(salah.getInfo());

