<?php include_once("../templates/template-variables.php"); ?>
<?php
session_start();
require_once("dbcontroller.php");
$db_handle = new DBController();

$_SESSION["wish_list"] = (!empty($_SESSION["wish_list"])) ? $_SESSION["wish_list"] : array();
$cartItems = $_SESSION["wish_list"];
$tableCatJoin = 'LEFT JOIN tblproductcategory pc ON p.id = pc.productId LEFT JOIN tblcategory c ON c.id = pc.categoryId';
$tableImageJoin = 'LEFT JOIN tblproductproductimage ppi ON ppi.productId = p.id LEFT JOIN tblproductimage pi ON pi.id = ppi.productimageId';
$productById = $db_handle->runQuery("SELECT p.*, c.name as catName, pi.src as imageSrc FROM tblproduct p {$tableCatJoin} {$tableImageJoin} WHERE p.id={$_GET["id"]}");
$inWishlist = in_array($productById[0]["id"], $cartItems);
?>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta http-equiv="Content-Security-Policy" content="default-src gap://ready file://* *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *; font-src 'self' https://fonts.gstatic.com  https://cdnjs.cloudflare.com https://fonts.googleapis.com data:">
    <title>Website Development &amp; Business Promotion| MyDay in Business</title>
    <meta name="description" content="Bedfordshire, Buckinghamshire &amp; Bedford-based website developer, website designer & business marketer.">
    <meta name="keywords" content="bedford, luton, london, buckinghamshire, website development, website design, web development, appointment booking software, business software, business development, UK, MK40">
	<meta name="format-detection" content="telephone=no">
	<title>Neauvolux - <?php echo $productById[0]["name"]; ?> || <?php echo $productById[0]["catName"]; ?></title>
    
    <?php include_once('./templates/head-scripts.php'); ?>
</head>
<body class="product-detail">

	<?php include_once("../templates/page-loader-template.php"); ?>
    <div id="enquire-img" class="slow-trans"></div>
    
    <div style="opacity: 0;" class="page-container slow-trans">
        <div class="initial-header-bar-container">
			<?php includeWithVariables("../templates/header-template.php", array('level' => '1')); ?>
        </div>

        <div class="main-content no-bottom-marg header-top row">
            
			<div id="product-grid" class="px-5 col-lg-10 mb-5">
				<h2 class="txt-heading"><?php echo $productById[0]["name"]; ?></h2>
				<div id="product-item" class="row p-3">
					<div id="product-main-image" class="col-md-9 pl-0 pr-1">
						<img onclick="showMainImage(this)" src="<?php echo $productById[0]["imageSrc"]; ?>"
							title="<?php echo $productById[0]["name"]; ?>" />
					</div>
					<div id="product-image-thumbs" class="col-12 col-md-3 p-0 m-0 row">
						<?php 
						$im = 0;
						while ($im < count($productById) && $im < 3) {
							?>
							<div class="image-thumb-container col-4 col-md-12 pl-0 pr-1">
								<img class="trans" onclick="showMainImage(this)" src="<?php echo $productById[$im]["imageSrc"]; ?>">
							</div>
							<?php
							$im++;
						}
						?>
					</div>
					<div class="product-tile-footer">
						<div class="product-title"><?php echo $productById[0]["name"]; ?></div>
						<div class="product-price"><?php echo "$".$productById[0]["price"]; ?></div>
						<div class="cart-action">
							<button type="button" onclick="showContactForm()" class="btn btn-primary">
								<i class="fa fa-clock-o"></i>
								<span>Book an Appointment</span>
							</button>
							<button type="button" onclick="wishlistProductToggle(event, <?php echo $productById[0]['id']; ?>, this)" class="add-to-wishlist btn btn-primary<?php echo ($inWishlist) ? ' active' : ''  ; ?>">
								<i class="fa fa-heart"></i>
								<span><?php echo ($inWishlist == 1) ? 'Added to Wishlist' : 'Add to Wishlist' ; ?></span>
							</button>
						</div>
					</div>
				</div>
			</div>

        </div>

        <div class="central-container row m-0">
            <?php include_once("../templates/central-container-template-product-detail.php"); ?>
        </div>

        <div class="footer no-top-marg row m-0">
            <?php include_once("../templates/footer-template.php"); ?>
        </div>
	</div>
	
	<?php include_once('./templates/simple-modal.php'); ?>
	<?php include_once('./templates/contact-modal.php'); ?>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-92441562-1', 'auto');
      ga('send', 'pageview');

    </script>

</body>
</html>