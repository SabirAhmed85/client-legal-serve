$(function(){
   // DOM Ready - do your stuff
   

   $('button.contact').on("click", function (e) {
   		$( window ).scrollTop( 440 );
   		var oldVal = $('button.contact').html();
   		$('button.contact').html('Sending...');
      $('form').addClass('submitting');

   		var companyRequired = false,
        name = $('input#name').val(),
   			email = $('input#email').val(),
   			company = $('input#company').val(),
   			message = $('textarea#message').val(),
   			emailReg = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);

        if (name == '' || 
        	email == '' || 
        	!emailReg.test(email) || 
        	message == ''
        	) {
        	if (name == '') {
        		$('#missing-name-note').show();
        	} else {
        		$('#missing-name-note').hide();
        	}
        	if (email == '') {
        		$('#missing-email-note').show();
        	} else {
        		$('#missing-email-note').hide();
        	}

        	if (!emailReg.test(email) && email != '') {
        		$('#invalid-email-note').show();
        	} else {
        		$('#invalid-email-note').hide();
        	}

        	if (message == '') {
        		$('#missing-message-note').show();
        	} else {
        	 	$('#missing-message-note').hide();
        	}       	
        	
        	e.preventDefault();
        } else {
			//process and send form   
			$('#missing-company-note').hide();
			$('#missing-message-note').hide();
			$('#invalid-email-note').hide();
			$('#missing-email-note').hide();
			$('#missing-name-note').hide();

			var obj = { name : name, email: email, organisation: company, message: message};

			$.ajax({
			  url: "contact-process.php?action=processContact",
			  method: "POST",
			  data: JSON.stringify(obj),
			  contentType: "application/json"
			}).success(function (successData) {
				console.log(successData);
        if (successData == '\"Success\"') {
				  $('input#name').val(""),
   				$('input#email').val(""),
   				$('input#company').val(""),
   				$('textarea#message').val("");

				  $('#message-success-note').show();
        }
        else {
          $('#unknown-error-note').show();
        }
			}).error(function (errorData) {
				$('#unknown-error-note').show();
			});
			e.preventDefault();  
        }

        $('button.contact').html(oldVal);
        $('form').removeClass('submitting');
   });
});