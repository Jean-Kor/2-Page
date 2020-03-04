function changeTime(){
var d = new Date();
	var hrs = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	mins = (mins <10) ? "0" + mins : mins;
	secs = (secs <10) ? "0" + secs : secs;

var output = hrs +":" + mins +":" + secs;

document.getElementById("time").innerHTML = output;

}

setInterval(changeTime, 1000);

changeTime();

function changeColor(){
	var result = time.fontcolor("blue");
  document.getElementById("time").innerHTML = result;
}

function changeColor2(){
	var result = time.fontcolor("green");
  document.getElementById("time").innerHTML = result;
}