<?php

require_once '..\services\post.php';
require_once '..\..\models\Jogo.php';
require_once '..\db\dbConnection.php';
require_once '..\..\models\DAO\JogoDAO.php';
require_once '..\services\errors.php';
require_once '..\..\models\Jogador.php';
require_once '..\..\models\DAO\JogadorDAO.php';

session_start();


try {
    if (isset($_POST)) {
        fixPost();
        $username = $_SESSION["usuario"];
        $jogo = new Jogo($username, $_POST['tempo'], $_POST['dificuldade'], $_POST['pontuacao'], $_POST['linhas_eliminadas']);
        JogoDAO::insert(getNewDBConnection(), $jogo);
        returnSuccessToPage("Dados salvos com sucesso", "rt.php");
    }
} catch (Exception $e) {

    returnErrorToLastPage($e->getMessage());
}
