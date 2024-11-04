<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; // Указываем хост без ssl://
$mail->SMTPAuth = true;
$mail->Username = 'benimadimmucize1@gmail.com'; 
$mail->Password = 'azxw wape umct wvhr'; 
$mail->SMTPSecure = 'ssl'; // Используем SSL
$mail->Port = 465; // Порт 465 для SSL

$mail->setFrom('benimadimmucize1@gmail.com', 'Mucize'); // От кого письмо
$mail->addAddress('Bam@mevvfilm.com');  // Кому отправляем

$mail->isHTML(true); // Отправка письма в HTML-формате
$mail->Subject = 'BAM';
$mail->Body    = "
    Kullanıcı bilgi bıraktı <br> 
    Isim: $name <br>
    Soyisim: $surname <br>
    E-mail: $email <br>
    Text: $text
";

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

if(!$mail->send()) {
    echo 'E-posta gönderme hatası. Hata: ' . $mail->ErrorInfo;
    return false;
} else {
    echo 'E-posta gönderildi!';
    return true;
}
?>