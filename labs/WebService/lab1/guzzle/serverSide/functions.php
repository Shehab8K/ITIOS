<?php

function activ($id){
    $checkingWeather = new Weather(_API_URL,_API_key);
    return $checkingWeather->getWeatherData($id);
}


?>