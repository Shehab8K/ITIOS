<html>

<head>
    <title> Weather app </title>
</head>

<body>
    <h3> Contact Form </h3>
    <div id="after_submit">

        <?php
        require_once('serverSide/config.php');
        require_once('serverSide/functions.php');

        $file = file_get_contents(_CITIES_FILE_);

        $citiesArr = json_decode($file,true);
        // print_r($citiesArr);
        $egypt = array_filter($citiesArr,function($city){
                if ($city["country"] === "EG")
                {
                    return $city;
                }
                // var_dump($city);
        });
        // print_r($egypt[666]["name"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
            $weatherResult = getWeatherData($_POST["city"]);
            // $weather= $weatherResult->weather->main;
            // $weather= json_decode($weather);
            if(!empty($weatherResult))
            {
                echo date("l  h:i A") . "<br>";
                echo date("jS F\, Y ") . "<br><hr>";
                echo "Status : ". $weatherResult->weather[0]->description ."</br><hr>";
                echo "Min degree : ".$weatherResult->main->temp_min ."</br><hr>";
                echo "Max degree : ".$weatherResult->main->temp_max ."</br><hr>";
                echo "Humidity : ".$weatherResult->main->humidity ."</br><hr>";
                echo "Wind  : ".$weatherResult->wind->speed ."</br><hr></br>";
            }
            else{
                echo "Error couldn't get data for this city, try again later! </br>";
            }

        }
        ?>

    </div>
    <form id="contact_form" action="<?= $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">

    <label for="cities">Choose a city:</label>

        <select name="city" id="cities">
            <?php 
                foreach($egypt as $city)
                {
                   echo "<option value=".$city["id"].">".$city["name"]."</option>";
                }
            ?>
        </select>

     <input id="submit" name="submit" type="submit" value="submit" />
    </form>
</body>

</html>