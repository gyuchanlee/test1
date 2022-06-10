// calendar

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

table = '<table border=1>';

table+='<tr>';
for(let week of days)
{
  table +='<th>'+week+'</th>';
}
table+='</tr>';

table+='<tr>';
for(let day = 1; day <= 31; day++)
{
  table+='<td>'+day+'</td>';
  if((day)%7==0)
  {
    table+='</tr><tr>';
  }
}
table+='</tr>';

table += '</table>';

document.write('<h3>5월 달력</h3>');
document.write(table);