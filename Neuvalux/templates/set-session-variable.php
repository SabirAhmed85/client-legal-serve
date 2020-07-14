<?php 
session_start();

if (in_array($_REQUEST['productId'], $_SESSION['wish_list'])) {
    $_SESSION['wish_list'] = array_filter(
        $_SESSION['wish_list'],
        function($v) { return $v != $_REQUEST['productId']; }
    );
} else {
    $_SESSION['wish_list'][] = $_REQUEST['productId'];
}
?>