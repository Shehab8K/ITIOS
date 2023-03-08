<?php

function validation()
{
    $name = isset($_POST['Name']) ? $_POST['Name'] : "";
    $email = isset($_POST['Email']) ? $_POST['Email'] : "";
    $message = isset($_POST['Message']) ? $_POST['Message'] : "";

    foreach ($_POST as $key => $value) {
        if (empty($value)) {
            return "$key can't be empty";
        }
    }
    if (!empty($_POST['Name']) && strlen($name) > MAX_NAME) {
        return " Name must be less than " . MAX_NAME;
    }
    if (!empty($_POST['Message']) && strlen($message) > MAX_MESSAGE) {
        return "Message  must be less than " . MAX_MESSAGE;
    }
    if (!empty($_POST['Email']) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return "Wrong Email format";
    }
}


function remember_variable($var)
{
    if (isset($_POST[$var]) && !empty($_POST[$var])) {
        return $_POST[$var];
    } else {
        return "";
    }
}

?>