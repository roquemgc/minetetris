<?php

require_once 'DAO.php';

final class JogadorDAO extends DAO{

    private static function isJogadorObj($jogador){
        return is_object($jogador) && get_class($jogador) == "Jogador";
    }

    private static function verifyParameters($conn,$jogador){
        if(!parent::isConnObj($conn)){
            throw new Exception("Parâmetro 'conn' não é um objeto da classe 'PDO'");
        }
        if(!self::isJogadorObj($jogador)){
            throw new Exception("Parâmetro 'jogador' não é um objeto da classe 'Jogador'");
        }
    }

    public static function select($conn,$jogador){
        self::verifyParameters($conn,$jogador);
        $username = $jogador->getUsername();
        $sql = "SELECT * FROM jogador WHERE username='$username';";
        $ret = null;
        try{
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $ret = array();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($ret,$row);
            }
        }catch(Exception $e){
            $ret = $e->getMessage();
        }
        return $ret;
    }

    public static function insert($conn,$jogador){
        self::verifyParameters($conn,$jogador);
        return "Não implementado ainda";
    }

    public static function update($conn,$jogador){
        self::verifyParameters($conn,$jogador);
        $username = $jogador->getUsername();
        $nome = $jogador->getNome();
        $email = $jogador->getEmail();
        $senha = $jogador->getSenha();
        $sql = "UPDATE jogador SET nome='$nome', email='$email', senha='$senha' WHERE username='$username';";
        $stmt = $conn->prepare($sql);
        $ret = null;
        try{
            $stmt->execute();
            $ret = $stmt->rowCount();
        }catch(Exception $e){
            $ret = $e->getMessage();
        }
        return $ret;
    }

    public static function delete($conn,$jogador){
        self::verifyParameters($conn,$jogador);
        return "Não implementado ainda";
    }

}