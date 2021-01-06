<?php

final class Partida
{
    private $username;
    private $tempo;
    private $dificuldade;
    private $pontuacao;
    private $linhasEliminadas;

    public function __construct($username, $tempo, $dificuldade, $pontuacao, $linhasEliminadas)
    {
        $this->setUsernameFromJogador($username);
        $this->setTempo($tempo);
        $this->setDificuldade($dificuldade);
        $this->setPontuacao($pontuacao);
        $this->setLinhasEliminadas($linhasEliminadas);
    }

    private function setUsernameFromJogador($username)
    {
        $this->username = $username;
    }

    public function getUsername()
    {
        return $this->username;
    }

    private function setTempo($tempo)
    {
        $this->tempo = $tempo;
    }

    public function getTempo()
    {
        return $this->tempo;
    }

    private function setDificuldade($dificuldade)
    {
        $this->dificuldade = $dificuldade;
    }

    public function getDificuldade()
    {
        return $this->dificuldade;
    }

    private function setPontuacao($pontuacao)
    {
        $this->pontuacao = $pontuacao;
    }

    public function getPontuacao()
    {
        return $this->pontuacao;
    }

    private function setLinhasEliminadas($linhasEliminadas)
    {
        $this->linhasEliminadas = $linhasEliminadas;
    }

    public function getLinhasEliminadas()
    {
        return $this->linhasEliminadas;
    }
}
