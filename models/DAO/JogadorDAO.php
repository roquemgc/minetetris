<?php

require_once 'DAO.php';

final class JogadorDAO extends DAO
{

    private static function isJogadorObj($jogador)
    {
        return is_object($jogador) && get_class($jogador) == "Jogador";
    }

    private static function verifyParameters($conn, $jogador)
    {
        if (!parent::isConnObj($conn)) {
            throw new Exception("Parâmetro 'conn' não é um objeto da classe 'PDO'");
        }
        if (!self::isJogadorObj($jogador)) {
            throw new Exception("Parâmetro 'jogador' não é um objeto da classe 'Jogador'");
        }
    }

    public static function select($conn, $jogador)
    {
        self::verifyParameters($conn, $jogador);
        $username = $jogador->getUsername();
        $sql = "SELECT * FROM Jogador WHERE username='$username';";
        $ret = null;
        try {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $ret = array();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($ret, $row);
            }
            return $ret;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function selectAll($conn)
    {
        if (!parent::isConnObj($conn)) {
            throw new Exception("Parâmetro 'conn' não é um objeto da classe 'PDO'");
        }
        $sql = "SELECT * FROM Jogador;";
        $ret = null;
        try {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $ret = array();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($ret, $row);
            }
            return $ret;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function insert($conn, $jogador)
    {
        self::verifyParameters($conn, $jogador);
        $username = $jogador->getUsername();
        $cpf = $jogador->getCpf();
        $nome = $jogador->getNome();
        $data_nascimento = $jogador->getDataNascimento();
        $telefone = $jogador->getTelefone();
        $email = $jogador->getEmail();
        $senha = $jogador->getSenha();

        $sql = "INSERT INTO jogador (username, cpf, nome, data_nascimento, telefone, email, senha) VALUES ('$username', '$cpf', '$nome', '$data_nascimento', '$telefone', '$email', '$senha')";

        $stmt = $conn->prepare($sql);
        try {
            $stmt->execute();
            return $stmt->rowCount();
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function update($conn, $jogador)
    {
        self::verifyParameters($conn, $jogador);
        $username = $jogador->getUsername();
        $nome = $jogador->getNome();
        $email = $jogador->getEmail();
        $senha = $jogador->getSenha();
        $sql = "UPDATE jogador SET nome='$nome', email='$email', senha='$senha' WHERE username='$username';";
        $stmt = $conn->prepare($sql);
        $ret = null;
        try {
            $stmt->execute();
            return $stmt->rowCount();
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public static function delete($conn, $jogador)
    {
        self::verifyParameters($conn, $jogador);
        throw new Exception("'delete()' não implementado ainda");
    }
}
