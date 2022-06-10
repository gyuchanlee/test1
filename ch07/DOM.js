// DOM

document.addEventListener('DOMContentLoaded', function(){
  let li = document.createElement('li'); // 매개값을 태그. <li></li>
  let txt = document.createTextNode('Cherry');
  li.appendChild(txt) // 부모 - 자식
  console.log(li);

  // <ul> 자식 li
  let ul = document.querySelector('ul');
  ul.appendChild(li);
  console.log(ul);
});

//  요소를 선택하는 방식.
// element => getElementsBy... : tag
// node => querySelectorAll() : node(element, attribute, text)

// (text node) span (text node), span(text node) :: 형식으로 텍스트노드가 끼워져있음.