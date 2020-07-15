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
          /*
            $.ajax({
            url: "https://www.mynyte.co.uk/sneak-preview/data/extApi/Profile.php?action=getOffersFeed&_businessId=87",
            method: "POST",
            data: JSON.stringify(obj)
          }).success(function (successData) {
            console.log(successData);
            $('head').append('<link rel="stylesheet" href="https://www.mynyte.co.uk/sneak-preview/css/api-style.css" type="text/css" />');
            var divHeight = $('.mynyte-listings').height() - 34;
            var htmlToAdd = "<div class='header'>MyNyte Offers</div><span class='scrollbar'></span><div class='listings-container' style='height: "+divHeight+"px;'>";

            console.log(htmlToAdd);
            for (a = 0; a < successData.length; a++) {
              successData[a].endDateTimeArr = successData[a].endDateTime.split(" ");
              htmlToAdd += "<div class='listing'><img class='main-img' src='https://www.mynyte.co.uk/sneak-preview/img/user_images/cover_photo/"+successData[a].currentCoverPhotoName+"'></img>";
              htmlToAdd += "<div class='text-container'><span class='title'>"+successData[a].name+"</span>";
              htmlToAdd += "<span class='description'>"+successData[a].description+"</span>";
              htmlToAdd += "<span class='offer-end'>Ends: "+successData[a].endDateTimeArr[0]+"</span>";
              htmlToAdd += "</div></div>";

            }
            htmlToAdd += "</div>";
            console.log(htmlToAdd);
            $('.mynyte-listings').append(htmlToAdd);
          }).error(function (errorData) {
            console.log(errorData);
            $('#unknown-error-note').show();
          });

            */
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

    			var obj = { name : name, email: email, company: company, message: message};
          MynyteApi.processContact(obj);
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