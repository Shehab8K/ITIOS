<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lab 2</title>
    <!--  Style -->
    <link rel="stylesheet" href="css/main.css" />
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </head>
  <body>

  <?php
        require_once('serverSide/config.php');
        require_once('serverSide/functions.php');        

        session_start();
        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
            if (!empty($_POST["name"])) {
                $_SESSION["name"] = $_POST["name"];
                save_to_users();
            }
        }

        // require_once('serverSide/config.php');
        // require_once('serverSide/functions.php');

        // if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
        //     $error = validation();
        //     if (empty($error)) {
        //         save_to_file();
        //         echo WELCOME_MESSAGE;
        //         foreach ($_POST as $key => $value) {
        //             if ($key != "submit") {
        //                 // echo `<Your {$key} is {$value}`;
        //                 echo "Your $key  is $value ";
        //                 echo "<br>";
        //             }
        //         }
        //         die();
        //     } else {
        //         echo "<h3 style='color: red;'>".$error."</h3>";
        //     }
        // }
?>
  <div class="container-fluid">
    <div class="row">
          <!-- Sign in Start -->
          <div class="offset-lg-2 col-lg-8 " id="login-part">  
            <div class="w-50 px-5  mx-auto form-container" id="makeMaxWidth">
                <form action="<?= $_SERVER['PHP_SELF']; ?>" method="POST">

                <div id="msgErr"></div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text loginIcon-style"><i class="fa fa-user fa-lg"></i></span>
                  </div>
                  <input type="text" class="form-control"  id="name" value="">
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text loginIcon-style"><i class="fa-solid fa-lock fa-lg" style="padding: 0.6em 0.2em;"></i></span>
                  </div>
                  <input type="password" class="form-control"  id="pass" value="">
                </div>
                <input id="submit" name="submit" type="submit" class="offset-lg-4 login-button"/>

                </form>
            </div>
          </div>
          <!-- End Sign in -->

        </div>
      </div>
    <!-- fontawesome us script -->
    <script src="https://kit.fontawesome.com/8ba67097ac.js" crossorigin="anonymous"></script>  
  </body>
</html>
