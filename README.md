# Minetetris

# Configuração para desenvolvimento
Para configuração do ambiente de desenvolvimento, deve ser criado o banco de dados SQL. O script para ser executado está em controllers/database/database.sql.

Também é necessário ajustar o nome de usuário e senha do seu banco de dados, isso deve ser feito nas variaveis de ambiente do programa, em environment.php.

Ao acessar o sistema, o usuário enxergará a tela de Login (views/login.html). Caso já possua conta, ele digitará seus dados cadastrados no sistema e será redirecionado ao Rolling Tetris (views/rt.html). 

Caso ele não tenha uma conta no MineTetris, ele deverá clicar em "Criar Conta" e será redirecionado à tela de cadastro (views/cadastro.html). Onde suas informações pessoais serão preenchidas e enviadas, sendo levado à página do Rolling Tetris.

Na página principal, a do tabuleiro do jogo, ele pode clicar para editar suas informações pessoais (views/edicao.html) ou ver o ranking (views/ranking.html) de sua pontuação e da pontuação global do jogo. Ao fim de cada partida, o usuário pode escolher se deseja ou não iniciar um novo jogo.

O framework Bootstrap(3.4.1) foi utilizado na construção de um modal da página rt.html: https://getbootstrap.com/docs/3.4/.
Juntamente com a biblioteca jQuery: https://jquery.com/download/.

Playlist do YouTube: https://www.youtube.com/playlist?list=PLS6bmmMSWLXsb0oThZ0haVUJ-JOh6ktiR
