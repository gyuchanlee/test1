// array1

// String.indexOf() => 인덱스 / -1 : 존재 X.

let arr1 = ['펭수','붱철','라이언','어피치','콘','무지'];
let idx1 = arr1.indexOf('붱철'); // 1
let idx2 = arr1.indexOf('붱철',2); // -1
console.log(idx1);
console.log(idx2);

let find_arr = arr1.find(el => el=='라이언');
console.log(find_arr);

// Array.some(함수) => 조건 1건 true / false
// Array.every(함수) => 조건 모두 true / false

let trueFalse = arr1.some(el => el.length >= 3);
console.log(trueFalse);

// Array.sort();
let arr2 = [3,4,21,10,1];
console.log(arr2.sort((a,b)=>{
  if(a-b>0){
    return 10;
  }else{
    return -10;
  }
}));

let arr3 = [{name:'김민수',age:25},
            {name:'최익수',age:23},
            {name:'이민기',age:27}];
arr3.sort((e1,e2) => e1.age - e2.age);
arr3.sort((e1,e2) => 
  {return e1.name < e2.name ? -1 : e1.name > e2.name ? 1: 0;
});
console.log(arr3);

let names = "정임경,박근형,김진형,황하경,류미래";
// 가나다순 정렬
let nameArr = names.split(',');
console.log(nameArr);
nameArr.sort((a,b)=>{
  return a < b ? -1 : 1;
});
console.log(nameArr.join(','));
