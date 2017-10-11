$(document).ready(function(e){
	$(".draggable").draggable({
		stop: handleDragStop
	});
	$("draggable").on("dragstop", function(event, ui){
		console.log("ok");
	});

	function handleDragStop( event, ui ) {
		var offsetXPos = parseInt( ui.offset.left );
		var offsetYPos = parseInt( ui.offset.top );
		// alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");

		var position = $(".tableau")[0].getBoundingClientRect();
		var x = position.left + position.width;
		var y = position.top + position.height;

		if(offsetXPos < x && offsetYPos < y){
			alert("ok");
		}
	}
});
// refreshPositions: true;
// 	var refreshPositions = $( ".draggable" ).draggable( "option", "refreshPositions" );

// // Setter
// $( ".draggable" ).draggable( "option", "refreshPositions", true );