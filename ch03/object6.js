// 오브젝트 : 속성=속성값, 속성=함수.

const friends = ['김민식','황성우']

let obj = {
  sname: '홍길동',
  age:20,
  getInfo: function() {return this.sname;}
}
// 객체에 따로 필드값 추가.
obj.phone = '010-7114-0439';
obj.friends = friends;
console.log(obj);
console.log(obj.friends[0]);

// 스코어 설정 > getter, setter 설정.
Object.defineProperty(obj,'score',{
  set: function(score) {
    if(score<0){
      alert('점수가 0보다 작습니다');
    } else if(score>100){
      alert('점수가 100보다 큽니다');
    }else{
      this._score = score;
    }
  },
  get: function() {
    return this._score;
  }
});

// alert 경고창 띄우기.
// obj.score = -10;
// obj.score = 101;

obj.score = 99;
console.log(obj);

// 객체의 복사
// 참조의 형태
let refobj = obj;
console.log(refobj);

// 값만 그대로 복사해옴.
let copyObj = Object.assign({}, obj);
// assign() : 새로운 오브젝트를 만들어서 값을 가져옴.
copyObj.age = 30;
console.log(obj, copyObj);