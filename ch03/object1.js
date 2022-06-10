//object1.

let obj = {};
obj.sname = '홍길동';
obj.age = 10;
obj['score'] = 80;
obj.getInfo = function() {
  return `이름은 ${this.sname}, 나이는 ${this.age} 입니다.`
}

console.log(obj.getInfo());

// ES2015.
// 클래스
class Student {
  // 생성자
  constructor(sno, sname, score, phone){
    this.sno = sno;
    this.sname = sname;
    this.score = score;
    this.phone = phone; 
  }
  // 메서드
  getName() {
    return this.sname;
  }
  setName(sname) {
    this.sname = sname;
  }
  getInfo() {
    return `이름은 ${this.sname}, 점수는 ${this.score} 입니다.` 
  }
  setPhone(phone) {
    this.phone = phone;
  }
}
// 인스턴스 생성
let s1 = new Student('1001','홍킬동',80);

console.log(s1.sname+', '+s1.score);
console.log(s1.getInfo());

let students  = [];
s1.setPhone('010');
students.push(s1);
students.push(new Student('1002','손흥민',83));
students[1].setPhone('017');
console.log(students);

// p100 실습

class Estimate {
  constructor(param){
    this.unit = param;
  }
  getEstimate(unittype,width, height){
    let priceinfo = this.unit.find(item=>item.type==unittype);
    return priceinfo.price*width*height;
  }
  addUnit(unit){
    unit.push(unit);
  }
}

let unitinfo = [{type: "wood", price: 100},{type: "iron", price: 300},{type: "plastic", price: 200}];
const estimator = new Estimate(unitinfo);
let result = estimator.getEstimate('wood',20,20);
console.log(result);