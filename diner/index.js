var moonEl = document.getElementById("moon")
var sunEl = document.getElementById("sun")
var bgWhite1El = document.querySelectorAll(".bgwhite1")
var bgWhite2El = document.querySelectorAll(".bgwhite2")
var textTileEl = document.querySelectorAll(".tile h2")
var textBlack1El = document.querySelectorAll(".text-black1")
var boderMenuEl = document.querySelectorAll(".menu-item")
var textBlack2El = document.querySelectorAll(".text-black2")



function changeTheme(){
    moonEl.style.display="none"
    sunEl.style.display="block"
    bgWhite1El.forEach(function(item){
        item.style.backgroundColor= "rgb(35,34,22)"
    })
    bgWhite2El.forEach(function(item){
        item.style.backgroundColor= "rgb(40,40,40)"
    })
    textTileEl.forEach(function(item){
        item.style.color= "white"
    })
    textBlack2El.forEach(function(item){
        item.style.color= "#c2d0da"
    })
    textBlack1El.forEach(function(item){
        item.style.color= "#c2d0da"
    })
    boderMenuEl.forEach(function(item){
        item.style.borderColor="rgba(255, 255, 255, 0.085)"
    })
}
function offTheme(){
    moonEl.style.display="block"
    sunEl.style.display="none"  
    bgWhite1El.forEach(function(item){
        item.style.backgroundColor= "white"
    })
    bgWhite2El.forEach(function(item){
        item.style.backgroundColor= "#f7f7f7"
    })
    textTileEl.forEach(function(item){
        item.style.color= "black"
    })
    textBlack2El.forEach(function(item){
        item.style.color= "#161c2d"
    })
    textBlack1El.forEach(function(item){
        item.style.color= "black"
    })
    boderMenuEl.forEach(function(item){
        item.style.borderColor="rgba(255, 255, 255, 0.085)"
    })
}
var navEl = document.getElementById("nav")
function onNav(){
    navEl.style.display="block"
}
// var btnOffEl = document.getElementById("btn-off")
function offNav (){
    navEl.style.display = " none"
} 
