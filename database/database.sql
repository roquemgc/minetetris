CREATE DATABASE minetetris;

CREATE TABLE Jogador(
	username CHAR(20) NOT NULL,
	cpf CHAR(14) NOT NULL,
	nome CHAR(50) NOT NULL,
	data_nascimento DATE NOT NULL,
	telefone CHAR(50) NOT NULL,
	email CHAR(50) NOT NULL,
	senha CHAR(50) NOT NULL,
	PRIMARY KEY (username),
	UNIQUE (username, cpf)
);

CREATE TABLE Partida(
	id_partida INT NOT NULL AUTO_INCREMENT,
	username CHAR(20) NOT NULL,
	tempo TIME NOT NULL,
	dificuldade INT NOT NULL,
	pontuacao INT NOT NULL,
	linhas_eliminadas INT NOT NULL,
	PRIMARY KEY(id_partida),
	FOREIGN KEY (username) REFERENCES Jogador(username)
);