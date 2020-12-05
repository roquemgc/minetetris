<?php

    $servername = "localhost";
    $dbname = "minetetris";
    $username = "root";
    $password = "vertrigo";

    try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    }catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }