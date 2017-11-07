<?php
	$from = "Web Master <webmaster@openhousebedford.co.uk>";
	$to = "sabir.ahmed@hotmail.co.uk";
	$subject = "You've just got a new Property Service Request";
	$service = $_POST['service'];
	$description = $_POST['desc'];
	$name = $_POST['name'];
	$address = $_POST['address'];

	echo json_encode($_POST["images"]["error"]);
	echo json_encode($_FILES["images"]["error"]);
	$imageFile = $_POST["images"]["name"];
	$imgEncoded = base64_encode(file_get_contents($imageFile));
	echo json_encode($imgEncoded);
	
	$body = "Details of the Service Request \r\n\r\n";
	$body .= "Service Required: " . $service . " \r\n";
	$body .= "Description: " . $description . " \r\n";
	$body .= "Name: " . $name . " \r\n";
	$body .= "Address: " . $address . " \r\n\r\n";
	$body .= "Images: <img alt='Embedded Image' src='data:image/png;base64," . $imgEncoded . "' /> \r\n";
	

	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	$headers .= 'From: webmaster@openhousebedford.co.uk' . "\r\n" .
    'Reply-To: webmaster@openhousebedford.co.uk' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	//$mail = mail($to, $subject, $body, $headers);
?>