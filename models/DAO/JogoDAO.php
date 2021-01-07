<?php

require_once 'DAO.php';

final class JogoDAO extends DAO
{

    private static function isJogoObj($jogo)
    {
        return is_object($jogo) && get_class($jogo) == "Jogo";
    }

    public static function select($conn, $jogo)
    {
        if (!self::isJogoObj($jogo)) {
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }
        return "Não implementado ainda";
    }


    public static function selectAllGamePlayerToRanking($conn, $username)
    {
        if (!parent::isConnObj($conn)) {
            throw new Exception("Parâmetro 'conn' não é um objeto da classe 'PDO'");
        }

        $sql = "SELECT pontuacao, dificuldade, tempo FROM jogo WHERE username='$username' ORDER BY pontuacao DESC, dificuldade DESC, tempo ASC";
        try {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $ret = [];
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($ret, $row);
            }
            echo json_encode($ret);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function insert($conn, $jogo)
    {

        if (!self::isJogoObj($jogo)) {
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }

        $username = $jogo->getUsername();
        $tempo = $jogo->getTempo();
        $dificuldade = $jogo->getDificuldade();
        $pontuacao = $jogo->getPontuacao();
        $linhasEliminadas = $jogo->getLinhasEliminadas();

        $sql = "INSERT INTO jogo (username, tempo, dificuldade, pontuacao, linhas_eliminadas) VALUES ('$username', '$tempo', '$dificuldade', '$pontuacao', '$linhasEliminadas')";
        $stmt = $conn->prepare($sql);

        try {
            $stmt->execute();
            return $stmt->rowCount();
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function update($conn, $jogo)
    {
        if (!self::isJogoObj($jogo)) {
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }
        return "Não implementado ainda";
    }

    public static function delete($conn, $jogo)
    {
        if (!self::isJogoObj($jogo)) {
            throw new Exception("Parâmetro 'jogo' não é um objeto da classe 'Jogo'");
        }
        return "Não implementado ainda";
    }
}
