<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $querys = $_POST['querys'];

    $to = 'akshaynaithanigazing@gmail.com';

    $subject = 'Enquiry from '.$name;

    // Email body
    $body .= "Name: $name\n";
    $body .= "Number: $mobile\n";
    $body .= "Email: $email\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:$querys\n";

    // Additional headers
    $headers = 'From: '.$email."\r\n".
        'Reply-To: '.$email."\r\n".
        'X-Mailer: PHP/'.phpversion();
        header("Location:thankyou.html");
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Email sending failed.';
    }
} else {
    echo 'Invalid request.';
}
?>
