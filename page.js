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
	document.getElementById("thing").style.backgroundColor = "green";
}

function changeColor2(){
	document.getElementById("thing").style.backgroundColor = "white";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex +=n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex=1}
	if (n<1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
 	 }
	slides[slideIndex-1].style.display = "block";

}