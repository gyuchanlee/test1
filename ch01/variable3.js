// 변수 3

let int1 = window.parseInt(4.234);
console.log(int1);
int1 = parseInt('3.14');
console.log(int1);
int1 = parseInt('h');
console.log(int1);
// NaN : not a number > 숫자로 바꿀 수 없음.

let double1 = window.parseFloat('3.14');
console.log(double1);
double1 = parseFloat('4.15abdfd');
console.log(double1);

console.log(parseInt('3')+parseInt('7'));
console.log('');

console.log((3).toString());
let arr = [1,2,3];
console.log(arr);
console.log(arr.toString()); // 구분자 : ,
console.log(arr.join('-')); // 구분자 : -


let parentObj = {
  fame : 'window',
  lname : 'close',
  childObj : {
    fname: 'document',
    lname: 'open',
    grandChild: {
      hobby:["run","eating"]
    }
  }
}

console.log(parentObj.childObj.grandChild.hobby[0])

