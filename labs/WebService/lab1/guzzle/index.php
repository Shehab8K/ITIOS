<html>

<head>
    <title> Weather app </title>
</head>

<body>
    <h3> Contact Form </h3>
    <div id="after_submit">

        <?php
        require_once("vendor/autoload.php");

        $file = file_get_contents(_CITIES_FILE_);

        $citiesArr = json_decode($file,true);

        $egypt = array_filter($citiesArr,function($city){
                if ($city["country"] === "EG")
                {
                    return $city;
                }
        });


        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
            $weatherResult = activ($_POST["city"]);

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