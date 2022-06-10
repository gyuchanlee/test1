// object3.
// 인스턴스 : 필드, 생성자, 메소드.
// 프로토타입: 메소드(함수)의 참조값.

let today = new Date(); // 현재시점 년월일 시분초.
console.log(today);
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toLocaleString());
console.log(today.getDay()); // 요일정보 0-6 (일-토)

// today = new Date('2022-11-25');

Date.prototype.toCustomString = function() {
  // console.log(this);
  let year = this.getFullYear();
  let month = ('0'+(this.getMonth() + 1)).slice(-2); // 0~11월이므로 +1. 두자리로 월 표현.
  let date = this.getDate();
  return `${year}-${month}-${date}`;
}

console.log(today.toCustomString());
console.log(today.getFullYear());

function showCalendar (year, month) {
  if(!(month <= 12 && month > 0)){
    document.write('<br>');
    document.write('적으신 월은 존재하지 않습니다');
    return;
  }
  document.write(`<h3>${year}년 ${month}월 달력</3>`);

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  table = '<table border=1>';

  table+='<tr>';
  for(let week of days)
  {
    table +='<th>'+week+'</th>';
  }
  table+='</tr>';

  // 이번달의 마지막날과 요일
  let lastdate = new Date(year,month,0);
  let latedate2 = lastdate.getDate();
  console.log(lastdate);
  let lastday = lastdate.getDay();
  // 첫째날
  let firstdate = new Date(year,month-1,1);
  let firstdate2 = firstdate.getDay();
 
  // 달력 날짜 밀기
  table+='<tr>';
  for(let n=0; n < firstdate2; n++){
    table += '<td></td>';
  }

  for(let day = 1; day <= latedate2; day++)
  {
    let current = new Date();
    let cu = current.getDate();
    if(year==current.getFullYear()&&month==(current.getMonth()+1)&&day==cu){
      table+='<td id="today">'+day+'</td>';
    }
    else{
      table+='<td>'+day+'</td>';
    }
    if((day+firstdate2)%7==0)
    {
      table+='</tr><tr>';
    }
  }
  table+='</tr>';

  table += '</table>';

  document.write(table);
}

showCalendar(2022,1);
showCalendar(2022,2);
showCalendar(2022,3);
showCalendar(2022,4);
showCalendar(2022,5);
showCalendar(2022,6);
showCalendar(2022,13);
showCalendar(2022,0);