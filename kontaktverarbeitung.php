<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $nachname = $_POST["nachname"];
    $email = $_POST["email"];
    $phonenumber = $_POST["phonenumber"];
    $message = $_POST["message"];

    $to = "Halaoui.aron@gmail.com"; // Die E-Mail-Adresse des Inhabers
    $subject = "Kontaktanfrage von $name $nachname";
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    $full_message = "Name: $name $nachname\n";
    $full_message .= "E-Mail: $email\n";
    $full_message .= "Telefonnummer: $phonenumber\n\n";
    $full_message .= "Nachricht:\n$message";

    mail($to, $subject, $full_message, $headers);
    
    // Optional: Weiterleitung nach dem Absenden
    header("Location: Main.html");
}
?>
