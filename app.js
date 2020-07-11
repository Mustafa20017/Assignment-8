var min = 00;
var sec = 00; 
var msec = 00;
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec")
var msecHead = document.getElementById("msec")

var interval;

function timer(){
    msec++
    msecHead.innerHTML = msec; 
    if(msec >= 100){
        sec++
        secHead.innerHTML = sec
        msec = 0;
    }
    else if(sec >= 60){
        min++   
        sec = 0
        minHead.innerHTML = min
    }
}
function start(){
    interval = setInterval(timer,10)    
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min = 00
    sec = 00
    msec = 00
    minHead.innerHTML = min
    secHead.innerHTML = sec
    msecHead.innerHTML = msec
    stop()
}