(function(){
   // DOM Ready - do your stuff
   MynyteApi = function () {
   		var ApiObj = {}
   		function include(filename, onload) {
		    var head = document.getElementsByTagName('head')[0];
		    var script = document.createElement('script');
		    script.src = filename;
		    script.type = 'text/javascript';
		    script.onload = script.onreadystatechange = function() {
		        if (script.readyState) {
		            if (script.readyState === 'complete' || script.readyState === 'loaded') {
		                script.onreadystatechange = null;                                                  
		                onload();
		            }
		        } 
		        else {
		            onload();          
		        }
		    };
		    head.appendChild(script);
		}

		include('http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js', function() {
			$(document).ready(function() {
		   		var obj = {};

		   		//If Offers Feed Exists in Page
				$.ajax({
					url: "https://www.mynyte.co.uk/sneak-preview/data/extApi/Profile.php?action=getOffersFeed&_businessId=87",
					method: "POST",
					data: JSON.stringify(obj)
				}).success(function (successData) {
					console.log(successData);
					$('head').append('<link rel="stylesheet" href="https://www.mynyte.co.uk/sneak-preview/css/api-style.css" type="text/css" />');
					var divHeight = $('.mynyte-listings').height() - 34;
					var htmlToAdd = "<div class='header'>MyNyte Offers</div><span class='scrollbar'></span><div class='listings-container' style='height: "+divHeight+"px;'>";

					for (a = 0; a < successData.length; a++) {
					  successData[a].endDateTimeArr = successData[a].endDateTime.split(" ");
					  htmlToAdd += "<div class='listing'><img class='main-img' src='https://www.mynyte.co.uk/sneak-preview/img/user_images/cover_photo/"+successData[a].currentCoverPhotoName+"'></img>";
					  htmlToAdd += "<div class='text-container'><span class='title'>"+successData[a].name+"</span>";
					  htmlToAdd += "<span class='description'>"+successData[a].description+"</span>";
					  htmlToAdd += "<span class='offer-end'>Ends: "+successData[a].endDateTimeArr[0]+"</span>";
					  htmlToAdd += "</div></div>";

					}
					htmlToAdd += "</div>";

					$('.mynyte-listings').append(htmlToAdd).css({'display': 'block'});
				}).error(function (errorData) {
					console.log(errorData);
				});

				//If MyNyte Book Table Feed Exists in Page
				$('a.mynyte-table-book')
					.html("<img src='https://www.mynyte.co.uk/sneak-preview/img/logo.png' alt='Book a restraurant table with MyNyte'/><span>Book a table with MyNyte</span>")
					.css("display", "block");
				$('a.mynyte-table-book').on("click", function () {
					var myWindow = window.open("https://www.mynyte.co.uk/sneak-preview/#/app/profile/", "mynyte-table-book-window", "width=485,height=560");
				});


				//If MyNyte Book Table Feed Exists in Page
				$('a.mynyte-event-entry-book')
					.html("<img src='https://www.mynyte.co.uk/sneak-preview/img/logo.png' alt='Book event entry with MyNyte'/><span>Book event entry with MyNyte</span>")
					.css("display", "block");
				$('a.mynyte-event-entry-book').on("click", function () {
					var myWindow = window.open("https://www.mynyte.co.uk/sneak-preview/#/app/profile/", "mynyte-table-book-window", "width=485,height=560");
				});


				//If MyNyte Live Chat Exists in Page
				var imgAlt = 'Log into MyNyte to save transcripts, and get updates on the latest listings Bedford',
				imgSrc = 'https://www.mynyte.co.uk/sneak-preview/img/logo.png',
				transcriptNote = '<b>Keep a record of all chats</b>, and find out what\'s going on in town...';

				var liveChatHtml = "<div class='chat-header'>Live Chat through our MyNyte Account</div>";
				liveChatHtml += "<div class='chat-dummy'><button class='chat-start' onclick='MynyteApi.chatStart()'>Start a Chat</button></div>";
				liveChatHtml += "<div class='chat-footer'><span class='footer-transcript-note'>"+transcriptNote+"</span><img class='mynyte-chat-logo' alt='"+imgAlt+"' src='"+imgSrc+"'/></div>";
				$('div.mynyte-live-chat')
					.html(liveChatHtml)
					.css("display", "block");

				MynyteApi.chatStart = function () {
					var outerHeight = $('div.chat-header').outerHeight() + $('div.chat-footer').height() + 2,
					colourScheme = ($('div.mynyte-live-chat').hasClass("mn-dark")) ? 'dark': 'light',
					frameBg = ($('div.mynyte-live-chat').hasClass("mn-dark")) ? '#212121': '#f7f7f7',
					frameSrc = 'https://www.mynyte.co.uk/sneak-preview/#/app/more/externalApi/liveChat/'+colourScheme+'/87/',
					frameStyle = 'height: calc(100% - '+outerHeight+'px); background: '+frameBg+';';

					$('div.chat-dummy')
					.replaceWith("<iframe allowtransparency='true' style='"+frameStyle+"' src='"+frameSrc+"'></iframe>");
				}
			});
		});


		MynyteApi.processContact = function (obj) {
			$.ajax({
			  url: "https://www.mynyte.co.uk/sneak-preview/data/extApi/Profile.php?action=registerContact",
			  method: "POST",
			  data: JSON.stringify(obj),
			  dataType: 'json'
			}).success(function (successData) {
				console.log(successData);
			}).error(function (errorData) {
        		console.log(errorData);
			});
		}
	}

	MynyteApi();
})();
