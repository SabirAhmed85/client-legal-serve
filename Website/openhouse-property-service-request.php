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
            <div class="admin-section-body open trans">
              <a class="service-type-label Water" onclick="selectService('Water')">
                <i class="fa fa-tint trans"></i>
                <span>Water</span>
              </a>
              <a class="service-type-label Gas" onclick="selectService('Gas')">
                <i class="fa fa-fire trans"></i>
                <span>Gas</span>
              </a>
  
              <a class="service-type-label Electricity" onclick="selectService('Electricity')">
                <i class="fa fa-bolt trans"></i>
                <span>Electricity</span>
              </a>

              <a class="service-type-label Internet" onclick="selectService('Internet')">
                <i class="fa fa-internet-explorer trans"></i>
                <span>Internet</span>
              </a>

              <a class="service-type-label Window" onclick="selectService('Window')">
                <i class="fa fa-window-restore trans"></i>
                <span>Windows</span>
              </a>

              <a class="service-type-label Something" onclick="selectService('Something')">
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
                <i class="fa fa-picture-o left-icon"></i>Upload Image(s)
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
          
          <button id="submit-request" onclick="submitRequest()" class="button-disabled" disabled="disabled">
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
	  
	  function selectService (service) {
		  currentService = service;
		  
		  if (document.querySelectorAll('.service-type-label.active').length) {
			  document.querySelectorAll('.service-type-label.active')[0].classList.remove("active");
		  }
		  document.querySelectorAll('.service-type-label.'+currentService)[0].className += " active";
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
      var images = document.getElementById('images').files;
      var button = document.getElementById('submit-request');
      var xhttp = new XMLHttpRequest();

      button.innerHTML = 'Submitting...';
      button.setAttribute('disabled', 'disabled');
      button.className += (!button.classList.contains('button-disabled')) ? ' button-disabled': '';

      if (checkIfFormComplete() == true) {
  		  xhttp.open("POST", "http://openhousebedford.co.uk/openhouse-property-service-email.php", true);
  		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    		xhttp.send("service="+currentService+"&desc="+descVal+"&name="+nameVal+"&address="+addressVal+"&images="+images);
      }
      else {
        button.innerHTML = 'Submit Yoour Request';
      }
	  }
  </script>
</html>
