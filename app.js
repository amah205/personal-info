/*let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue =0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textcontent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }

    }, duration);
});*/

var count = document.getElementsByClassName("count");
var inc = [];
function intervalFunc() {
  for (let i = 0; i < count.length; i++) {
    inc.push(1);
    if (inc[i] != count[i].getAttribute("data-val")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}
var fact = document.getElementById("fact");
window.onscroll = function () {
  var timer = setInterval(() => {
    var topElem = fact.offsetTop;
    var btmElem = fact.offsetTop + fact.clientHeight;
    var topScreen = window.pageYOffset;
    var btmScreen = window.pageYOffset + window.innerHeight;
    if (btmScreen > topElem && topScreen < btmElem) {
      intervalFunc();
    }
    else {
        clearInterval(timer);
        for (let i = 0; i < count.length; i++) {
            count[i].innerHTML = 0;
            inc = [];
        }
    }
  }, 100);
};


/*-----CLICK-EVENT----*/
function openMenu(){
  var mobileNav=document.getElementById("mobile-link");
  mobileNav.style.transform="translateX(0%) ";
}

function closeMenu(){
  var menuNav=document.getElementById("mobile-link");
  menuNav.style.transform="translateX(-100%)";

}
