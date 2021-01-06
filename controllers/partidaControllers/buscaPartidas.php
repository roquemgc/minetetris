<?php

require_once '..\services\post.php';
require_once '..\..\models\Jogo.php';
require_once '..\db\dbConnection.php';
require_once '..\..\models\DAO\JogoDAO.php';
require_once '..\services\errors.php';

session_start();


try {
    if (isset($_POST)) {
        fixPost();
        $username = $_SESSION["usuario"];
        $jogo = new Jogo($username, $_POST['tempo'], $_POST['dificuldade'], $_POST['pontuacao'], $_POST['linhas_eliminadas']);
        JogoDAO::insert(getNewDBConnection(), $jogo);
    }
} catch (Exception $e) {

    returnErrorToLastPage($e->getMessage());
}