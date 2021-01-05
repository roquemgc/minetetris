<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("location:../../controllers/jogadorControllers/logout.php");
}
?>

<!DOCTYPE html>
<html lang="pt">

<head>
    <link href="../lib/img/favicon.ico" rel="icon" type="image/x-icon" />
    <link rel="stylesheet" href="../styles/template.css" />
    <link rel="stylesheet" href="../styles/ranking.css" />
    <meta charset="utf-8" />
    <title>MINETETRIS</title>
</head>

<body>
    <header>
        <figure>
            <a href="rt.php">
                <img src="../lib/img/minetetris.png" alt="Logo" />
            </a>
        </figure>
    </header>
    <main>
        <section>
            <h2>Ranking global</h2>
            <div id="ranking-list">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Pontos</th>
                            <th>Nível</th>
                            <th>Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Roque</td>
                            <td>665</td>
                            <td>37</td>
                            <td>26:52</td>
                        </tr>
                        <tr>
                            <td>Roque</td>
                            <td>550</td>
                            <td>34</td>
                            <td>25:51</td>
                        </tr>
                        <tr>
                            <td>Mateus</td>
                            <td>432</td>
                            <td>33</td>
                            <td>23:38</td>
                        </tr>
                        <tr>
                            <td>Shigi</td>
                            <td>287</td>
                            <td>25</td>
                            <td>19:42</td>
                        </tr>
                        <tr>
                            <td>Lucas</td>
                            <td>256</td>
                            <td>25</td>
                            <td>18:02</td>
                        </tr>
                        <tr>
                            <td>Jão</td>
                            <td>30</td>
                            <td>2</td>
                            <td>00:31</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</body>

</html>