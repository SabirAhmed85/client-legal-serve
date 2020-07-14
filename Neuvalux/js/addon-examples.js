var pageVars = {};

function applyChanges (e) {
	e.preventDefault();
	var colour = $('input[name=Colour]:checked', '#exampleDesign').val();
	
	if (colour == 'dark') {
		$('.example-frame').find('.mn-light, .mn-clear').removeClass('mn-light').removeClass('mn-clear').addClass('mn-dark');
		$('.central-container').addClass('central-container-dark');	
	}
	else if (colour == 'light') {
		$('.example-frame').find('.mn-dark, .mn-clear').removeClass('mn-dark').removeClass('mn-clear').addClass('mn-light');
		$('.central-container').removeClass('central-container-dark');	
	}
	else {
		$('.example-frame').find('.mn-dark, .mn-light').removeClass('mn-dark').removeClass('mn-light').addClass('mn-clear');
		$('.central-container').removeClass('central-container-dark');	
	}
	
	$('.settings-panel').removeClass('open');
	console.log(colour);
}
		
function selectAddonSubType (subType) {
	if (!$(subType).hasClass('active')) {
		var index = $(subType).data("index");
		pageVars.changeMenuOptionLabel(subType, "index");

		pageVars.itemsObject[pageVars['currentType']]['index'] = index;

		pageVars.showMenuItem(index);
	}
}

function selectAddonType (type) {console.log(type);
	if (!$(type).hasClass('active')) {
		pageVars.changeMenuOptionLabel(type, "addon-type");

		pageVars.fillMenuSubContainer($(type).data('addon-type'));
	}
}

function toggleExamplesMenu (button) {
	var sibUl = $(button).parents('ul').siblings('ul');

	if (sibUl.hasClass('open')) {
		sibUl.siblings('.menu-header').removeClass('open');
		sibUl.removeClass('open');
		$('.page-overlay').removeClass('open');
	} else {
		sibUl.siblings('.menu-header').addClass('open');
		sibUl.addClass('open');
		$('.page-overlay').addClass('open');
	}
}

function closeExamplesMenu (button) {
	var par = $(button).parents('.menu-header');

	par.removeClass('open');
	par.siblings('ul').removeClass('open');
	$('.page-overlay').removeClass('open');
}

function toggleSettingsPanel () {
	var settings = $('.settings-panel');
	
	if (settings.hasClass('open')) {
		settings.removeClass('open');
	} else {
		settings.addClass('open');	
	}
}

$(function () {
	var initialiseMyNyteApi = function () {
		var type, ul;
		pageVars.currentType = 'Buttons';
		
		var itemsObject = {
			'Buttons': {
				'items': [
					{
						'Title': "\'Book a Table with us\' Button (Restaurant)",
						'HtmlToShow': '<a class="mynyte-table-book mynyte-book mn-dark"><img src="https://www.mynyte.co.uk/sneak-preview/img/logo.png" alt="Book a restraurant table with MyNyte"><span>Book a table with MyNyte</span></a>',
						'ItemBenefits': ['Good for SEO'],
						'Description': 'A quick and simple button that allows your customers to book a table with you through your MyNyte account, by being taken straight through to your MyDay/MyNyte table-booking page at the click of a button.'
					},
					{
						'Title': "\'See our Menu\' Button (Restaurant)",
						'HtmlToShow': '<a class="mynyte-menu-view mynyte-book mn-dark"><img src="https://www.mynyte.co.uk/sneak-preview/img/logo.png" alt="Book a restaurant table with MyNyte"><span>See our Menu on MyNyte</span></a>',
						'ItemBenefits': ['Good for SEO', 'Good for Social'],
						'Description': 'A button that allows your customers to quickly &amp; easily go through to your menu.'
					},
					{
						'Title': "\'Book an Appointment with us\' Button (Dry Cleaners, Hairdressers etc)",
						'HtmlToShow': '<a class="mynyte-table-book mynyte-book"><img src="https://www.mynyte.co.uk/sneak-preview/img/logo.png" alt="Book a restraurant table with MyNyte"><span>Book a Appointment with us</span></a>',
						'Description': 'A quick and simple button that allows your customers to book a table with you through your MyNyte account, by being taken straight through to your MyDay/MyNyte table-booking page at the click of a button.'
					},
					{
						'Title': "\'See our Upcoming Events\' Button (Nightclub, Bars)",
						'HtmlToShow': '<a class="mynyte-event-entry-book mynyte-book mn-dark"><img src="https://www.mynyte.co.uk/sneak-preview/img/logo.png" alt="Book event entry with MyNyte"><span>See our Upcoming Events</span></a>',
						'Description': 'A quick and simple button that allows your customers to book a table with you through your MyNyte account, by being taken straight through to your MyDay/MyNyte table-booking page at the click of a button.'
					},
					{
						'Title': "\'See Local Restaurants\' Button",
						'HtmlToShow': '<a class="mynyte-local-restaurants-view mynyte-book mn-dark"><img src="https://www.mynyte.co.uk/sneak-preview/img/logo.png" alt="Book event entry with MyNyte"><span>See Local Restaurants</span></a>',
						'Description': 'A quick and simple button that allows your customers to book a table with you through your MyNyte account, by being taken straight through to your MyDay/MyNyte table-booking page at the click of a button.'
					},
					{
						'Title': "\'See Local Takeaways\' Button",
						'HtmlToShow': '<a class="mynyte-local-restaurants-view mynyte-book mn-dark"><img src="https://www.mynyte.co.uk/sneak-preview/img/logo.png" alt="Book event entry with MyNyte"><span>See Local Takeaways</span></a>',
						'Description': 'A quick and simple button that allows your customers to book a table with you through your MyNyte account, by being taken straight through to your MyDay/MyNyte table-booking page at the click of a button.'
					}
				],
				'index': 0
			},
			'Listings': {
				'items': [
					{
						'Title': "\'See our Menu\' Feed",
						'HtmlToShow': '<div class="mynyte-menu-display mn-dark" style="width: 800px; display: none;"></div>',
						'ActionFunction': function () {MynyteApi.createFeed({'feedType': 'menuDisplay', 'menuDisplayImgAlt': 'Log into MyNyte to book tables and make your evening plans', 'menuDisplayImgSrc': 'https://www.mynyte.co.uk/sneak-preview/img/logo.png', 'menuDisplayTranscriptNote': '<b>Book Tables with ease</b>, and find out what\'s going on in town...'})}
					},
					{
						'Title': "\'See our Menu\' Button (Restaurant)",
						'HtmlToShow': '<div class="mynyte-table-booking mn-dark" style="height: 600px; width: 400px; display: none;"></div>',
						'ActionFunction': function () {MynyteApi.createPortal({ 'type': 'TableBooking', 'onComplete': function () { $('div.mynyte-table-booking').addClass("mynyte-frame-container") } }) }
					},
					{'Title': "\'Book an Appointment with us\' Button (Dry Cleaners, Hairdressers etc)"},
					{'Title': "\'See our Upcoming Events\' Button (Nightclub, Bars)"},
					{'Title': "\'See Local Restaurants\' Button"}
				],
				'index': 0
			},
			'Offers': {
				'items': [
					{
						'Title': "\'See our Offers\' Feed",
						'HtmlToShow': '<div class="mynyte-listings mynyte-offers-feed mn-dark" style="height: 400px; display: none;"></div>',
						'ActionFunction': function () {MynyteApi.createFeed({'elem': $('.mynyte-offers-feed'), 'feedType': 'offersFeed'})}
					},
					{'Title': "\'See our Menu\' Button (Restaurant)"},
					{'Title': "\'Book an Appointment with us\' Button (Dry Cleaners, Hairdressers etc)"},
					{'Title': "\'See our Upcoming Events\' Button (Nightclub, Bars)"},
					{'Title': "\'See Local Restaurants\' Button"}
				],
				'index': 0
			},
			'Connect': {
				'items': [
					{'Title': "\'Book a Table with us\' Button (Restaurant)"},
					{'Title': "\'Book an Appointment with us\' Button (Dry Cleaners, Hairdressers etc)"},
					{'Title': "\'See our Upcoming Events\' Button (Nightclub, Bars)"},
					{'Title': "\'See Local Restaurants\' Button"}
				],
				'index': 0
			},
			'General': {'items': [
					{'Title': "\'See our Menu\' Button (Restaurant)"},
					{'Title': "\'Book an Appointment with us\' Button (Dry Cleaners, Hairdressers etc)"},
					{'Title': "\'See our Upcoming Events\' Button (Nightclub, Bars)"},
					{'Title': "\'See Local Restaurants\' Button"}
				],
				'index': 0
			}
		}
		pageVars.itemsObject = itemsObject;
		
		var itemBenefitsObject = {
			'Good for SEO': '../../img/tile-img/seo-basics.jpg',
			'Good for Social': '../../img/tile-img/social-media.jpg'
		}
		
		function getQueryVariable(variable) {
			   var query = window.location.search.substring(1);
			   var vars = query.split("&");
			   for (var i=0;i<vars.length;i++) {
					   var pair = vars[i].split("=");
					   if(pair[0] == variable){return pair[1];}
			   }
			   return(false);
		}
		
		function showMenuItem (subTypeInd) {
			console.log(pageVars);
			var item = itemsObject[pageVars['currentType']]['items'][subTypeInd];
			var htmlToShow = item['HtmlToShow'] || "";
			var benefitsHtml = "";
		
			$('.example-frame').html(htmlToShow);
			$('.example-notes h4').html(item['Title']);
			$('.example-notes p').html(item['Description']);
		
			$('.example-notes .benefits-row').html('');
			if (item['ItemBenefits']) {
				for (var a = 0; a < item['ItemBenefits'].length; a++) {
					benefitsHtml += "<span class='benefit'><img src='" + itemBenefitsObject[item['ItemBenefits'][a]] + "' />";
					benefitsHtml += "<span class='benefit-title'>" + item['ItemBenefits'][a] + "</span></span>";
			
					if (a == item['ItemBenefits'].length - 1) {
						$('.example-notes .benefits-row').html(benefitsHtml);
					}
				}
			}
			console.log(item);
			if (item['ActionFunction']) {
				item['ActionFunction']();
			}
		
			console.log(htmlToShow);
		}
		pageVars.showMenuItem = showMenuItem;

		function changeMenuOptionLabel (type, attr) {
			var parUl = $(type).parents('ul');
			var altUlLis = parUl.siblings('ul').find('li');
			var addOnType = $(type).data(attr);
			parUl.find('li').removeClass('active');
			$(type).addClass('active');
			altUlLis.removeClass('active');
			
			altUlLis.each(function (index, element) {
				if ($(element).data(attr) == addOnType) {
					$(element).addClass('active');
				}
			});

			if (parUl.hasClass('examples-menu-alt') || parUl.hasClass('examples-sub-menu-alt')) {
				parUl.siblings('.menu-header').removeClass('open');
				parUl.removeClass('open');
				$('.page-overlay').removeClass('open');
			}
		}
		pageVars.changeMenuOptionLabel = changeMenuOptionLabel;
		
		function fillMenuSubContainer (obj) {
			var objLabel = obj;
			var obj = itemsObject[obj];
			var objHtml = "";
			var curIndex = obj["index"];
			var items = obj["items"];
		
			pageVars['currentType'] = objLabel;
		console.log(obj);
			for (var a = 0; a < items.length; a++) {
				if (a == curIndex) {
					objHtml += "<li class='active' onclick='selectAddonSubType(this)' data-index='" + a + "'><span>" + items[a]["Title"] + "</span><i class=\'fa fa-caret-down\' onclick='toggleExamplesMenu(this)'></i></li>";
				}
				else {
					objHtml += "<li onclick='selectAddonSubType(this)' data-index='" + a + "'><span>" + items[a]["Title"] + "</span><i class=\'fa fa-caret-down\' onclick='toggleExamplesMenu(this)'></i></li>";
				}
		
				if (a == items.length - 1) {
					console.log(objHtml);
					$('ul.examples-sub-menu-alt').html(objHtml);
					$('ul.examples-sub-menu').html(objHtml);
					showMenuItem(curIndex);
				}
			}
		}
		pageVars.fillMenuSubContainer = fillMenuSubContainer;
		
		type = getQueryVariable('type') || 'Buttons';
		ul = $('ul.examples-menu').find('li');
		
		ul.each(function(index, element) {
			console.log($(element).data('addon-type'));
			if ($(element).data('addon-type') == type) {
				selectAddonType(element);
			}
		});
	}
		
	var checkMyNyteApi = function () {
		if (typeof(MynyteApi) !== 'undefined') {
					
			console.log(MynyteApi, "yo");
			initialiseMyNyteApi();
		}
		else {
			console.log("hey");
			window.setTimeout(checkMyNyteApi, 2000);	
		}
	}
	checkMyNyteApi();
	
	
});
