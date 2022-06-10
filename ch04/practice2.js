// practice 2

let str =   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem minima repellendus itaque, omnis eum harum sit, consequatur incidunt expedita obcaecati tempore? Fuga voluptatum magnam quam quod vero facilis quibusdam non?';
let strArr = str.split(' ');

// 찾고자하는 문자로 시작하는 단어 => 새로운 배열 생성.
let newArr=[]; // push()

let findWord = prompt('찾을 문자열을 입력하세요 > ');
for(let word of strArr){
  console.log(word);
  // word.startsWith(findWord);
  if(word.indexOf(findWord) != -1){
    newArr.push(word);
  }
}
// indexof() : 찾고자하는 값이 있으면 true 반환

console.log(newArr);