<?php

final class Jogo{

    private $idJogo;
    private $username;
    private $tempo;
    private $dificuldade;
    private $pontuacao;
    private $linhasEliminadas;

    public function __construct($idJogo,$jogador,$tempo,$dificuldade,$pontuacao,$linhasEliminadas){
        $this->setIdJogo($idJogo);
        $this->setUsernameFromJogador($jogador);
        $this->setTempo($tempo);
        $this->setDificuldade($dificuldade);
        $this->setPontuacao($pontuacao);
        $this->setLinhasEliminadas($linhasEliminadas);
    }

    private function setIdJogo($idJogo){
        $this->idJogo = $idJogo;
    }

    public function getIdJogo(){
        return $this->idJogo;
    }

    private function setUsernameFromJogador($jogador){
        if(!is_object($jogador) || !get_class($jogador) == "Jogador"){
            throw new Exception("Parâmetro 'jogador' não é um objeto da classe 'Jogador'");
        }
        $this->username = $jogador->getUsername();
    }

    public function getUsername(){
        return $this->username;
    }

    private function setTempo($tempo){
        $this->tempo = $tempo;
    }

    public function getTempo(){
        return $this->tempo;
    }

    private function setDificuldade($dificuldade){
        $this->dificuldade = $dificuldade;
    }

    public function getDificuldade(){
        return $this->dificuldade;
    }

    private function setPontuacao($pontuacao){
        $this->pontuacao = $pontuacao;
    }

    public function getPontuacao(){
        return $this->pontuacao;
    }

    private function setLinhasEliminadas($linhasEliminadas){
        $this->linhasEliminadas = $linhasEliminadas;
    }

    public function getLinhasEliminadas(){
        return $this->linhasEliminadas;
    }

}