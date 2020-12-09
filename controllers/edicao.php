<?php

require_once 'services\post.php';
require_once '..\models\Jogador.php';
require_once 'db\dbConnection.php';
require_once '..\models\DAO\JogadorDAO.php';
require_once 'services\errors.php';

try{
    if(!isset($_POST['username']) || !isset($_POST['cpf']) || !isset($_POST['nome_completo']) || !isset($_POST['data_nascimento'])
    || !isset($_POST['telefone']) || !isset($_POST['email']) || !isset($_POST['senha'])){
        header("Location: sair.php");
    }
    fixPost();
    $jogador = new Jogador($_POST['username']);
    $jogador->setCpf($_POST['cpf']);
    $jogador->setNome($_POST['nome_completo']);
    $jogador->setDataNascimento($_POST['data_nascimento']);
    $jogador->setTelefone($_POST['telefone']);
    $jogador->setEmail($_POST['email']);
    $jogador->setSenha($_POST['senha']);
    JogadorDAO::update(getNewDBConnection(),$jogador);
    $lastPage = getLastPage();
    header("Location: ../views/pages/$lastPage");
}catch(Exception $e){
    returnErrorToLastPage($e->getMessage());
}