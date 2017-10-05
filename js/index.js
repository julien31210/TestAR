$(document).ready(function(){

	var sceneEl = document.querySelector('a-scene').addEventListener('click', function(evt){
	console.log(sceneEl);	
	window.location.replace('q8.html');
});
});
// var planne = document.getElementById("scene").getElementsByTagName("clickable");
// document.querySelector('a-plane').flushToDOM().addEventListener('click', function(evt){
// 	console.log('This is 2D element was clicked!');
// });
// document.querySelector('a-sphere').addEventListener('click', function(evt){
// 	console.log('This is 3D element was clicked!');
// });
//  $(document).ready(function(){
// 	document.getElementById("scene").getElementsByTagName("clickable");
// 	document.querySelector('a-scene').addEventListener('click', function(evt){
// 	return "index.html".innerHTML("href");
		
// 	});     
//       });