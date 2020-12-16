<?php

    function getNewDBConnection(){
        $servername = "localhost";
        $db_name = "minetetris";
        $db_username = getenv("DATABASE_USERNAME");
        $db_password = getenv("DATABASE_PASSWORD");

        try{
            $conn = new PDO("mysql:host=$servername;dbname=$db_name", $db_username, $db_password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }catch(PDOException $e){
            $message = "Connection failed: " . $e->getMessage();
            throw new Exception($message);
        }
    }