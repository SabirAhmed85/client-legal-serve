<?php
	$from = "Web Master <webmaster@openhousebedford.co.uk>";
	$to = "sabir.ahmed@hotmail.co.uk";
	$subject = "You've just got a new Property Service Request";
	$service = $_POST['service'];
	$description = $_POST['desc'];
	$name = $_POST['name'];
	$address = $_POST['address'];
	
	$body = "Details of the Service Request \r\n";
	$body .= "Service Required: " . $service . " \r\n";
	$body .= "Description: " . $description . " \r\n";
	$body .= "Name: " . $name . " \r\n";
	$body .= "Address: " . $address . " \r\n";
	
	$headers = 'From: webmaster@openhousebedford.co.uk' . "\r\n" .
    'Reply-To: webmaster@openhousebedford.co.uk' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$mail = mail($to, $subject, $body, $headers);
?>