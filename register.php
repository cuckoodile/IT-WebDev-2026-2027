<?php
    session_start();

    if(isset($_SESSION['current_user'])) {
        header('Location: index.php');
        exit;
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';
        $cpassword = $_POST['cpassword'] ?? '';

        if(empty($username) || empty($password) || empty($cpassword)) {
            $_SESSION['error'] = "All fields are required!";
        }

        elseif($password != $cpassword) {
            $_SESSION['error'] = "Password and Confirm Password does not match!";
        }

        else {
            if(!isset($_SESSION['users']) || !is_array($_SESSION['users'])) {
                $_SESSION['users'] = [];
                }
                
            if(isset($_SESSION['users'][$username])) {
                $_SESSION['error'] = "Username already taken!";
            }
            else {
                $_SESSION['users'][$username] = [
                    'username' => $username,
                    'password' => $password
                ];

                $_SESSION['current_user'] = $_SESSION['users'][$username];
                unset($_SESSION['error']);

                header("Location: index.php");
                exit;
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

        <h2>Hello User!</h2>

        <form action="register.php" method="POST">
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                <button type="button" class="show-password-btn" data-target="password" onclick="toggleVisibility(this)">S</button>
            </div>

            <div>
                <label for="cpassword">Confirm Password</label>
                <input type="password" id="cpassword" name="cpassword" required>
                <button type="button" class="show-password-btn" data-target="cpassword" onclick="toggleVisibility(this)">S</button>
            </div>

            <div id="form-footer">
                <p>Don't have an account yet? <a href="register.php">Register</a></p>
                <button type="submit">Login</button>
            </div>
        </form>
    </main>

    <script>
    function toggleVisibility(btn) {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);

        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
            btn.innerText = 'X';
        } else {
            input.setAttribute('type', 'password');
            btn.innerText = 'S';
        }
    }
</script>
</body>
</html>