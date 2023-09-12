<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set the recipient email address
    $to = "recipient@example.com"; // Replace with your recipient's email address

    // Set the subject of the email
    $subject = "New Contact Form Submission from $name";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Set additional headers
    $headers = "From: $email";

    // Attempt to send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo json_encode(array("status" => "success", "message" => "Thank you for contacting us! We will get back to you shortly."));
    } else {
        // Email sending failed
        echo json_encode(array("status" => "error", "message" => "Oops! Something went wrong. Please try again later."));
    }
} else {
    // Handle non-POST requests
    echo json_encode(array("status" => "error", "message" => "Invalid request method."));
}
?>
