$(document).ready(function(){
 $(".audiodiv").click(function(){
 	console.log("play");
 	$(this).find("audio")[0].play();
 });
});