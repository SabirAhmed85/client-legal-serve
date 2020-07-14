<?php include_once("../templates/template-variables.php"); ?>
<?php
session_start();
require_once("dbcontroller.php");
$db_handle = new DBController();
$categoryId = (isset($_GET['category'])) ? $_GET['category'] : 1;
$pageLimit = (isset($_GET['pageLimit']) && isset($_GET['pageLimit']) < 10) ? $_GET['pageLimit'] : 3;
$pageIndex = (isset($_GET['page'])) ? $_GET['page'] : 1;
$prevPageLink = './products.php?page='. ($pageIndex - 1);
$nextPageLink = './products.php?page='. ($pageIndex + 1);

if (isset($_GET['category'])) {
	$prevPageLink .= '&category='. $categoryId;
	$nextPageLink .= '&category='. $categoryId;
}

if (isset($_GET['pageLimit'])) {
	$prevPageLink .= '&pageLimit='. $pageLimit;
	$nextPageLink .= '&pageLimit='. $pageLimit;
}

$offset = $pageLimit * ($pageIndex - 1);
$_SESSION["wish_list"] = (!empty($_SESSION["wish_list"])) ? $_SESSION["wish_list"] : array();
$cartItems = $_SESSION["wish_list"];
$category = $db_handle->runQuery("SELECT * FROM tblcategory WHERE id='" . $categoryId . "' LIMIT 1");
$orderBy = (isset($_GET['order'])) ? $_GET['order'] : '';
$product_count = $db_handle->runQuery("SELECT COUNT(*) as count FROM tblproduct p LEFT JOIN tblproductcategory pc ON p.id = pc.productId LEFT JOIN tblcategory c ON c.id = pc.categoryId");
$total_pages = ($product_count[0]['count'] / $pageLimit);
$tableCatJoin = "LEFT JOIN tblproductcategory pc ON p.id = pc.productId LEFT JOIN tblcategory c ON c.id = pc.categoryId";
$tableImageJoin = 'LEFT JOIN tblproductproductimage ppi ON ppi.productId = p.id LEFT JOIN tblproductimage pi ON pi.id = ppi.productimageId';
$product_array = $db_handle->runQuery("SELECT p.*, c.name as catName, MIN(pi.src) as imageSrc FROM tblproduct p {$tableCatJoin} {$tableImageJoin} GROUP BY p.id LIMIT {$pageLimit} OFFSET {$offset}");
$firstProductIndex = ((($pageIndex - 1) * $pageLimit) + 1);
$lastProductIndex = (((($pageIndex - 1) * $pageLimit) + $pageLimit) > $product_count[0]['count']) ? $product_count[0]['count'] : ((($pageIndex - 1) * $pageLimit) + $pageLimit);

?>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta http-equiv="Content-Security-Policy" content="default-src gap://ready file://* *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *; font-src 'self' https://fonts.gstatic.com  https://cdnjs.cloudflare.com https://fonts.googleapis.com data:">
    <meta name="description" content="Bedfordshire, Buckinghamshire &amp; Bedford-based website developer, website designer & business marketer.">
    <meta name="keywords" content="bedford, luton, london, buckinghamshire, website development, website design, web development, appointment booking software, business software, business development, UK, MK40">
    <meta name="format-detection" content="telephone=no">
	<title>Neauvolux Products - Luxury Furniture</title>
    
    <?php include_once('./templates/head-scripts.php'); ?>
</head>
<body class="products">
	<?php include_once("../templates/page-loader-template.php"); ?>
    <div id="enquire-img" class="slow-trans"></div>
    
    <div style="opacity: 0;" class="page-container slow-trans container-fluid">
        <div class="initial-header-bar-container">
            <?php includeWithVariables("../templates/header-template.php", array('level' => '1')); ?>
        </div>

		<div class="header-img at-top trans header-top">
            <div class="header-inner-wrap">
            </div>
            <div class="header-vid-container">
            </div>
        </div>

        <div class="main-content no-bottom-marg row">

			<div class="left-hand-nav col-md-3 p-2">
				<h4 class="mx-2 my-3">By Category</h4>
				<?php include_once('./templates/left-hand-nav.php'); ?>
			</div>

			<div id="products-grid" class="col-md-9 pl-3">
				<div id="products-header">
					<div class="products-pager">
						<?php include('./templates/products-pager.php'); ?>
					</div>
					<h2><?php echo $category[0]["name"]; ?></h2>      
					<p><?php echo $category[0]["description"]; ?></p> 
					<p class="pager-note">Showing products <?php echo $firstProductIndex . ' - ' . $lastProductIndex . ' of ' . $product_count[0]['count']; ?></p>
				</div>
				<div class="row products-container">
					<?php include_once('./templates/products-container.php'); ?>
				</div>
				<div id="products-bottom-header">
					<p>Showing products <?php echo $firstProductIndex . ' - ' . $lastProductIndex . ' of ' . $product_count[0]['count']; ?></p>
					<div class="products-pager">
						<?php include('./templates/products-pager.php'); ?>
					</div>
				</div>
			</div>
			
		<!--
		<div id="shopping-cart">
			<div class="txt-heading">Shopping Cart</div>

			<a id="btnEmpty" href="index.php?action=empty">Empty Cart</a>
			<?php
			if(isset($_SESSION["wish_list"])){
				$total_quantity = 0;
				$total_price = 0;
			?>	
			<table class="tbl-cart" cellpadding="10" cellspacing="1">
			<tbody>
			<tr>
			<th style="text-align:left;">Name</th>
			<th style="text-align:left;">Code</th>
			<th style="text-align:right;" width="5%">Quantity</th>
			<th style="text-align:right;" width="10%">Unit Price</th>
			<th style="text-align:right;" width="10%">Price</th>
			<th style="text-align:center;" width="5%">Remove</th>
			</tr>	
			<?php		
				foreach ($_SESSION["wish_list"] as $item){
					$item_price = $item["price"];
					?>
						<tr>
						<td><img src="<?php echo $item["image"]; ?>" class="cart-item-image" /><?php echo $item["name"]; ?></td>
						<td></td>
						<td style="text-align:right;">1</td>
						<td  style="text-align:right;"><?php echo "$ ".$item["price"]; ?></td>
						<td  style="text-align:right;"><?php echo "$ ". number_format($item_price,2); ?></td>
						<td style="text-align:center;"><a href="index.php?action=remove&id=<?php echo $item["id"]; ?>" class="btnRemoveAction"><img src="icon-delete.png" alt="Remove Item" /></a></td>
						</tr>
						<?php
						$total_quantity += 1;
						$total_price += ($item["price"]);
					}
					?>

			<tr>
			<td colspan="2" align="right">Total:</td>
			<td align="right"><?php echo $total_quantity; ?></td>
			<td align="right" colspan="2"><strong><?php echo "$ ".number_format($total_price, 2); ?></strong></td>
			<td></td>
			</tr>
			</tbody>
			</table>		
			<?php
			} else {
			?>
			<div class="no-records">Your Cart is Empty</div>
			<?php 
			}
			?>
			</div>
		</div>
		-->

        <div class="central-container row">
            <?php include_once("../templates/central-container-template-product-detail.php"); ?>
        </div>

        <div class="footer no-top-marg row">
            <?php include_once("../templates/footer-template.php"); ?>
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
</body>
</html>