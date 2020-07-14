<span>Page:</span> 
<a href="<?php echo ($pageIndex > 1) ? $prevPageLink : '#!'; ?>"><i class="fa fa-chevron-left"></i></a>
<select>
<?php
    $i = 1;
    while ($i < $total_pages + 1) {
        ?>
        <option <?php echo ($i == $pageIndex) ? 'selected="selected"': ''; ?>><?php echo $i; ?></option>
        <?php
        $i++;
    }
?>
</select>
<a href="<?php echo ($pageIndex < $total_pages) ? $nextPageLink : '#!'; ?>"><i class="fa fa-chevron-right"></i></a>