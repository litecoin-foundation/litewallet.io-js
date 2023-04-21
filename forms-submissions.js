 
makeWebflowFormAjax = function( forms, successCallback, errorCallback ) {
	forms.each(function(){
		var form = $(this);
        var formData = {
            language: $("#language-preference").val(),
            email: $("#email-address").val(), 
          };
		form.on("submit", function(){
			var container = 	form.parent();
			var doneBlock  =	$(".w-form-done", container);
			var failBlock  =	$(".w-form-fail", container);
		
			var action = 		form.attr("action");
			var method = 		form.attr("method");
			var data = 			form.serialize();
			
			// call via ajax
			$.ajax({
				type: method,
				url: action,
				data: data,
				success: function (resultData) {
					if (typeof successCallback === 'function') {
						// call custom callback
						result = successCallback(resultData);
						if ( ! result ) {
							// show error (fail) block
							form.show();
							doneBlock.hide();
							failBlock.show();
							console.log(e);
							
							return;
						}
					}
					
					// show success (done) block
					form.hide();
					doneBlock.show();
					failBlock.hide();
                    console.log(resultData);

				},

				error: function (e) {
					// call custom callback
					if (typeof errorCallback === 'function') {
						errorCallback(e)
					}
					
					// show error (fail) block
					form.show();
					doneBlock.hide();
					failBlock.show();
					console.log(e);
				}
			});
			
			// prevent default webflow action
			return false;
		});
	});
} 
 
setTimeout(function(){
	makeWebflowFormAjax( $("forms") );
 }, 1000); 