$(document).ready(function(e){
	$(".draggable").draggable({
		stop: handleDragStop
	});
	$( ".liondrag" ).droppable( function(){
		console.log('coucou');
	} );

	function handleDragStop( event, ui ) {
		var offsetXPos = parseInt( ui.offset.left );
		var offsetYPos = parseInt( ui.offset.top );
		// alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");

		var position = $(".lion")[0].getBoundingClientRect();
		// console.log(position);
		var x = position.left + position.width;
		var y = position.top + position.height;

		if(offsetXPos < x && offsetYPos < y){
			console.log(offsetXPos, offsetYPos);
			if (offsetXPos < x && offsetYPos < y) {

			};

			var id= $(this).data('response');
			console.log(id);
			switch(id){
				case "liondrag":
				console.log('ça marche');
				break;
				case "flute":
				console.log('lolololol')
				break
				default:
				console.log('ce n\'est pas une image');
			};
		}
	}
});
// refreshPositions: true;
// 	var refreshPositions = $( ".draggable" ).draggable( "option", "refreshPositions" );
// // Setter
// $( ".draggable" ).draggable( "option", "refreshPositions", true );