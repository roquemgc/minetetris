<?php

final class Jogador{

    private $username;
    private $cpf;
    private $nome;
    private $dataNascimento;
    private $telefone;
    private $email;
    private $senha;

    public function __construct($username,$cpf,$nome,$dataNascimento,$telefone,$email,$senha){
        $this->setUsername($username);
        $this->setCpf($cpf);
        $this->setNome($nome);
        $this->setDataNascimento($dataNascimento);
        $this->setTelefone($telefone);
        $this->setEmail($email);
        $this->setSenha($senha);
    }

    private function setUsername($username){
        if(strlen($username) < 3){
            throw new Exception("Username : '".$username."' inválido");
        }
        $this->username = $username;
    }

    public function getUsername(){
        return $this->username;
    }

    private function setCpf($cpf){
        if(preg_match("/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/",$cpf) == 0){
            throw new Exception("CPF : '".$cpf."' inválido");
        }
        $this->cpf = $cpf;
    }

    public function getCpf(){
        return $this->cpf;
    }

    private function setNome($nome){
        if(strlen($nome) < 3){
            throw new Exception("Nome : '".$nome."' inválido");
        }
        $this->nome = $nome;
    }

    public function getNome(){
        return $this->nome;
    }

    private function setDataNascimento($dataNascimento){
        if(preg_match("/[1900-2017]-[01-12]{2}-[01-31]{2}/",$dataNascimento) == 0){
            throw new Exception("Data de nascimento : '".$dataNascimento."' inválida");
        }
        $this->dataNascimento = $dataNascimento;
    }

    public function getDataNascimento(){
        return $this->dataNascimento;
    }

    private function setTelefone($telefone){
        if(preg_match("/\([0-9]{2}\)[0-9]{5}-[0-9]{4}/",$telefone) == 0){
            throw new Exception("Telefone : '".$telefone."' inválido");
        }
        $this->telefone = $telefone;
    }

    public function getTelefone(){
        return $this->telefone;
    }

    private function setEmail($email){
        if(!strpos($email,"@") || !strpos($email,".com")){
            throw new Exception("Email : '".$email."' inválido");
        }
        $this->email = $email;
    }

    public function getEmail(){
        return $this->email;
    }

    private function setSenha($senha){
        if(strlen($senha) < 8){
            throw new Exception("Senha : '".$email."' inválida");
        }
        $this->senha = $senha;
    }

    public function getSenha(){
        return $this->senha;
    }

}