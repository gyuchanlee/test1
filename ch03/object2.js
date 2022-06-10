// object2

// 함수 table 생성
// class table 생성

class Table{
  constructor(data){
    this.arrData = data;
    this.str1 = this.createTable();
  }
  createTable(){
    let tag = '<table border=1>';
    tag += this.createHeader(this.arrData[0]);
    tag += this.createBody(this.arrData);
    tag += '</table>';
    return tag;
  }
  createHeader(obj= {}){
    let thead = '<thead><tr>';
    
    for(let field in obj){
      thead += `<th>${field}</th>`;
    }
    thead += '</tr></thead>';
  
    return thead;
  }
  createBody(arr=[]){
    let tag1 = '';
    for(let i=0; i<arr.length; i++){
      tag1 += '<tr>';
      for(let field in arr[i]){
        tag1 +=`<td> ${arr[i][field]} </td>`;
      }
      tag1 += '</tr>';
    }
    return tag1;
  }
}

let arr = [{sno:'1001',sname:'이규찬',score:80},
           {sno:'1002',sname:'김규찬',score:85},
           {sno:'1003',sname:'박규찬',score:90}];
           
let table = new Table(arr);
let str = table.createTable();

document.write(str);
document.write(table.str1);