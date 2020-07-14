<?php
    $category_array = $db_handle->runQuery("SELECT * FROM tblcategory ORDER BY id ASC");
    if (!empty($category_array)) { 
        foreach($category_array as $key=>$value){
    ?>
    <a href="./products.php?category=<?php echo $category_array[$key]["id"] ?>" title="<?php echo $category_array[$key]["name"]; ?>">
        <?php echo $category_array[$key]["name"]; ?><i class="fa fa-chevron-right"></i>
    </a>
    <?php
        }
    }
?>