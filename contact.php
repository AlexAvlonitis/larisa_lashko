<?php

// Details
$message="$detail";


// Mail of sender
$mail_from="$customer_mail";

// From
$header="from: $name <$mail_from>";


// Enter your email address
$to ="larisa.lashko@hotmail.com, avlonitis@msn.com";

$send_contact=mail($to,$subject,$message,$header);


// Check, if message sent to your email
// display message "We've recived your information"
if($send_contact){
echo "We've received your contact information";
}
else {
echo "ERROR, Please try again";
}
?>