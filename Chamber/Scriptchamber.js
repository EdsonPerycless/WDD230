let uptodate2 = new Date ();
let dateh = document.querySelector('#uptodate').textContent=uptodate2;

let uptodate = new Date (document.lastModified);
let element = document.querySelector('.date');

$(document).ready(function () {
  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  // $('.second-button').on('click', function () {

  //   $('.animated-icon2').toggleClass('open');
  // });
  // $('.third-button').on('click', function () {

  //   $('.animated-icon3').toggleClass('open');
  // });
});

element.innerHTML +=  `<span>Last updated: ${formatDate(uptodate)} ${uptodate.getHours() === 0 ? uptodate.getHours() + '0' : uptodate.getHours() }:${uptodate.getMinutes()}:${uptodate.getSeconds()}<span>`;


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

window.onload = function(){ 
  if (uptodate2.getDay() == 1 || uptodate2.getDay() == 2) {
    let banner = document.getElementsByClassName("banner")[0]; 
    console.log(banner);
    banner.innerHTML = `<span> Participate of our event onm Wednesday at 7:00pm </span> `;
  }
}
console.log(uptodate2.getDay());
