<?php

require_once 'DAO.php';

final class PartidaDAO extends DAO
{

    private static function isPartidaObj($partida)
    {
        return is_object($partida) && get_class($partida) == "partida";
    }

    public static function select($conn, $partida)
    {
        if (!self::isPartidaObj($partida)) {
            throw new Exception("Parâmetro 'partida' não é um objeto da classe 'partida'");
        }
        return "Não implementado ainda";
    }

    public static function selectAllByPontuation($conn)
    {
        $sql = "SELECT * FROM Partida;";
        $partidas = null;
        try {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $partidas = array();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($partidas, $row);
            }
            return $partidas;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function insert($conn, $partida)
    {
        if (!self::isPartidaObj($partida)) {
            throw new Exception("Parâmetro 'partida' não é um objeto da classe 'partida'");
        }

        $username = $partida->getUsername();
        $tempo = $partida->getTempo();
        $dificuldade = $partida->getDificuldade();
        $pontuacao = $partida->getPontuacao();
        $linhasEliminadas = $partida->getLinhasEliminadas();

        $sql = "INSERT INTO partida (username, tempo, dificuldade, pontuacao, linhas_eliminadas) VALUES ('$username', '$tempo', '$dificuldade', '$pontuacao', '$linhasEliminadas')";
        $stmt = $conn->prepare($sql);
        
        try {
            $stmt->execute();
            return $stmt->rowCount();
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function update($conn, $partida)
    {
        if (!self::isPartidaObj($partida)) {
            throw new Exception("Parâmetro 'partida' não é um objeto da classe 'Partida'");
        }
        return "Não implementado ainda";
    }

    public static function delete($conn, $partida)
    {
        if (!self::isPartidaObj($partida)) {
            throw new Exception("Parâmetro 'partida' não é um objeto da classe 'Partida'");
        }
        return "Não implementado ainda";
    }
}
