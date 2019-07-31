<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

require __DIR__.'/mailer/PHPMailerAutoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'info@bbhills.kz';                     // SMTP username
    $mail->Password   = 'New23Estate04!(';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;      
    $mail->CharSet 	= 'utf-8';                              // TCP port to connect to

    //Recipients
    $mail->setFrom('info@bbhills.kz', 'Blackberry Hills');              
    $mail->addAddress("callcentre@muratov.kz");    
    $mail->addCC("sanch941@gmail.com");  
	$mail->addCC("a.bektas@newestate.kz");
	$mail->addCC("z.bertoleuova@newestate.kz");
	$mail->addCC("a.zhadraeva@newestate.kz");                                                 
    $_POST = json_decode(file_get_contents('php://input'), true);   
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $time = $_POST["time"];

    // Content
    $mail->isHTML(true);        
    $mail->Subject = "Заказали звонок";                              
    $mail->Body	= "Имя - $name, Телефон - $phone, Почта - $email, Время - $time";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}