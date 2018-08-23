<?php
//if($_POST)
//{
//$to_Email = "weelman93@gmail.com"; 
//$subject = 'Запрос обратного звонка '.$_POST["name"]; 
//
//if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
//
//$otvet_serv = json_encode(
//array( 
//'text' => 'Возникла ошибка при отправке данных'
//));
//
//die($otvet_serv);
//} 
//
//if(!isset($_POST["name"]) || !isset($_POST["phone"]))
//{
//$otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
//die($otvet_serv);
//}
//
//$user_Name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
//$user_Phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
//$user_meta = filter_var($_POST["meta"], FILTER_SANITIZE_STRING);
//
//if(strlen($user_Name)<3)
//{
//$otvet_serv = json_encode(array('text' => 'Поле Имя слишком короткое или пустое'));
//die($otvet_serv);
//}
//if(!is_numeric($user_Phone))
//{
//$otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
//die($otvet_serv);
//}
//
//$message = "Имя: ".$user_Name.". Телефон: ".$user_Phone.". Откуда:".$user_meta;
//
//if(!mail($to_Email, $subject, $message, ,"From: info@iocent.ru\r\nContent-type: text/plain; charset=UTF-8 \r\n"))
//{
//$otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
//die($otvet_serv);
//}else{
//$otvet_serv = json_encode(array('text' => 'Спасибо! '.$user_Name .', ваше сообщение отправлено.'));
//die($otvet_serv);
//}
//}

    $to  = "mail@iocent.ru,";
    $to .= "1formarketing@gmail.com";
    $subject = 'Заявка с сайта!';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Откуда: '.$_POST['meta'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: iocent.ru <call@iocent.ru>\r\n";
    mail($to, $subject, $message, $headers);


    $smsservlogin="mail@iocent.ru";
    $smsservpass="bXWzQsC95aywXToqjcKRRIniFmIB";
    $today = date("Y-m-d H:i:s");
    $sms="Дата:".$today." Имя: ".$_POST['name']."Телефон: ".$_POST['phone']." Откуда: ".$_POST['meta'];


    $url='https://gate.smsaero.ru/send/?user='.$smsservlogin.'&password='.$smsservpass.'&to=89501261524&text='.$sms.'&from=test.iocent.ru&type=3';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
    $resp = curl_exec($ch);
    return true;
?>