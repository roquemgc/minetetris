<?php

require_once '..\models\Jodador.php';
require_once 'services\errors.php';

try{
    $jogador = new Jogador('1',$_POST['cpf'],$_POST['nome_completo'],$_POST['data_nascimento'],$_POST['telefone'],$_POST['email'],$_POST['senha']);
}catch(Exception $e){
    returnErrorToLastPage($e->getMessage());
}