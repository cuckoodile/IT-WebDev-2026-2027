<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';


    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <main>
        <h2>Welcome Back User!</h2>

        <form action="login.php" method="POST">
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" name="username">
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <button type="button" id="show-password-btn">S</button>
            </div>

            <div id="form-footer">
                <p>Don't have an account yet? <a href="register.php">Register</a></p>
                <button type="submit">Login</button>
            </div>
        </form>
    </main>

    <script>
        const passwordBtn = document.getElementById("show-password-btn")
        const passwordInp = document.getElementById("password")

        passwordBtn.addEventListener('click', (e) => {
            if(passwordInp.getAttribute('type') == 'password') {
            passwordInp.setAttribute('type', 'text')
            passwordBtn.innerText = 'X'
        } else {
            passwordInp.setAttribute('type', 'password')
            passwordBtn.innerText = 'S'
            }
        })
    </script>
</body>
</html>