// object2

// 함수 table 생성
// class table 생성

class Table{
  constructor(data){
    this.tag = '';
    this.arrData = data;
  }
  createTable(){
    this.tag = '<table border=1>';
    this.createHeader();
    this.createBody();
    this.tag += '</table>';
    return this.tag;
  }
  createHeader(){
    this.tag += '<thead><tr>';
    
    for(let field in this.arrData[0]){
      this.tag += `<th>${field}</th>`;
    }
    this.tag += '</tr></thead>';
  
  }
  createBody(){
    for(let i=0; i<this.arrData.length; i++){
      this.tag += '<tr>';
      for(let field in this.arrData[i]){
        this.tag +=`<td> ${this.arrData[i][field]} </td>`;
      }
      this.tag += '</tr>';
    }
  }
}

let arr = [{sno:'1001',sname:'이규찬',score:80},
           {sno:'1002',sname:'김규찬',score:85},
           {sno:'1003',sname:'박규찬',score:90}];
let table = new Table(arr);
let str = table.createTable();

Table.prototype.getTaginfo = function () {
  console.log(this.tag);
}
table.getTaginfo();


document.write(str);
