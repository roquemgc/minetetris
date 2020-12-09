<?php

    function getNewDBConnection(){
        $servername = "localhost";
        $dbname = "minetetris";
        $username = "root";
        $password = "vertrigo";
        try{
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }catch(PDOException $e){
            $message = "Connection failed: " . $e->getMessage();
            throw new Exception($message);
        }
    }