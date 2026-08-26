<?php
    session_start();

    if(isset($_SESSION['current_user'])) {
        header('Location: index.php');
        exit;
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';

        if(empty($username) || empty($password)) {
            $_SESSION['error'] = "All fields are required!";
        }
        else {
            $found = false;

            if(isset($_SESSION['users']) && is_array($_SESSION['users'])) {
                foreach($_SESSION['users'] as $key => $value) {
                    if($username === $value['username'] && $password === $value['password']) {
                        $_SESSION['current_user'] = $value;
                        $found = true;
                        break;
                    }
                }
            }

            if($found) {
                unset($_SESSION['error']);
                header("Location: index.php");
                exit;
            } else {
                $_SESSION['error'] = "Invalid username or password!";
            }
        }

        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
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
        <?php
            if(isset($_SESSION['error'])) {
                echo "<section><p>" . htmlspecialchars($_SESSION['error']) . "</p></section>";
                unset($_SESSION['error']);
            }
        ?>

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