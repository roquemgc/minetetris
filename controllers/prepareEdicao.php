<?php

require_once '..\..\models\Jogador.php';
require_once '..\..\controllers\db\dbConnection.php';
require_once '..\..\models\DAO\JogadorDAO.php';

try{
    $jogador = new Jogador($_SESSION["usuario"]);
    $jogadorValues = JogadorDAO::select($conn,$jogador)[0];
    var_dump($jogadorValues);
}catch(Exception $e){
    var_dump($e->getMessage());
}