<!DOCTYPE html>
<html class="nojs html css_verticalspacer" lang="en-GB">
 <head>

  <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
  <meta name="description" content="Search for your ideal property to buy or rent in Bedford and the surrounding area. Just fill out the form to view our listings around Bedfordshire."/>
  <meta name="keywords" content="properties in bedford, properties in kempston, properties in elstow, properties in great denham, properties in brickhill, properties in putnoe, properties in renhold, properties in biddenham, properties in bromham, properties in clophill, properties in great barford, properties in clapham, properties in shortstown, properties in cardington, properties in wilstead, properties in wooton, properties in cranfield, properties in marston properties in Moretaine, properties in wixams, properties in stagsden, properties in stevington, properties in cotton end, properties in oakley, properties in turvey"/>
  <meta name="generator" content="2017.0.2.363"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
  <title>Property Search | Estate &amp; Letting Agents Bedford | Open House</title>
  
  <link rel="icon" href="images/home-favicon.ico?crc=448483105" type="image/x-icon" />
  <link rel="shortcut icon" href="images/home-favicon.ico?crc=448483105" type="image/x-icon" />

  <link rel="stylesheet" href="https://webfonts.creativecloud.com/c/69721a/1w;quicksand,2,WXp:W:n4,WXn:W:n7/l" media="all">
  <link rel="stylesheet" type="text/css" href="css/mynyte-css-overwrite.css"/>
  <link rel="stylesheet" type="text/css" href="css/mynyte-style.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <script src="https://webfonts.creativecloud.com/quicksand:n4,n7:default.js" type="text/javascript"></script>
  <script src="scripts/mynyte-admin.js" type="text/javascript"></script>
  <script src="scripts/mynyte-admin-main.js" type="text/javascript"></script>
</head>
<body>
<div>
    <div>
     <div>
     <?php include_once("snippets/header.php") ?>
    <div class="main-page-container">
	  <div class="main-page-container-inner">
        <div class="admin-section-wrapper main-left-container">
          <h1>Main Control Panel</h1>
          <div class="admin-section">
            <div class="admin-section-header">
              <h2>
                <i class="fa fa-wrench left-icon"></i>Select Service Required
              </h2>
            </div>
            <div class="admin-section-body services-container open trans">
              <a class="service-type-label Water" onclick="selectService('Water', null)">
                <i class="fa fa-tint trans"></i>
                <span>Water</span>
              </a>
              <a class="service-type-label Gas" onclick="selectService('Gas', null)">
                <i class="fa fa-fire trans"></i>
                <span>Gas</span>
              </a>
  
              <a class="service-type-label Electricity" onclick="selectService('Electricity', null)">
                <i class="fa fa-bolt trans"></i>
                <span>Electricity</span>
              </a>

              <a class="service-type-label Internet" onclick="selectService('Internet', null)">
                <i class="fa fa-internet-explorer trans"></i>
                <span>Internet</span>
              </a>

              <a class="service-type-label Window" onclick="selectService('Window', null)">
                <i class="fa fa-window-restore trans"></i>
                <span>Windows</span>
              </a>

              <a class="service-type-label Something" onclick="selectService('Something', null)">
                <i class="fa fa-question trans"></i>
                <span>Something</span>
              </a>
            </div>
          </div>
  
          <div class="admin-section description">
            <div class="admin-section-header">
              <h2>
                <i class="fa fa-align-left left-icon"></i>Description
              </h2>
            </div>
            <div class="admin-section-body trans">
            	<textarea name="description" id="description" placeholder="Describe your Problem" onblur="checkIfDescriptionFilled()"></textarea>
            </div>
          </div>
  
          <div class="admin-section images">
            <div class="admin-section-header">
              <h2>
                <i class="fa fa-picture-o left-icon"></i>Upload Image(s)<span class="optional">Optional</span>
              </h2>
            </div>
            <div class="admin-section-body trans">
              <input name="images" id="images" type="file" multiple />
            </div>
          </div>
          <div class="admin-section details">
            <div class="admin-section-header">
              <h2>
                <i class="fa fa-user left-icon"></i>Your Details
              </h2>
            </div>
            <div class="admin-section-body trans">
              <input name="name" id="name" type="text" placeholder="Your Name" onblur="checkIfFormComplete()" />
              <textarea name="address" id="address" placeholder="Your Address" onblur="checkIfFormComplete()"></textarea>
            </div>
          </div>
          
          <button id="submit-request" onclick="submitRequest()" class="button-disabled main" disabled="disabled">
          	Submit Your Request
          </button>
  
  		  <!--
          <div class="admin-section">
            <div class="admin-section-header">
              <h2>
                <i class="fa fa-headphones left-icon"></i>Help &amp; Support
                <i class="fa fa-arrow-up" onclick="showSubSection(this)"></i>
              </h2>
            </div>
            <div class="admin-section-body open trans">
              <a href="useful-links.php">
                <i class="fa fa-info-circle trans"></i>
                <span>Help Links</span>
              </a>
              <a href="tennant-upload-test.html">
                <i class="fa fa-headphones trans"></i>
                <span>Contact MyNyte</span>
              </a>
            </div>
          </div>
          -->
        </div>
  
        <?php include_once("snippets/main-sidebar.php")?>
	  </div>
    </div>
    
    <div id="cover-overlay">
    	<div class="pop-up">
        	<p id="popup-message" class="main-content">
            </p>
            <button class="main" onclick="togglePopUp('close', null)">
            	Close
            </button>
        </div>
    </div>

    <?php include_once("snippets/footer.php") ?>
  </body>

  <script type="text/javascript" src="scripts/jquery-1.8.3.min.js"></script>
  <script>
    var script = document.createElement('script');
    var _businessId = 1;
    script.src = "https://www.mynyte.co.uk/js/api/externalApi.js?" + _businessId;
    script.onload = function () {
        //do stuff with the script
        console.log( "ext Script loaded" );
    };

    document.head.appendChild(script); //or something of the likes
  </script>
  
  <script type="text/javascript">
	  var currentService = null;
    var currentObj = null;

    var servicesObj = {
      'Gas': {
        'sub-options': {
          'Users': {
            'icon': 'fa-users',
            'value': 'Users',
            'label': 'Users',
            'sub-options': {
              'Users': {
                'icon': 'fa-users',
                'value': 'Users',
                'label': 'Users'
              }
            }
          },
          'Something': {
            'icon': 'fa-key',
            'value': 'Something',
            'label': 'Something',
            'sub-options': {
              'Users': {
                'icon': 'fa-users',
                'value': 'Users',
                'label': 'Users'
              }
            },
            'form-elements': [
              {
                'elemType': 'text-input',
                'placeholder': 'Enter Details About Something'
              },
              {
                'elemType': 'select',
                'selectType': 'multi-select',
                'label': 'Please Select a few of the Following Options',
                'options': [
                  {
                    'label': 'Select Option 1'
                  },
                  {
                    'label': 'Select Option 2'
                  }
                ]
              },
              {
                'elemType': 'select',
                'selectType': 'single-select',
                'label': 'Please Select one of the Following Options',
                'options': [
                  {
                    'label': 'Select Option 1'
                  },
                  {
                    'label': 'Select Option 2'
                  }
                ]
              }
            ]
          }
        }
      },
      'Water': {

      },
      'Electricity': {

      }
    };

    function createIconHtml(optionDetails, masterServiceArray) {
      var html = "";
      html += '<a class="service-type-label '+optionDetails.value+'" onclick="selectService(\''+optionDetails.value+'\', \''+masterServiceArray+'\')">';
      html += '<i class="fa '+optionDetails.icon+' trans"></i>'
      html += '<span>'+optionDetails.label+'</span>'
      html += '</a>';

      return html;
    }

    function createFormItemHtml(optionDetails, masterServiceArray) {
      var html = "";
      var elem = optionDetails.elemType;
      
      html += "<div class='" + elem + "-container'>";

      html += (optionDetails.label) ? "<p>"+optionDetails.label+"</p>": "";
      html += (elem == 'text-input') ? "<input type='text' placeholder='"+optionDetails.placeholder+"' />": "";

      if (elem == 'select') {
        for (var a = 0; a < optionDetails.options.length; a++) {
          html += "<div class='option'>"+ optionDetails.options[a].label +"</div>";
        }
      }

      html += "</div>";

      return html;
    }

    function addIconHtmlToSecondStage(newIconsHtml, masterServiceArray) {
      document.querySelectorAll(".admin-section-body.services-container")[0].innerHTML = newIconsHtml;
    }

    function createIconsAndFormElemsFromOptions(obj, masterServiceArrayString) {
      var newHtml = "";
      if (obj['sub-options'] != null) {
        for (var option in obj['sub-options']) {
          newHtml += createIconHtml(obj['sub-options'][option], masterServiceArrayString);
        }
      }

      if (obj['form-elements'] != null) {
        console.log(newHtml);
        for (var a = 0; a < obj['form-elements'].length; a++) {
          newHtml += createFormItemHtml(obj['form-elements'][a], masterServiceArrayString);
        }
      }

      if (newHtml != "") {
        addIconHtmlToSecondStage(newHtml);
      }
    }
	  
	  function selectService (service, masterServiceArray) {
		  var currentService = service;
      var relObj = null;
      console.log(currentObj);
		  
		  if (document.querySelectorAll('.service-type-label.active').length) {
			  document.querySelectorAll('.service-type-label.active')[0].classList.remove("active");
		  }
		  document.querySelectorAll('.service-type-label.'+currentService)[0].className += " active";

      if (masterServiceArray == null) {
        masterServiceArray = '[' + currentService + ']';
        masterServiceArrayString = currentService;
        servicesObj[currentService].active = true;
        currentObj = servicesObj[currentService];
        console.log(currentObj);
        createIconsAndFormElemsFromOptions(servicesObj[currentService], masterServiceArrayString);
      }
      else {
        masterServiceArrayString += ", " + currentService;
        console.log(masterServiceArrayString);
        currentObj = currentObj["sub-options"][currentService];
        currentObj.active = true;
        console.log(currentObj);

        createIconsAndFormElemsFromOptions(currentObj, masterServiceArrayString);
        console.log(servicesObj);
      }

      completeServiceSelection();
	  }

    function completeServiceSelection () {
      document.querySelectorAll('.admin-section.description')[0].querySelectorAll('.admin-section-body')[0].className += " open";
    }
	  
	  function checkIfDescriptionFilled() {
		  var desc = document.getElementById('description').value;
		  
		  if (desc.length > 0) {
        document.querySelectorAll('.admin-section.images')[0].querySelectorAll('.admin-section-body')[0].className += " open";
        document.querySelectorAll('.admin-section.details')[0].querySelectorAll('.admin-section-body')[0].className += " open";

        checkIfFormComplete();
		  }
	  }

    function checkIfFormComplete() {
      var descVal = document.getElementById('description').value;
      var nameVal = document.getElementById('name').value;
      var addressVal = document.getElementById('address').value;
      var button = document.getElementById('submit-request');

      if (descVal == '' || nameVal == '' || addressVal == '') {
        button.setAttribute('disabled', 'disabled');
        button.className += (!button.classList.contains('button-disabled')) ? ' button-disabled': '';
        return false;
      } else {
        button.removeAttribute('disabled');
        button.classList.remove('button-disabled');
        return true;
      }
    }
	  
	  function submitRequest() {
		  var descVal = document.getElementById('description').value;
		  var nameVal = document.getElementById('name').value;
		  var addressVal = document.getElementById('address').value;
		  //var images = document.getElementById('images').files;
		  var button = document.getElementById('submit-request');
		  var xhttp = new XMLHttpRequest();
	
		  button.innerHTML = 'Submitting...';
		  button.setAttribute('disabled', 'disabled');
		  button.className += (!button.classList.contains('button-disabled')) ? ' button-disabled': '';
	
		  if (checkIfFormComplete() == true) {
			  /*
			  xhttp.open("POST", "http://openhousebedford.co.uk/openhouse-property-service-email.php", true);
			  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			  xhttp.send("service="+currentService+"&desc="+descVal+"&name="+nameVal+"&address="+addressVal);
			  */
			  document.getElementById('description').value = "";
			  //var images = document.getElementById('images').files;
			  
			  document.querySelectorAll('.service-type-label.active')[0].classList.remove("active");
			  document.querySelectorAll('.admin-section.description')[0].querySelectorAll('.admin-section-body')[0].classList.remove("open");
			  document.querySelectorAll('.admin-section.images')[0].querySelectorAll('.admin-section-body')[0].classList.remove("open");
			  document.querySelectorAll('.admin-section.details')[0].querySelectorAll('.admin-section-body')[0].classList.remove("open");
			  
			  button.innerHTML = 'Submit Your Request';
			  button.removeAttribute('disabled');
		  
			  togglePopUp('open', 'success');
		  }
		  else {
			  button.innerHTML = 'Submit Your Request';
			  
			  togglePopUp('open', 'error');
		  }
	  }
	  
	  function togglePopUp(state, message) {
		  var overlay = document.querySelectorAll('#cover-overlay')[0];
		  console.log(overlay);
		  
		  if (state == 'close') {
			  overlay.classList.remove("open");
		  } else {
			  var message = (message == 'success') ? 
				"Thanks. Your Service Request has been submitted, and we will be in contact with you once we have been able to review it.": 
				"Oops. There was an error with some of the details you entered. Please check them and try again.";
				
			  overlay.querySelectorAll('#popup-message')[0].innerHTML = message;
			  overlay.className += " open";
		  }
	  }
  </script>
</html>
