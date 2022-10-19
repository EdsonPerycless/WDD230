function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

let uptodate = new Date (document.lastModified);
let element = document.querySelector('.date');

element.textContent += `Last updated: ${formatDate(uptodate)} ${uptodate.getHours() === 0 ? uptodate.getHours() + '0' : uptodate.getHours() }:${uptodate.getMinutes()}:${uptodate.getSeconds()}`;
