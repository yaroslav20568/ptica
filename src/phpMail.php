<?php 
    if( isset($_POST['fio']) ) {
        $fName = 'Наименование юридического лица: '.$_POST['name'].' <br />';
        $fMail =  'Адрес электронной почты: '.$_POST['email'].' <br />';
        $fAddress = 'Адрес юридического лица: '.$_POST['address'].' <br />';
        $fFio = 'ФИО руководителя: '.$_POST['fio'].' <br />';
        $fMessage = 'Текст сообщения: '.$_POST['message'].' <br />';
        
        $fFile = 'Файл: '.$_FILES['file']['name'].' <br />';

        $AllInOne =  $fName.$fMail.$fAddress.$fFio.$fMessage.$fFile;
        $to = 'yaroslav@nbd.by';
        $headers="From: ptica@info.by>\nReply-to:ptica@info.by\nContent-Type: text/html; charset=\"utf-8\"\n";
        
        mail($to, 'Электронные обращения', $AllInOne, $headers);
    } else {
        $name        = "Название здесь идет";
        $email       = "yaroslav@nbd.by";
        $to          = "$name <$email>";
        $from        = "ptica@info.by";
        $subject     = "Электронные обращения";
        $mainMessage = "Привет,я сообщение с pdf файлом";
        // $fileatt     = $_SERVER['DOCUMENT_ROOT'];
        $fileatt     = $_SERVER['DOCUMENT_ROOT'];
        $fileatttype = "application/pdf";
        $fileattname = $_FILES['file']['name']; //Имя, которое вы хотите использовать для отправки, или вы можете использовать то же имя
        $headers     = "From: $from";

        // Открываем и читаем файл в переменную.
        $file = fopen($fileatt, 'rb');
        $data = fread($file, filesize($fileatt));
        fclose($file);

        // Это прикрепляет файл
        $semi_rand     = md5(time());
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
        $headers      .= "\nMIME-Version: 1.0\n" .
        "Content-Type: multipart/mixed;\n" .
        " boundary=\"{$mime_boundary}\"";
        $message = "Это multi-part сообщение в формате MIME․\n\n" .
        "-{$mime_boundary}\n" .
        "Content-Type: text/plain; charset=\"iso-8859-1\n" .
        "Content-Transfer-Encoding: 7bit\n\n" .
        $mainMessage  . "\n\n";

        $data = chunk_split(base64_encode($data));
        $message .= "--{$mime_boundary}\n" .
        "Content-Type: {$fileatttype};\n" .
        " name=\"{$fileattname}\"\n" .
        "Content-Disposition: attachment;\n" .
        " filename=\"{$fileattname}\"\n" .
        "Content-Transfer-Encoding: base64\n\n" .
        $data . "\n\n" .
        "-{$mime_boundary}-\n";

        $message .= 'Имя: '.$_POST['name'].' <br />';
        $message .=  'Адрес электронной почты: '.$_POST['email'].' <br />';
        $message .= 'Адрес места жительства: '.$_POST['address'].' <br />';
        $message .= 'Текст сообщения: '.$_POST['message'].' <br />';

        // Отправить письмо
        if(mail($to, $subject, $message, $headers))
        {
            echo "success";
        } else {
            echo "error";
        }
    }
?>