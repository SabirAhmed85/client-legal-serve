<!DOCTYPE HTML>
<html class="wf-quicksand-n4-active wf-quicksand-n7-active wf-active">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta http-equiv="Content-Security-Policy" content="default-src gap://ready file://* *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *; font-src 'self' https://fonts.gstatic.com  https://cdnjs.cloudflare.com https://fonts.googleapis.com data:">
    <title>About Neauvolux</title>
    <meta name="description" content="Bedfordshire, Buckinghamshire &amp; Bedford-based website developer, website designer & business marketer.">
    <meta name="keywords" content="bedford, luton, london, buckinghamshire, website development, website design, web development, appointment booking software, business software, business development, UK, MK40">
    <meta name="format-detection" content="telephone=no">

    <link href="css/outer-style.css" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://webfonts.creativecloud.com/c/69721a/1w;quicksand,2,WXp:W:n4,WXn:W:n7/l" media="all">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans|Open+Sans+Condensed:300|Titillium+Web" rel="stylesheet">
    <script src="https://webfonts.creativecloud.com/quicksand:n4,n7:default.js" type="text/javascript"></script>
    
    <script async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    
    <script src="js/main.js" type="text/javascript"></script>
    <script type="text/javascript">
        initPage(0.55);
    </script>

    <script src='https://maps.googleapis.com/maps/api/js?sensor=false'></script>
  </head>

  <body class="about-neauvolux">
    <?php include_once("templates/page-loader-template.php"); ?>
    <div style="opacity: 0;" class="page-container slow-trans">
    	
        <div class="initial-header-bar-container">
            <?php include_once("templates/header-template.php"); ?>
        </div>
        <div class="header-img header-top at-top trans">
            <div class="header-inner-wrap">
            </div>
            <div class="header-text-container">
                <h1>Contact Us</h1>
            </div>
            <div class="header-vid-container">
            </div>
        </div>
    
        <div class="central-container">
        
        <div class="main-container-2 main-container main-content product-summary product-summary-narrow">
            <div class="text">
                <div class="product-summary-tile">
                    <i class="fa fa-phone tile-icon tile-icon-features"></i>
                    <h4>Call us</h4>
                    <a href="tel:01234245554">0207 222 2222</a>
                </div>
                <div class="product-summary-tile">
                    <i class="fa fa-envelope tile-icon tile-icon-features"></i>
                    <h4>Email us</h4>
                    <a href="mailto:business@mynyte.co.uk">enquiries@neauvolux.co.uk</a>
                </div>
                <div class="product-summary-tile">
                    <i class="fa fa-facebook tile-icon tile-icon-features"></i>
                    <h4>Like us</h4>
                    <a href="https://www.facebook.com/mynyte">At facebook.com/neauvolux</a>
                </div>
                <div class="product-summary-tile">
                    <i class="fa fa-twitter tile-icon tile-icon-features"></i>
                    <h4>Follow us</h4>
                    <a href="">On Twitter @neauvolux</a>
                </div>
                <div class="product-summary-tile product-summary-tile-last">
                    <i class="fa fa-instagram tile-icon tile-icon-features"></i>
                    <h4>See our Snaps</h4>
                    <a href="">On Instagram @neauvolux</a>
                </div>
            </div>
        </div>

        <div class="main-container-2 main-container main-container-dark-red contact-summary">
            <div class="text center">
                <h2 class="lower">Get in touch with us</h2>
                <p>
                    We're always on hand, ready to take any of your queries on our premium range of luxury furniture.
                </p>
                <div class="contact-section contact-section-last">
                    <h4>Contact Us Online</h4>
                    
                    <form>
                        <span class="success-span slow-trans">Thank you for contacting us. Your message has now been submitted, and one of our team members will be in touch with you shortly.</span>
                        <span class="main-error-span slow-trans">There was a problem with some of the details you entered. Please correct the errors below and try again.</span>
          
                        <div>
                            <i class="fa fa-user"></i>
                            <input type="text" placeholder="Your Name (required)" name="Name"/>
                            <span class="error-span">
                                <span>Please enter a valid name.</span>
                            </span>
                        </div>
                        <div>
                            <i class="fa fa-envelope-o"></i>
                            <input type="text" placeholder="E-mail Address (required)" name="Email"/>
                            <span class="error-span">
                                <span>Please enter a valid e-mail.</span>
                            </span>
                        </div>
                        <div>
                            <i class="fa fa-phone"></i>
                            <input type="text" placeholder="Phone Number" name="Phone"/>
                            <span class="error-span">
                                <span>Please enter a valid phone number.</span>
                            </span>
                        </div>
                        <div>
                            <i class="fa fa-comment"></i>
                            <textarea placeholder="Message (required)" name="Message"></textarea>
                            <span class="error-span">
                                <span>Please enter a Message.</span>
                            </span>
                        </div>
                        <button onclick="contactMyDay(this, event);">Contact</button>
                    </form>
                </div>
                
                <div class="contact-section business-promotion-section-last">
                    <h4>Other Contact Details</h4>
                    
                    <p><i class="fa fa-phone"></i>Phone:<br /> (0208) 222 2222</p>
                    <p><i class="fa fa-envelope"></i>Email:<br /> enquiries@neauvolux.co.uk</p>
                </div>
            </div>
        </div>
        
        <div class="footer no-top-marg footer-dark-top">
            <?php include_once("templates/footer-template.php"); ?>
        </div>

    </div>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-92441562-1', 'auto');
      ga('send', 'pageview');

    </script>



</div></body></html>
