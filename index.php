<?php
    session_start();

    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['logout'])) {
        unset($_SESSION['current_user']);

        header('Location: login.php');
        exit;
    }

    if(!isset($_SESSION['current_user'])) {
        header('Location: login.php');
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <main>
        <h2>Welcome, <?php echo htmlspecialchars($_SESSION['current_user']['username']); ?>!</h2>

        <form action="index.php" method="POST">
            <button type="submit" name="logout" value="1">Logout</button>
        </form>
    </main>
</body>
</html>