<?php

$base_dados = 'minetetris';
$usuario_bd = 'root'; // Mudar de acordo com o nome de usuário do seu banco de dados.
$senha_bd   = 'vertrigo'; // Mudar de acordo com a senha do seu banco de dados.
$host_db    = 'localhost';

$link = new mysqli($host_db, $usuario_bd, $senha_bd, '');
$link->set_charset('utf8');

if ($link) {
	echo "Conexão OK";
} else {

	die('Connect Error(' . mysqli_connect_errno() . ')' . mysqli_connect_error());
}

$query_create_schema = "CREATE SCHEMA IF NOT EXISTS $base_dados" or die("Error in the consult .. " . $link->connection_error);
$result_create_schema = $link->query($query_create_schema);

if ($link->query($query_create_schema) === TRUE) {
	echo "<p> Banco de Dados CRIADO. </p>";
} else {
	echo "<p> Banco de Dados NÃO criado. </p>";
}

mysqli_select_db($link, $base_dados);

$query_create_table = "CREATE TABLE IF NOT EXISTS Jogador(
	username CHAR(20) NOT NULL,
	cpf CHAR(14) NOT NULL,
	nome CHAR(50) NOT NULL,
	data_nascimento DATE NOT NULL,
	telefone CHAR(50) NOT NULL,
	email CHAR(50) NOT NULL,
	senha CHAR(50) NOT NULL,
	PRIMARY KEY (username),
	UNIQUE (username, cpf))" or die("Error in the create table ..." . $link->connect_error);

$result_create_table = $link->query($query_create_table);

$query_create_table2 = "CREATE TABLE IF NOT EXISTS Jogo(
	id_jogo INT NOT NULL AUTO_INCREMENT,
	username CHAR(20) NOT NULL,
	tempo TIME NOT NULL,
	dificuldade INT NOT NULL,
	pontuacao INT NOT NULL,
	linhas_eliminadas INT NOT NULL,
	PRIMARY KEY(id_jogo),
	FOREIGN KEY (username) REFERENCES Jogador(username)
)" or die("Error in the create table ..." . $link->connect_error);

$result_create_table2 = $link->query($query_create_table2);

if ($link->query($query_create_table) == TRUE && $link->query($query_create_table2) == TRUE) {

	echo "<p> TABELAS CRIADAS. </p>";

} else {

	echo "<p> TABELAS NÃO CRIADAS. </p>";
}
