<?php
	
	session_start();

	require_once('../controllers/db/dbConnection.php');

	$sql = "SELECT * FROM Jogador WHERE username='".$_POST['username']."' AND senha='".$_POST['senha']."'";
    $stmt = $conn->query($sql); 
    
    if ($stmt)
    {
        $count = 0;
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) 
        {
            $count++;
        }

        if ($count == 1)
        {
            $_SESSION['usuario'] = $_POST['username'];
            header("location:../views/pages/rt.php");
        }
        else
        {
            header("location:../views/pages/login.php?erro=usuario ou senha incorretos");
        }
    }       
?>