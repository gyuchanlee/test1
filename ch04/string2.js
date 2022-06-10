// string 2

let today = new Date();

Date.prototype.customFormat = function() {
  let yyyy = this.getFullYear();
  let mm = this.getMonth()+1;
  let dd = this.getDate();
  let hh = this.getHours();
  let mi = this.getMinutes();
  let ss = this.getSeconds();
  return `${yyyy}-${('0'+mm).slice(-2)}-${dd}:${hh}:${('0'+mi).slice(-2)}:${('0'+ss).slice(-2)}`;
}

console.log(today.customFormat());

// setInterval(function() {
//   let today = new Date();
//   console.log(today.customFormat()); 
// },1*1000);

