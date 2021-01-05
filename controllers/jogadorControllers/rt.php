<?php

// include_once('../db/dbConnection.php');

// if (isset($_POST)) {

//     var_dump('aaa');
//     //$tempo = $_POST['palavra'];
//     // $tempo = $_POST['tempo'];
//     // $dificuldade= $_POST['dificuldade'];
//     // $pontuacao =$_POST['pontuacao'];
//     // $linhasEliminadas = $_POST['linhas_eliminadas'];

//     $sql = "INSERT INTO jogo (username, tempo, dificuldade, pontuacao, linhas_eliminadas) VALUES ('teste', 'aaaa', 1, 2, 6)";
//     $mysqli = mysqli_query(getNewDBConnection(), $sql);  
// }

require_once '../services/post.php';
require_once '../../models/Jogo.php';
require_once '../db/dbConnection.php';
require_once '../../models/DAO/JogoDAO.php';
require_once '../services/errors.php';
session_start();

try{
    // if(!isset($_POST['username']) || !isset($_POST['cpf']) || !isset($_POST['nome_completo']) || !isset($_POST['data_nascimento'])
    // || !isset($_POST['telefone']) || !isset($_POST['email']) || !isset($_POST['senha'])){
    //     header("Location: logout.php");
    // }
    if (isset($_POST)) {
        fixPost();
        $jogo = new Jogo( $_SESSION['id'],'TESTE',$_POST['tempo'],$_POST['dificuldade'], $_POST['pontuacao'],$_POST['linhas_eliminadas']);
        JogoDAO::insert(getNewDBConnection(),$jogo);
        returnSuccessToPage("Atualização feita com sucesso","rt.php");
    }
}catch(Exception $e){

    returnErrorToLastPage($e->getMessage());

}

