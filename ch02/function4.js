//function4

var a = 1;
var b = 5;

function outerFunc() {
  function innerFunc() {
    a = b;
  }
  console.log(a);
  a=3;
  b=4;
  console.log(a);
  innerFunc();
  console.log(a);
}

outerFunc();