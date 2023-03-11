<?php

function getWeatherData($id)
{
    $url = _API_URL.$id._API_key;
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_URL,$url);
    $respones = curl_exec($ch);
    $data = json_decode($respones);
    return $data;
}
?>