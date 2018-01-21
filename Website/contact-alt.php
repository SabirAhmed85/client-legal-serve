<!DOCTYPE html>
<html ng-app="NightLife">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta http-equiv="Content-Security-Policy" content="default-src gap://ready file://* *; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.mynyte.co.uk *; style-src 'self' 'unsafe-inline' https://www.mynyte.co.uk *; img-src 'self' https://www.mynyte.co.uk/ https://www.google-analytics.com/ https://csi.gstatic.com/ https://1.bp.blogspot.com/ https://maps.googleapis.com/ data:">
    <title>Contact Legal Serve to find out about our Process &amp; Legal Support Services</title>

    <link href="css/outer-style.css" rel="stylesheet">
    
    <script src="http://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="contact-alt.js"></script>
        
    
    <!-- api call js files -->
  </head>
  <body class="contact">

    <ion-nav-view></ion-nav-view>
    <ion-nav-bar animation="no-animation" >
      <ion-header-bar id="header-bar" no-tap-scroll="true" align-title="left" class="bar-positive initial-header-bar">
        <span class="top-logo-container">
            <img src="img/logo.png" />
        </span>
        <div class="initial-header-buttons isVisible">
            <button class="whats-open active">
                <a href="index.php">Home</a>
            </button>
            <button class="whats-around">
                <a href="process-server-in-bedford.php">Services</a>
            </button>
            <button class="whos-online">
                <a href="#">Contact Us</a>
            </button>
        </div>
    </ion-header-bar>
    </ion-nav-bar>
    <div class="header-img">
        <img src="img/legal-serve-process-serving.jpg" alt="Process Serving &amp; Legal Support" class="background-img" />
    </div>
    <div class="main-content">
    	<div class="main-content-topbar">
            <h1><i class="ion-ios-telephone"></i>Contact Legal Serve</h1>
            <p>Contact Legal Serve to find out what Process Services we can provide you with, or to make a general enquiry.</p>
        </div>
        <div class="main-content-form">
            <form>
                <p id="missing-name-note">Please fill in a name.</p>
                <p id="missing-email-note">Please fill in your email address.</p>
                <p id="invalid-email-note">The e-mail address you have entered is not valid.</p>
                <p id="missing-message-note">Please fill in a message.</p>
                <p id="unknown-error-note">There was an unknown error in submitting your request. Please try again.</p>
                <p id="message-success-note">Thanks! Your request has been received, and we will respond as soon as possible.</p>
                <input id="name" maxlength="100" type="text" class="nightlife-input" placeholder="Your Name (Required)" />
                <input id="email" maxlength="100" type="text" class="nightlife-input" placeholder="Your e-mail (Required)" />
                <input id="company" maxlength="100" type="text" class="nightlife-input" placeholder="Your Comany /Organisation (optional)" />
                <textarea id="message" maxlength="500" class="nightlife-textarea" rows="4" cols="50" placeholder="Message (Required)"></textarea>
                <button class="btn-half btn-red contact">Send Message</button>
                <div class="form-side-note">
                    <h4>Or alternatively, contact us directly:</h4>
                    <p>Phone: (01234) 92 48 47</p>
                    <p>Mobile: 07853 166 674</p>
                    <p>Email: info@legalservebedford.co.uk</p>
                </div>
            </form>
            <div class="mynyte-listings mynyte-offers-feed mn-dark" style="height: 400px; display: none;"></div>
            <a class="mynyte-table-book mynyte-book" style="display: none;"></a>
            <a class="mynyte-event-entry-book mynyte-book mn-dark" style="display: none;"></a>
            <div class="mynyte-live-chat mn-dark" style="height: 400px; width: 400px; display: none;"></div>
            <!--<div class="mynyte-table-booking mn-dark" style="height: 600px; width: 400px; display: none;"></div>-->
            <div class="mynyte-menu-display mn-dark" style="width: 800px; display: none;"></div>
            <div data-item-type="Appointment Booking" data-item-extra-filters="'Related Business Entity Item Appointment Type':='Process Serving Job'" data-item-sub-type="Appointment Type,Process Serving Job" class="mynyte-new-business-item mn-dark" style="width: 800px; display: none;"></div>
            <div data-item-type="Business User Account" data-item-sub-type="Appointment Type,Process Serving Job" class="mynyte-business-items-summary mn-dark" style="width: 800px; display: none;"></div>
            <div data-item-id="127" class="mynyte-business-item-detail mn-dark" style="width: 800px; display: none;"></div>
        </div>
    </div>

    <div class="footer">
        <span class="red-span">07853 166 674</span>
        <img src="img/logo.png" />
        <ul>
            <li><a href="index.php">Home</a></li>            
            <li><a href="process-server-in-bedford.php">Process Servicing in Bedford</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
    <div class="screen-cover">
    </div>
  </body>
    <!-- <script async type="text/javascript" src="externalApi.js"></script>  -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-92441562-1', 'auto');
      ga('send', 'pageview');

    </script>
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

</html>
