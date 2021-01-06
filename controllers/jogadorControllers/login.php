<?php

session_start();

require_once '../db/dbConnection.php';
require_once '../services/post.php';
require_once '../services/errors.php';
require_once '../../models/Jogador.php';
require_once '../../models/DAO/JogadorDAO.php';

try {

    if (!isset($_POST['username']) || !isset($_POST['senha'])) {
        header("Location: logout.php");
    }
    fixPost();

    $jogador = new Jogador($_POST['username']);
    $jogador->setSenha($_POST['senha']);

    $select = JogadorDAO::select(getNewDBConnection(), $jogador);
    if (sizeof($select) == 1 && $select[0]["senha"] == $_POST['senha']) {
        $_SESSION['usuario'] = $_POST['username'];
        header("Location: ../../views/pages/rt.php");
    } else {
        throw new Exception("usuario ou senha incorretos");
    }
} catch (Exception $e) {
    returnErrorToLastPage($e->getMessage());
}
