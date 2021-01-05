 <?php
	require_once '../../controllers/services/errors.php';

	session_start();

	if (!isset($_SESSION['usuario'])) {
		header("location:../../controllers/jogadorControllers/logout.php");
	}
	require_once "../../controllers/jogadorControllers/prepareEdicao.php";
	?>

 <!DOCTYPE html>
 <html lang="pt">

 <head>
 	<link href="../lib/img/favicon.ico" rel="icon" type="image/x-icon" />
 	<link rel="stylesheet" href="../styles/template.css" />
 	<link rel="stylesheet" href="../styles/form.css" />
 	<meta charset="utf-8" />
 	<title>MINETETRIS</title>
 </head>

 <body <?= getAlertForMessage(); ?>>

 	<header>
 		<figure>
 			<a href="rt.php">
 				<img src="../lib/img/minetetris.png" alt="Logo" />
 			</a>
 		</figure>
 	</header>

 	<main>

 		<section>
 			<h2>Editar dados</h2>
 			<form action="../../controllers/jogadorControllers/edicao.php" method="POST">
 				<div class="input-block">
 					<label for="nome_completo">Nome completo</label>
 					<input id="nome_completo" type="text" name="nome_completo" placeholder="Nome Completo" title="Nome Completo" minlength="3" required value="<?= $jogadorValues["nome"]; ?>" />
 				</div>

 				<div class="input-block">
 					<label for="data_nascimento">Data de nascimento</label>
 					<input id="data_nascimento" type="date" name="data_nascimento" title="Data de nascimento" min="1900-01-01" max="2017-12-31" required value="<?= $jogadorValues["data_nascimento"]; ?>" readonly />
 				</div>

 				<div class="input-block">
 					<label for="cpf">CPF</label>
 					<input id="cpf" type="text" name="cpf" placeholder="CPF" title="CPF: xxx.xxx.xxx-xx" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" maxlength="14" required value="<?= $jogadorValues["cpf"]; ?>" readonly />
 				</div>

 				<div class="input-block">
 					<label for="telefone">Telefone</label>
 					<input id="telefone" type="tel" name="telefone" placeholder="Telefone: (xx)xxxxx-xxxx" title="Telefone: (xx)xxxxx-xxxx" pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" maxlength="14" required value="<?= $jogadorValues["telefone"]; ?>" />
 				</div>

 				<div class="input-block">
 					<label for="email">Email</label>
 					<input id="email" type="email" name="email" placeholder="E-mail" title="E-mail" required value="<?= $jogadorValues["email"]; ?>" />
 				</div>

 				<div class="input-block">
 					<label for="username">Username</label>
 					<input id="username" type="text" name="username" placeholder="Username" title="Username" minlength="3" required value="<?= $jogadorValues["username"]; ?>" readonly />
 				</div>

 				<div class="input-block">
 					<label for="senha">Senha</label>
 					<input id="senha" type="password" name="senha" placeholder="Senha" title="Senha" minlength="8" required value="<?= $jogadorValues["senha"]; ?>" />
 				</div>

 				<div class="input-block">
 					<input type="submit" value="Salvar" />
 				</div>
 			</form>
 		</section>
 	</main>
 </body>

 </html>