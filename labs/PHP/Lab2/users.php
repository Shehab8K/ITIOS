<?php
require_once('serverSide/config.php');
require_once('serverSide/functions.php');

$users = convert_file_to_array();

foreach($users as $user){
    $user_details = explode(",",$user);
      echo str_repeat("*", 20);
        echo "<div>";
    foreach($user_details as $value ){
      echo "<h3> $value </h3>";
      
    }
      echo "</div>";
}



?>