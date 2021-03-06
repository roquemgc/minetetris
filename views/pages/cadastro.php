<!DOCTYPE html>
<html lang="pt">

<head>
    <link href="../lib/img/favicon.ico" rel="icon" type="image/x-icon" />
    <link rel="stylesheet" href="../styles/template.css" />
    <link rel="stylesheet" href="../styles/form.css" />
    <meta charset="utf-8" />
    <title>MINETETRIS</title>
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
            <h2>Cadastro</h2>
            <form action="../../controllers/jogadorControllers/cadastro.php" method="POST">
                <div class="input-block">
                    <label for="nome_completo">Nome Completo</label>
                    <input type="text" id="nome_completo" placeholder="Insira seu nome completo" title="Nome Completo"
                        minlength="3">
                </div>

                <div class="input-block">
                    <label for="data_nascimento">Data de Nascimento</label>
                    <input type="date" id="data_nascimento" title="Data de nascimento" min="1900-01-01" max="2017-12-31">
                </div>

                <div class="input-block">
                    <label for="CPF">CPF</label>
                    <input type="text" id="CPF" placeholder="Insira seu CPF" title="CPF xxx.xxx.xxx-xx"
                        pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" maxlength="14">
                </div>

                <div class="input-block">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" placeholder="Insira seu telefone" title="Telefone (xx)xxxxx-xxxx"
                        pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" maxlength="14">
                </div>

                <div class="input-block">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Insira seu email" title="E-mail">
                </div>

                <div class="input-block">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Escolha um username" title="Username" minlength="3">
                </div>

                <div class="input-block">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Escolha uma senha" title="Senha" minlength="8">
                </div>

                <div class="input-block">
                    <label for="senha2">Confirme a senha</label>
                    <input type="password" id="senha2" placeholder="Confirme sua senha" title="Confirme a Senha"
                        minlength="8">
                </div>

                <div class="input-block">
                    <input id="btn_submit" type="submit" value="Cadastrar" />
                </div>
            </form>
        </section>
    </main>
</body>

</html>
