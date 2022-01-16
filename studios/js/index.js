var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('top').style.top = '0';
  } else {
    document.getElementById('top').style.top = '-55px';

  }
  prevScrollpos = currentScrollPos;
};

/////sub-nav/////
// var subNav = document.getElementById("sub-nav")
// var subNavLi = document.getElementById("menu")
// function onSubNav (){
//   subNavLi.style.display = "block"
// }
// subNav.addEventListener("click",onSubNav)
// function offSubNav (){
//   subNavLi.style.display = "none"
// }
var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');
function onMenu() {
  menu.style.display = 'block';
}
menuBtn.addEventListener('click', onMenu);

window.addEventListener("mouseup", function (event) {
  if (event.target != menu) {
    menu.style.display = "none"
  }
})

var bgWhite2 = document.querySelectorAll('.bg-white2')
var bgWhite1 = document.querySelectorAll('.bg-white1')
var textBlack = document.querySelectorAll('.text-black')
var textBlack2 = document.querySelectorAll('.text-black2')
var tileH1 = document.querySelectorAll('.tile h1')
var carouselItem = document.querySelectorAll('.course-item > div , .subscribe form')
var contentBottom = document.querySelectorAll('.course-item-content .content-mid')
var borderRight = document.querySelectorAll('.number-item > div.border')
var boxShadowFeedback = document.querySelectorAll('.feedback-content-item > div , .intructor-item > div')
var boxShadowFeedbackConntent = document.querySelectorAll('.feedback-content-item ')
var sun = document.getElementById('sun')
var moon = document.getElementById('moon')

function changeDark() {
  bgWhite1.forEach(function (item) {
    item.style.backgroundColor = "rgb(22,28,45)"
  })
  bgWhite2.forEach(function (item) {
    item.style.backgroundColor = "#121725"
  })
  textBlack.forEach(function (item) {
    item.style.color = "#fff"
  })
  textBlack2.forEach(function (item) {
    item.style.color = "#b7b7b7"
  })
  tileH1.forEach(function (item) {
    item.style.color = 'white'
  })
  carouselItem.forEach(function (item) {
    item.style.border = ' 1px solid #ffffff24'
  })
  contentBottom.forEach(function (item) {
    item.style.borderBottom = '1px solid #ffffff24'
  })
  borderRight.forEach(function (item) {
    item.style.borderRight = '1px solid #ffffff24'
  })
  boxShadowFeedback.forEach(function (item) {
    item.style.boxShadow = '0 20px 62px hsl(222deg 34% 17%)'
  })
  menu.style.border = '1px solid white'
  moon.style.display = 'none'
  sun.style.display = 'block'
  sun.style.color = '#1846b9'
}
// changeDark()
moon.addEventListener('click', changeDark)


// document.getElementById('sun').addEventListener('click', function () {
//   document.getElementById('moon').removeEventListener('click', changeDark)

// })



