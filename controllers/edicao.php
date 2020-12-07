<?php

require_once '..\models\Jodador.php';

try{
    $jogador = new Jogador($_POST['username'],$_POST['cpf'],$_POST['nome_completo'],$_POST['data_nascimento'],$_POST['telefone'],$_POST['email'],$_POST['senha']);
    var_dump($_POST['data_nascimento']);
}catch(Exception $e){
    echo 'Erro : ' . $e->getMessage();
}