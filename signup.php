<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Sign Up Page</title>
</head>
<body>
    <div class="formContainer">
        <form method="post" action="login_action.php">
            <h2 class="title">
                Sign Up
            </h2>
            <div class="tip">
                Make your account here bro
            </div>
            <?php
            session_start();
            if(isset($_SESSION['error'])){
                echo "<div class='errorMsg'>{$_SESSION['error']}</div>";
                unset($_SESSION['error']);
            }
            if(isset($_SESSION['success'])){
                echo "<div class='successMsg'>{$_SESSION['success']}</div>";
                unset($_SESSION['success']);
            }
            ?>
            <label for="name">
                Name
            </label>
            <input type="name" name="Name">
            <label for="email">
                Email
            </label>
            <input type="email" name="Email">
            <label for="password">
                Password
            </label>
            <input type="password" name="password">
            <input type="submit" value="Sign Up">
        </form>
        <div class="link">
            Already have an account? <a href="login.php"> Login </a>
        </div>
    </div>
</body>
</html>