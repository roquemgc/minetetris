<!DOCTYPE html>
<html lang="pt">

<head>
    <link href="../lib/img/favicon.ico" rel="icon" type="image/x-icon" />
    <!--icone da pagina-->

    <!--Importando as folhas de estilo-->
    <link rel="stylesheet" href="../styles/template.css" />
    <link rel="stylesheet" href="../styles/form.css" />

    <!--definindo que o navegador deve usar esse metodo para converter os caracteres digitados em codigo de maquina-->
    <meta charset="utf-8" />
    <title>MINETETRIS</title>
    <!--título da página-->
</head>

<body>

    <header>
        <figure>
            <a href="login.php">
                <img src="../lib/img/minetetris.png" alt="Logo" />
            </a>
        </figure>
    </header>

    <main>

        <section>
            <h2>Login</h2>
            <form action="../../controllers/syslogin.php" method="POST">
                <div class="input-block">
                    <label for="username">Username</label>
                    <input id="username" type="text" name="username" placeholder="Insira seu username" title="Username" minlength="3" required />
                </div>
                <div class="input-block">
                    <label for="senha">Senha</label>
                    <input id="senha" type="password" name="senha" placeholder="Insira sua senha" title="Senha" minlength="8" required />
                </div>
                <div class="input-block">
                    <input type="submit" value="login" id="login" name="login"/>
                </div>
                <div class="link-wrapper">
                    <p>Não está cadastrado?</p>
                    <a href="cadastro.php" >Criar Nova Conta</a>
                </div>
            </form>
        </section>

    </main>

</body>

</html>
