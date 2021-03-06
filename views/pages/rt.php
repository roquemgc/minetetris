<?php
    session_start();

    if(!isset($_SESSION['usuario']))
    {
        header("location:../../controllers/jogadorController/logout.php");
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

    <script src="../js/models/Peca.js"></script>
    <script src="../js/game.js"></script>
    <script src="../js/manterTabuleiro.js"></script>
    <script src="../js/printadorPeca.js"></script>
    <script src="../js/colisaoPeca.js"></script>
    <script src="../js/manterPeca.js"></script>
</head>

<body>
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
                            <button onclick="startGame(10,20)" data-dismiss="modal">10x20</button>
                            <button onclick="startGame(22,44)" data-dismiss="modal">22x44</button>
                        </div>
                        <div class="modal-footer">
                            <div class="checkbox pull-left checkbox-keys">
                                <label>
                                    <input id="toggleInput" name="reverse-keys" type="checkbox" data-toggle="toggle">
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
            <img id="rt-background" src="../lib/img/image.jpg" alt="background RollingTetris">
            <button id="comecar-game" type="button" class="btn btn-info btn-lg" data-toggle="modal"
                data-target="#myModal">
                JOGAR
            </button>
        </div>
    </main>

    <section id="ranking-player">
        <h2>RANKING DAS SUAS PARTIDAS</h2>
        <table>
            <thead>
                <tr>
                    <th><span class="negrito">#</span></th>
                    <th><span class="negrito">NOME</span></th>
                    <th><span class="negrito">PONTOS</span></th>
                    <th><span class="negrito">NÍVEL</span></th>
                    <th><span class="negrito">TEMPO</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Alkz</td>
                    <td>758</td>
                    <td>1</td>
                    <td>10:38</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section id="game-atual">
        <h2>JOGO ATUAL</h2>
        <p class="dado-do-jogo"><span class="negrito">TEMPO DA PARTIDA: </span><span class="dados-do-jogo"
                id="tempo-partida">00:00</span></p>
        <p class="dado-do-jogo"><span class="negrito">NÍVEL DE DIFICULDADE: </span><span class="dados-do-jogo"
                id="nivel-dificuldade">1</span></p>
        <p class="dado-do-jogo"><span class="negrito">PONTUAÇÃO: </span><span class="dados-do-jogo"
                id="pontuacao">0</span></p>
        <p class="dado-do-jogo"><span class="negrito">LINHAS ELIMIMINADAS: </span><span class="dados-do-jogo"
                id="linhas-eliminadas">0</span></p>
    </section>

    <section id="menu">
        <h2>MENU</h2>
        <nav>
            <p class="menu-item"><a href="ranking.php"><span class="negrito">RANKING GLOBAL</span></a></p>
            <p class="menu-item"><a href="edicao.php"><span class="negrito">EDITAR DADOS PESSOAIS</span></a></p>
            <p class="menu-item"><a href="../../controllers/jogadorControllers/logout.php"><span class="negrito">SAIR</span></a></p>
        </nav>
    </section>
</body>

</html>
