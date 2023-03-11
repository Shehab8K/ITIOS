<html>

<head>
    <title> contact form </title>
</head>

<body>
    <h3> Contact Form </h3>
    <div id="after_submit">
        <?php
        require_once('serverSide/config.php');
        require_once('serverSide/functions.php');

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
            $error = validation();
            if (empty($error)) {
                save_to_file();
                echo WELCOME_MESSAGE;
                foreach ($_POST as $key => $value) {
                    if ($key != "submit") {
                        // echo `<Your {$key} is {$value}`;
                        echo "Your $key  is $value ";
                        echo "<br>";
                    }
                }
                die();
            } else {
                echo "<h3 style='color: red;'>".$error."</h3>";
            }
        }
        ?>
    </div>
    <form id="contact_form" action="<?= $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">

        <div class="row">
            <label class="required" for="name">Your name:</label><br />
            <input id="name" class="input" name="Name" type="text" value="<?= remember_variable("Name") ?>"
                size="30" /><br />

        </div>
        <div class="row">
            <label class="required" for="email">Your email:</label><br />
            <input id="email" class="input" name="Email" type="text" value="<?= remember_variable("Email") ?>"
                size="30" /><br />

        </div>
        <div class="row">
            <label class="required" for="message">Your message:</label><br />
            <textarea id="message" class="input" name="Message" value="" e rows="7"
                cols="30"><?= remember_variable("Message") ?></textarea><br />

        </div>

        <input id="submit" name="submit" type="submit" value="Send email" />
        <input id="clear" name="clear" type="reset" value="clear form" />

    </form>
</body>

</html>