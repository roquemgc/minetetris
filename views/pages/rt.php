<?php
require_once '../../controllers/services/errors.php';

session_start();

if (!isset($_SESSION['usuario'])) {
    header("location:../../controllers/jogadorControllers/logout.php");
}
?>

<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8" />
    <title>MINETETRIS - Rolling Tetris</title>

    <!-- Estilo para o modal -->
    <link rel="stylesheet" href="../styles/bootstrap.min.css" />

    <link rel="stylesheet" href="../styles/template.css" />
    <link rel="stylesheet" href="../styles/rt.css" />
    <link href="../lib/img/favicon.ico" rel="icon" type="image/x-icon" />

    <!-- Scripts para o modal -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>

</head>

<body onload="getLastAllGamePlayer()">
    <header>
        <figure>
            <a href="rt.php"><img src="../lib/img/minetetris.png" alt="Logo"></a>
        </figure>
        <figure id="logogame">
            <img src="../lib/img/rollingtetris.png" alt="Texto personalizado (Rolling Tetris)">
        </figure>
    </header>

    <main>
        <div id="start-container">
            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Escolha o tamanho do tabuleiro:</h4>
                        </div>
                        <div class="modal-body">
                            <button onclick="play('small')" type="button" data-dismiss="modal">10x20</button>
                            <button onclick="play('big')" type="button" data-dismiss="modal">22x44</button>
                        </div>
                        <div class="modal-footer">
                            <div class="checkbox pull-left checkbox-keys">
                                <label>
                                    <input id="toggle-reverse-keys" name="reverse-keys" type="checkbox" data-toggle="toggle">
                                    <span class="checkbox-title-keys">
                                        HABILITAR A INVERSÃO DAS TECLAS AO GIRAR O TABULEIRO.
                                    </span>
                                </label>
                            </div>
                            <button type="button" class="btn btn-default" data-dismiss="modal">CANCELAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="rolling-tetris">
            <img id="rt-background" src="../lib/img/stone_background.jpg" alt="background RollingTetris">
            <button id="start-btn" type="button" data-toggle="modal" data-target="#myModal">
                JOGAR
            </button>

            <canvas id="board" class="game-board"></canvas>
            <canvas id="next" class="next"></canvas>
        </div>
        <div id="control-container">
            <button id="pause-btn" onclick="pause()" class="play-button">PAUSAR</button>
            <span class="sound-item" id="sound-speaker"></span>
        </div>
    </main>

    <section id="ranking-player">
        <h2>RANKING DAS SUAS PARTIDAS</h2>
        <table id="tableRankingLastAllGameplayer">
            <thead>
                <tr>
                    <th><span class="negrito">#</span></th>
                    <th><span class="negrito">PONTOS</span></th>
                    <th><span class="negrito">NÍVEL</span></th>
                    <th><span class="negrito">TEMPO</span></th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr>
                    <td>01</td>
                    <td>758</td>
                    <td>1</td>
                    <td>10:38</td>
                </tr> -->
            </tbody>
        </table>
    </section>

    <section id="game-atual">
        <h2>JOGO ATUAL</h2>
        <p class="dado-do-jogo"><span class="negrito">TEMPO DA PARTIDA: </span><span class="dados-do-jogo" id="time">00:00</span></p>
        <p class="dado-do-jogo"><span class="negrito">PONTUAÇÃO: </span><span class="dados-do-jogo" id="score">0</span></p>
        <p class="dado-do-jogo"><span class="negrito">LINHAS ELIMIMINADAS: </span><span class="dados-do-jogo" id="lines">0</span></p>
        <p class="dado-do-jogo"><span class="negrito">NÍVEL DE DIFICULDADE: </span><span class="dados-do-jogo" id="level">1</span></p>
    </section>

    <section id="menu">
        <h2>MENU</h2>
        <nav>
            <p class="menu-item"><a href="ranking.php"><span class="negrito">RANKING GLOBAL</span></a></p>
            <p class="menu-item"><a href="edicao.php"><span class="negrito">EDITAR DADOS PESSOAIS</span></a></p>
            <p class="menu-item"><a href="../../controllers/jogadorControllers/logout.php"><span class="negrito">SAIR</span></a></p>
        </nav>
    </section>

    <!-- Scripts para o tabuleiro do jogo -->
    <script type="text/javascript" src="../js/constants.js"></script>
    <script type="text/javascript" src="../js/board.js"></script>
    <script type="text/javascript" src="../js/piece.js"></script>
    <script type="text/javascript" src="../js/sound.js"></script>
    <script type="text/javascript" src="../js/main.js"></script>
</body>

</html>