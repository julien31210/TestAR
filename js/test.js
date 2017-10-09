$(document).ready(function(e){
	$(".img-check").click(function(){
		$(this).toggleClass("check");
	});
	$(function(){
		var loading = $('#loadbar').hide();
		$(document)
		.ajaxStart(function () {
			loading.show();
		}).ajaxStop(function () {
			loading.hide();
		});

		$("label.btn").on('click',function () {
			var choice = $(this).find('input:radio').val();
			$('#quiz').fadeOut();
			setTimeout(function(){
				$( "#answer" ).html(  $(this).checking(choice) );      
				$('#quiz').show();
				/* something else */
			}, 1500);
		});

		$ans = 3;

		$.fn.checking = function(ck) {
			if (ck != $ans)
				return 'INCORRECT';
			else 
				return 'CORRECT';
		}; 
	});	
});