<h1 align="center">Youtube Clone | by Reinaldo Alves</h1>

## Sobre o projeto

Youtube Clone é uma aplicação que tenta reproduzir as funcionalidades do Youtube. Este sistema permite que o usuário crie uma conta com nome, email, senha e foto de perfil e faça login por meio desta conta, para que possa adicionar seus próprios vídeos e shorts, com informações como título, categoria, descrição e até foto de capa (thumbnail). Além de trabalar com vídeos criados na aplicação, Youtube Clone também está integrado à API do Youtube, ou seja, é possível exibir cards dos vídeos mais populares da plataforma do Google, tanto na página inicial quanto nas páginas de categorias e nas pesquisas. Para construir a interface do Youtube Clone, foi utilizado o framework **React** com **TypeScript** e **Styled Components**, enquanto que para o back-end foi utilizado **Node.js** com requisições através do **Axios** e integração com banco de dados **MariaDB**.

OBS: O sistema ainda não permite que os vídeos sejam reproduzidos.

## Como utilizar o sistema?

### Preparando o ambiente

Para que o Youtube Clone possa funcionar na sua máquina, você precisa ter as ferramentas **Node.js** e o **Git** instaladas, além do **banco de dados**. Caso ainda não tenha, acesse os links abaixo para instalar.

- Node.js: https://nodejs.org/
- Git: https://git-scm.com/downloads/
- Banco de dados (MariaDB): https://mariadb.org/download/

### Instalando o sistema

Acesse o terminal do seu sistema operacional e navegue até o diretório onde deseja instalar o sistema. Em seguida, digite os seguintes comandos para clonar os repositórios do front-end e do back-end.

- Front-end: `git clone https://github.com/reinaldo-alves/youtube-clone.git`
- Back-end: `git clone https://github.com/reinaldo-alves/api-youtube.git`

Após a clonagem, navegue até a pasta onde foi instalado o front-end e execute o comando `npm install` para instalar as dependências do projeto. Em seguida, repita o mesmo procedimento para o back-end.

Por fim , acesse o arquivo `.env` na pasta do back-end e configure as variáveis de ambiente de acordo com o seu banco de dados (`SECRET`, `USER_DATABASE`, `PASSWORD_DATABASE`, `DATABASE`, `HOST_DATABASE` e `PORT_DATABASE`).

OBS: A variável de ambiente `PORT_DATABASE` deve ser diferente de 3000 e 4000.

### Executando o projeto

No terminal, navegue até a pasta do back-end e execute o seguinte comando `npm run dev`, para que o servidor possa rodar na porta 4000 da sua máquina.

Em seguida, abra outra aba ou janela do terminal, navegue até a pasta do front-end e execute o comando `npm start` para executar o projeto.

Por fim, acesse o endereço http://localhost:3000 no seu navegador para começar a usar o Youtube Clone.

OBS: certifique-se de que as portas 3000 e 4000 estejam livres em sua máquina.

## Contribua com o Youtube Clone:

Se você tiver alguma dúvida, encontrar algum problema ou quiser fazer uma sugestão para melhorar a aplicação, abra uma issue neste repositório ou entre em contato por email ou pelas redes sociais:
- [E-mail](mailto:reinaldoasjr8@gmail.com)
- [Instagram](https://www.instagram.com/reinaldo.alves8/)
- [Linkedin](https://www.linkedin.com/in/reinaldo-alves-8639aba9/)
