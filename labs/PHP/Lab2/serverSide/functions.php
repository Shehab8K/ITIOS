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

function save_to_file() {
    $fp = fopen(_Saving_File_, "a+");
    $savedDate = date("F j Y g:i a");
    $ip = $_SERVER['REMOTE_ADDR'];  
    $data_Saved =  array($savedDate ,$ip,$_POST["Email"],$_POST["Name"]);
    
    $written_string = implode(" , ",$data_Saved);
    fwrite($fp, $written_string.PHP_EOL);
    fclose($fp);
}

function read_from_file() {
    $fp = fopen(_Saving_File_, "r+");
    $readed_string = fread($fp, filesize(_Saving_File_));
    fclose($fp);
    return $readed_string;
}

function convert_file_to_array() {
    return file(_Saving_File_);
}

function save_to_users() {
    $fp = fopen(_Users_, "a+");   
    $data_Saved =  array($_POST["name"]);
    // $written_string = implode(" , ",$data_Saved);
    fwrite($fp, $$data_Saved.PHP_EOL);
    fclose($fp);
}

function convert_file_to_users() {
    return file(_Users_);
}
?>