<?php

require_once '..\services\post.php';
require_once '..\..\models\Partida.php';
require_once '..\db\dbConnection.php';
require_once '..\..\models\DAO\PartidaDAO.php';
require_once '..\services\errors.php';

session_start();


try {
    if (isset($_POST)) {
        fixPost();
        $username = $_SESSION["usuario"];
        $partida = new Partida($username, $_POST['tempo'], $_POST['dificuldade'], $_POST['pontuacao'], $_POST['linhas_eliminadas']);
        PartidaDAO::insert(getNewDBConnection(), $partida);
    }
} catch (Exception $e) {

    returnErrorToLastPage($e->getMessage());
}
