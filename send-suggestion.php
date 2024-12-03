<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $bookTitle = $_POST["bookTitle"];
    $bookAuthor = $_POST["bookAuthor"];
    
    $to = "saidakhmadabduzhapparov@gmail.com";
    $subject = "Жаңа ұсыныс";
    $message = "Ұсыныс жіберуші: $name\nЭлектронды пошта: $email\nКітап атауы: $bookTitle\nКітап авторы: $bookAuthor";
    
    // Обработка загрузки файла
    if (isset($_FILES["bookFile"]) && $_FILES["bookFile"]["error"] == 0) {
        $filePath = $_FILES["bookFile"]["tmp_name"];
        $fileName = $_FILES["bookFile"]["name"];
        $fileContent = file_get_contents($filePath);
        $boundary = md5(time());

        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
        $body .= $message . "\r\n\r\n";
        
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"$fileName\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
        $body .= chunk_split(base64_encode($fileContent)) . "\r\n";
        $body .= "--$boundary--";

        mail($to, $subject, $body, $headers);
    } else {
        mail($to, $subject, $message);
    }

    echo "Ұсынысыңыз жіберілді!";
} else {
    echo "Қате болды.";
}