<?php
    if (session_id() == '') {
        session_start();
    }
    $wishlistCount = empty($_SESSION['wish_list']) ? 0: count($_SESSION['wish_list']);
    $imgRoute = (isset($level)) ? '..': '.';
?>
<div id="header-bar" align-title="left" class="bar-positive initial-header-bar with-margin slow-trans">
    <span class="top-logo-container">
        <a href="<?php echo $imgRoute; ?>/index.php">
            <img src="<?php echo $imgRoute; ?>/img/logo.png" alt="MyDay in Business - Website Development in Bedfordshire &amp; Buckinghamshire" />
        </a>
        <ul class="slow-trans main">
            <li class="close">
                Menu
                <i class="fa fa-times" onclick="hideMenu()"></i>
            </li>
            <li class="main-li slow-trans three-item-container free-addons">
                <i class="fa fa-home"></i>
                <a href="">Luxury</a>
                <ul class="inner-menu slow-trans web-enhancements">
                    <li>
                        <p>See our full range of furniture.</p>
                        <img src="<?php echo $imgRoute; ?>\img\tile-img\blue-chair.jpg" />
                        <i class="fa fa-pagelines"></i>
                        <p style="display: none;">Something else, something else, Something else, something else, Something else, something else, Something else, something else,</p>
                    </li>
                </ul>
            </li>
            <li class="two-item-container main-li slow-trans">
                <i class="fa fa-book"></i>
                <a href="<?php echo $imgRoute; ?>/cart/products.php">Catalogues</a>
                <ul class="inner-menu slow-trans web-enhancements catalogue">
                    <li class="inner-menu-half">
                        <p class="title">
                            <a href="<?php echo $imgRoute; ?>/cart/products.php?category=4">Furniture</a>
                        </p>
                        <a href="<?php echo $imgRoute; ?>/cart/products.php?category=4">
                            <p class="text">Browse our full range of furniture</p>
                        </a>
                        <img src="<?php echo $imgRoute; ?>\img\tile-img\white-room.jpg" />
                        <i class="fa fa-pagelines"></i>
                        <p style="display: none;">Something else, something else, Something else, something else, Something else, something else, Something else, something else,</p>
                    </li>
                    <li class="inner-menu-half">
                        <p class="title">
                        <a href="<?php echo $imgRoute; ?>/cart/products.php?category=2">Living Room</a>
                        </p>
                        <p class="text">Living room items.</p>
                        <a href="<?php echo $imgRoute; ?>/cart/products.php?category=2">
                            <img src="<?php echo $imgRoute; ?>\img\tile-img\white-room.jpg" />
                        </a>
                        <i class="fa fa-pagelines"></i>
                        <p style="display: none;">Something else, something else, Something else, something else, Something else, something else, Something else, something else,</p>
                    </li>
                    <li class="inner-menu-half">
                        <p class="title">
                        <a href="<?php echo $imgRoute; ?>/cart/products.php?category=1">Lounge</a>
                        </p>
                        <p class="text">Items for the lounge.</p>
                        <a href="<?php echo $imgRoute; ?>/cart/products.php?category=1">
                            <img src="<?php echo $imgRoute; ?>\img\tile-img\blue-chair.jpg" />
                        </a>
                        <i class="fa fa-pagelines"></i>
                        <p style="display: none;">Something else, something else, Something else, something else, Something else, something else, Something else, something else,</p>
                    </li>
                    <li class="inner-menu-half">
                        <p class="title">
                        <a href="<?php echo $imgRoute; ?>/cart/products.php?category=3">Garden</a>
                        </p>
                        <p class="text">Garden items.</p>
                        <a href="<?php echo $imgRoute; ?>/cart/products.php?category=3">
                            <img src="<?php echo $imgRoute; ?>\img\tile-img\white-room.jpg" />
                        </a>
                        <i class="fa fa-pagelines"></i>
                        <p style="display: none;">Something else, something else, Something else, something else, Something else, something else, Something else, something else,</p>
                    </li>

                    
                    <li class="inner-menu-quarter">
                        <p class="title">Small Title 1</p>
                        <img src="<?php echo $imgRoute; ?>\img\tile-img\white-room.jpg" />
                    </li>
                    <li class="inner-menu-quarter">
                        <p class="title">Small Title 2</p>
                        <img src="<?php echo $imgRoute; ?>\img\tile-img\blue-chair.jpg" />
                    </li>
                    <li class="inner-menu-quarter">
                        <p class="title">Small Title 3</p>
                        <img src="<?php echo $imgRoute; ?>\img\tile-img\white-room.jpg" />
                    </li>
                    <li class="inner-menu-quarter">
                        <p class="title">Small Title 4</p>
                        <img src="<?php echo $imgRoute; ?>\img/furniture-large/1.jpg" />
                    </li>
                </ul>
            </li>
            <li class="main-li slow-trans four-item-container">
                <i class="fa fa-cutlery"></i>
                <a href="<?php echo $imgRoute; ?>/our-services.php">Services</a>
                <ul class="inner-menu slow-trans web-enhancements">
                  <li>
                    <p>Here is some text about our services, Here is some text about our services, Here is some text about our services, </p>
                    <img src="<?php echo $imgRoute; ?>\img\tile-img\blue-chair.jpg" />
                    <i class="fa fa-pagelines"></i>
                    <p style="display: none;">Something else, something else, Something else, something else, Something else, something else, Something else, something else,</p>
                  </li>
                </ul>
            </li>
            <li class="two-item-container main-li slow-trans">
                <i class="fa fa-user"></i>
                <a href="<?php echo $imgRoute; ?>/about-neauvolux.php">About Us</a>
                <ul class="inner-menu slow-trans web-enhancements">
                  <li>
                    <p>Find out about Neauvolux and its rich history, from our roots in Pakistan to our modern outlet in London.</p>
                    <img src="<?php echo $imgRoute; ?>\img\tile-img\white-room.jpg" />
                    <i class="fa fa-pagelines"></i>
                    <p style="display: none;">Something else, something else, Something else, something else, Something else, something else, Something else, something else,</p>
                  </li>
                </ul>
            </li>
            <li class="main-li slow-trans">
                <i class="fa fa-map-marker"></i>
                <a href="<?php echo $imgRoute; ?>/contact-us.php">Contact</a>
            </li>
            <li class="main-li slow-trans">
                <i class="fa fa-heart"></i>
                <a href="<?php echo $imgRoute; ?>/cart/wishlist.php">Wishlist</a>
            </li>
        </ul>
    </span>
    <button class="menu" onclick="showMenu()"><i class="fa fa-bars"></i></button>
    
</div>    
<div class="sub-container">
    <ul class="trans sub">
        <li class="close">
            Menu
            <i class="fa fa-times" onclick="hideMenu()"></i>
        </li>
        <li class="main-li slow-trans three-item-container ">
            <i class="fa fa-list-alt"></i>
            <a href="">Videos</a>
        </li>
        <li class="business-packages two-item-container main-li slow-trans">
            <i class="fa fa-money"></i>
            <a href="">Gallery</a>
        </li>
        <li class="main-li slow-trans four-item-container">
            <i class="fa fa-home"></i>
            <a href="">Something Else</a>
        </li>
        <li class="two-item-container main-li slow-trans">
            <i class="fa fa-gbp"></i>
            <a href="">Something</a>
        </li>
        <li class="free-addons two-item-container main-li slow-trans">
            <i class="fa fa-map-marker"></i>
            <a href="">Craftsmanship</a>
        </li>
    </ul>
</div>

<div id="wishlist-panel" class="trans">
    <i class="fa fa-heart"></i>
    <span class="counter"><?php echo $wishlistCount; ?></span>
    <p>In your Wishlist</p>
    <div id="wishlist-panel-footer">
        <a href="<?php echo $imgRoute; ?>/cart/wishlist.php" title="View your saved Wishlist">View Wishlist</a>
    </div>
</div>

<?php ?>
