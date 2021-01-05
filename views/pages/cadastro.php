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
                    <input type="text" name="nome_completo" id="nome_completo" placeholder="Insira seu nome completo" title="Nome Completo"
                        minlength="3" required />
                </div>

                <div class="input-block">
                    <label for="data_nascimento">Data de Nascimento</label>
                    <input type="date" name="data_nascimento" id="data_nascimento" title="Data de nascimento" min="1900-01-01" max="2017-12-31" required />
                </div>

                <div class="input-block">
                    <label for="CPF">CPF</label>
                    <input type="text" name="cpf" id="CPF" placeholder="Insira seu CPF" title="CPF xxx.xxx.xxx-xx"
                        pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" maxlength="14" required />
                </div>

                <div class="input-block">
                    <label for="telefone">Telefone</label>
                    <input type="tel" name="telefone" id="telefone" placeholder="Insira seu telefone" title="Telefone (xx)xxxxx-xxxx"
                        pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" maxlength="14" required />
                </div>

                <div class="input-block">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Insira seu email" title="E-mail" required />
                </div>

                <div class="input-block">
                <label for="username">Username</label>
                    <input name="username" id="username" type="text" placeholder="Insira seu username" title="Username" minlength="3" required />
                </div>

                <div class="input-block">
                    <label for="senha">Senha</label>
                    <input name="senha" id="senha" type="password" placeholder="Insira sua senha" title="Senha" minlength="8" required />
                </div>

                <div class="input-block">
                    <label for="senha2">Confirme a senha</label>
                    <input type="password" name="senha2" id="senha2" placeholder="Confirme sua senha" title="Confirme a Senha"
                        minlength="8" required/>
                </div>

                <div class="input-block">
                    <input id="btn_submit" type="submit" value="Cadastrar" />
                </div>
            </form>
        </section>
    </main>
</body>

</html>
