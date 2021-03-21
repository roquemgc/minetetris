# Minetetris

# Configuração para desenvolvimento
Para configuração do ambiente de desenvolvimento, deve ser criado o banco de dados SQL. O script para ser executado está em controllers/database/database.sql.

Também é necessário ajustar o nome de usuário e senha do seu banco de dados, isso deve ser feito nas variaveis de ambiente do programa, em environment.php.

# Fluxo de execução
Ao acessar o sistema, o usuário enxergará a tela de Login (views/login.html). Caso já possua conta, ele digitará seus dados cadastrados no sistema e será redirecionado ao Rolling Tetris (views/rt.html). 

Caso ele não tenha uma conta no MineTetris, ele deverá clicar em "Criar Conta" e será redirecionado à tela de cadastro (views/cadastro.html). Onde suas informações pessoais serão preenchidas e enviadas, sendo levado à página do Rolling Tetris.

Na página principal, a do tabuleiro do jogo, ele pode clicar para editar suas informações pessoais (views/edicao.html) ou ver o ranking (views/ranking.html) de sua pontuação e da pontuação global do jogo. Ao fim de cada partida, o usuário pode escolher se deseja ou não iniciar um novo jogo.

# Ferramentas
HTML5, CSS3 e JavaScript para criação e tratamento de interfaces.

PHP7 para manipulação e persistência de dados.

Para criação de um modal na tela de jogo (rt.php), foram usados:

Bootstrap(3.4.1): https://getbootstrap.com/docs/3.4/.

jQuery: https://jquery.com/download/.

Playlist do YouTube: https://youtube.com/playlist?list=PLuJ_GHZ03Z9fgpKMrLrQZ80koP_PZ10Z4
