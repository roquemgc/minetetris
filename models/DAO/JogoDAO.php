<?php

require_once 'DAO.php';

final class JogoDAO extends DAO{

    private static function isJogoObj($jogo){
        return is_object($jogo) && get_class($jogo) == "Jogo";
    }

    public static function select($jogo){
        if(!self::isJogoObj($jogo)){
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }
        return "Não implementado ainda";
    }

    public static function insert($jogo){
        if(!self::isJogoObj($jogo)){
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }
        return "Não implementado ainda";
    }

    public static function update($jogo){
        if(!self::isJogoObj($jogo)){
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }
        return "Não implementado ainda";
    }

    public static function delete($jogo){
        if(!self::isJogoObj($jogo)){
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }
        return "Não implementado ainda";
    }

}