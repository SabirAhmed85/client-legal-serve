<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type");
  header("Content-Type: application/json");

  $action = ($_GET['action']);
  if ($action == 'processContact') {
    $data               = file_get_contents("php://input");
    $dataJsonDecode     = json_decode($data);
    
    $name = $dataJsonDecode-> Name;
    $organisation = $dataJsonDecode-> Company;
    $email = $dataJsonDecode-> Email;
    $phone = $dataJsonDecode-> Phone;
    $message = $dataJsonDecode-> Message;

    //Email details
    $emailToAddress = "sabir.ahmed@hotmail.co.uk";
    $nameTo = "Legal Serve Admin";
    $subject = 'Legal Serve Website Contact';

    // Message
    $message =
        '<html>
        <head>
          <title>Legal Serve Website Contact</title>
        </head>
        <body>
          <table>
            <tr>
                <td>
                    <p>
                        Hi, you have been contacted via your website. Please see details:
                    </p>
                    <p>
                        Name: '.$name.'
                    </p>
                    <p>
                        Email: '.$email.'
                    </p>
                    <p>
                        Organisation: '.$organisation == '' ? 'No organisation specified' : $organisation.'
                    </p>
                    <p>
                        Phone: '.$phone == '' ? 'No phone number specified' : $phone.'
                    </p>
                    <p>
                        Message: '.$message.'
                    </p>
                </td>
            </tr>
          </table>
        </body>
        </html>';
    // To send HTML mail, the Content-type header must be set
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';

    // Additional headers
    $headers[] = 'To: '.$nameTo.' <'.$emailToAddress.'>';
    $headers[] = 'From: Legal Serve <noreply@legalservebedford.co.uk>';

    // Mail it
    $sendMail = mail($emailToAddress, $subject, $message, implode("\r\n", $headers));
    
    if ($sendMail) {
        echo json_encode("Success");
    } else {
        echo json_encode("Couldn't send email");
    }
  }
?>
