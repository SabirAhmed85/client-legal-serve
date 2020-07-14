<?php
if (!empty($product_array)) { 
    foreach($product_array as $key=>$value){
        $inWishlist = in_array($product_array[$key]["id"], $cartItems);
?>
    <div class="col-sm-6 col-lg-4 mb-3">
        <div class="card product-tile">
            <a href="./product-detail.php?id=<?php echo $product_array[$key]["id"] ?>" title="Go to Product - <?php echo $product_array[$key]["name"]; ?>">
                <img class="card-img-top" src="<?php echo $product_array[$key]["imageSrc"]; ?>">
            </a>
            <div class="product-tile-footer card-body">
                <a href="./product-detail.php?id=<?php echo $product_array[$key]["id"] ?>" title="Go to Product - <?php echo $product_array[$key]["name"]; ?>">
                    <div class="product-title"><?php echo $product_array[$key]["name"]; ?></div>
                    <div class="product-price"><?php echo "$".$product_array[$key]["price"]; ?></div>
                    <div class="cart-action">
                        <button type="button" onclick="wishlistProductToggle(event, <?php echo $product_array[$key]['id']; ?>, this)" class="add-to-wishlist btnAddAction<?php echo ($inWishlist != 1) ? '': ' active'; ?>">
                            <i class="fa fa-heart"></i>
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </div>
<?php
    }
}
?>