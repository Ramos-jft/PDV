# Ponto De Vendas - PDV 

## Descrição do Projeto
Este projeto consiste no desenvolvimento de uma API RESTful para um sistema de Ponto de Venda (PDV), projetado para gerenciar com eficiência o cadastro e a operação de usuários, produtos, categorias, clientes e pedidos. A API oferece funcionalidades essenciais para operações comerciais, permitindo a execução de operações CRUD (Create, Read, Update, Delete) em diferentes entidades do sistema.

Entre os principais recursos da API, destacam-se:

- **Gerenciamento de Produtos**: Inclui operações para cadastrar, atualizar, listar e remover produtos, com suporte para upload e gerenciamento de imagens, melhorando a apresentação do catálogo.
- **Gerenciamento de Clientes e Usuários**: Permite a gestão de clientes e usuários, com funcionalidades de autenticação e autorização para garantir a segurança e integridade dos dados.
- **Gerenciamento de Pedidos**: Facilita a criação, atualização e visualização de pedidos, assegurando que todos os produtos vinculados sejam validados e que o valor total dos pedidos seja calculado corretamente.

Desenvolvido com Node.js e PostgreSQL, o sistema adota melhores práticas de desenvolvimento, como a separação de responsabilidades e o tratamento adequado de erros. A arquitetura foi projetada para ser escalável e de fácil manutenção, servindo como uma base sólida para futuras expansões, como a integração com sistemas de pagamento e a geração de relatórios detalhados.

A API é estruturada para proporcionar uma operação segura e eficiente, suportando a integração com outras plataformas e possibilitando a adição de novas funcionalidades conforme as necessidades evoluem.

---
## Dependências do Projeto
### Bibliotecas Principais
- **express (v4.19.2)**: Framework web minimalista para Node.js, facilitando o desenvolvimento de APIs e aplicativos web.
- **knex (v3.1.0)**: Query builder para SQL, auxiliando na construção e execução de consultas SQL de forma programática.
- **pg (v8.12.0)**: Cliente PostgreSQL para Node.js, permitindo a interação com bancos de dados PostgreSQL.
- **bcrypt (v5.1.1)**: Biblioteca para criptografia de senhas, garantindo a segurança das credenciais dos usuários.
- **jsonwebtoken (v9.0.2)**: Biblioteca para criação e verificação de tokens JWT, usados para autenticação e autorização.
- **joi (v17.13.3)**: Biblioteca para validação de dados, útil para validar e sanitizar entradas de APIs e formulários.
- **handlebars (v4.7.8)**: Biblioteca de templates para a criação de HTML dinâmico com base em dados fornecidos.
- **multer (v1.4.5-lts.1)**: Middleware para Express.js que facilita o upload de arquivos em formulários.
- **nodemailer (v6.9.14)**: Biblioteca para envio de e-mails a partir de uma aplicação Node.js, com suporte para diferentes serviços de e-mail.
- **aws-sdk (v2.1676.0)**: Biblioteca oficial da AWS para interagir com diversos serviços da Amazon Web Services, como S3 e DynamoDB.
- **uuid (v10.0.0)**: Biblioteca para gerar identificadores únicos universais (UUIDs), frequentemente usados como chaves primárias.
### Dependências de Desenvolvimento
- **nodemon (v3.1.4)**: Ferramenta que reinicia automaticamente o servidor Node.js ao detectar alterações nos arquivos de código-fonte, facilitando o processo de desenvolvimento.
### Outras Dependências
- **dotenv (v16.4.5)**: Carrega variáveis de ambiente a partir de um arquivo .env para o ambiente de execução da aplicação.
- **fs (v0.0.1-security)**: Módulo nativo do Node.js para operações de sistema de arquivos (geralmente incluído por padrão com o Node.js).

---
### Rodando a API
Para rodar a API, siga os passos abaixo:

**1**. Clonar o Repositório
Você pode clonar o repositório usando um dos métodos a seguir:
- Via HTTPS:
```bash
git clone https://github.com/usuario/desafio-backend-final-dds-t16.git
```
- Via SSH:
```bash
git clone git@github.com:usuario/desafio-backend-final-dds-t16.git
```
- Via GitHub CLI:
```bash
gh repo clone usuario/desafio-backend-final-dds-t16
```
**2**. Instalar Dependências
Navegue até o diretório do projeto e instale as dependências necessárias usando o npm:
```bash
cd desafio-backend-final-dds-t16
```
```bash
npm install
```
**3**. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Um exemplo de configuração pode ser encontrado no arquivo `.env.example`.

**4**. Para iniciar o servidor em modo de desenvolvimento, que reinicia automaticamente ao detectar mudanças no código, use o comando:
```bash
npm run dev
```
**5**. Acessar a API
Após iniciar o servidor, você pode acessar a API localmente no seguinte endereço:
```bash
http://localhost:3000
```
---
## Deploy
O deploy do projeto foi realizado na plataforma Vercel, garantindo que a aplicação esteja disponível online. A configuração foi feita utilizando um arquivo vercel.json com as seguintes definições:

```bash
{
    "version": 2,
    "builds": [
        {
            "src": "./src/index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "src/index.js"
        }
    ]
}
```
Foi configurado o SSL para evitar a rejeição de certificados não autorizados:

```bash
ssl: {
    rejectUnauthorized: false,
}
```
#### Versão de Suporte
Para garantir a compatibilidade e o correto funcionamento da aplicação, foi especificada a versão do Node.js no arquivo package.json. Esta configuração define que a aplicação deve ser executada em ambientes que suportam a versão 20.x do Node.js:

```bash
"engines": {
    "node": "20.x"
}
```
Essa configuração é importante, especialmente no ambiente de produção (como a Vercel), para evitar inconsistências e garantir que a aplicação utilize a versão correta do Node.js.

#### Script de Inicialização
Além disso, o script de inicialização foi configurado no package.json para que a aplicação seja iniciada corretamente quando implantada:

```bash
"scripts": {
    "start": "node ./src/index.js"
}
```
Esse script garante que o servidor será iniciado a partir do arquivo index.js localizado no diretório src.
- Para iniciar o servidor em modo de produção, use o comando:
```bash
npm start
```

---
## Conexão Banco de Dados
Este projeto utiliza o Neon Tech, uma plataforma de banco de dados PostgreSQL moderna e escalável, ideal para aplicações em nuvem. O Neon oferece funcionalidades avançadas como escalabilidade automática, backups contínuos e conexões seguras, garantindo alta disponibilidade e desempenho.

#### Configurações de Conexão
As configurações de conexão ao banco de dados são gerenciadas por variáveis de ambiente, definidas no arquivo .env. As seguintes variáveis precisam ser configuradas para que o projeto possa se conectar ao banco de dados:

`.env`
```bash
DB_HOST=     # Endereço do host do banco de dados
DB_USER=     # Usuário do banco de dados
DB_PASS=     # Senha do banco de dados
DB_NAME=     # Nome do banco de dados
```
Esses valores são preenchidos com as credenciais corretas fornecidas pelo Neon Tech para garantir que o projeto se conecte corretamente ao banco de dados.

---
## Envio de Emails
Este projeto utiliza a plataforma Mailtrap para o envio de emails em ambiente de desenvolvimento. O Mailtrap simula um servidor de email, permitindo testar e depurar as funcionalidades de envio de emails sem risco de impactar usuários reais.

#### Configurações de Conexão
As configurações de conexão com o Mailtrap são gerenciadas por variáveis de ambiente, definidas no arquivo .env. Para garantir que o envio de emails funcione corretamente, configure as seguintes variáveis:

`.env`
```bash
EMAIL_HOST=   # Endereço do host do Mailtrap
EMAIL_PORT=   # Porta utilizada pelo Mailtrap
EMAIL_USER=   # Usuário para autenticação no Mailtrap
EMAIL_PASS=   # Senha para autenticação no Mailtrap
```
Essas variáveis devem ser preenchidas com as credenciais fornecidas pelo Mailtrap, disponíveis em sua conta na plataforma.

---
## Hospedagem de Imagens
As imagens utilizadas no projeto são armazenadas no Supabase, uma plataforma que oferece armazenamento de arquivos com suporte a buckets. As imagens são carregadas diretamente para um bucket do Supabase, e seus URLs são salvos no banco de dados do projeto para referência.

#### Configurações de Conexão
Para configurar a integração com o Supabase, as seguintes variáveis de ambiente devem ser definidas no arquivo .env:

`.env`
```bash
KEY_ID=             # Chave de identificação para acesso ao Supabase
APP_KEY=            # Chave de aplicação para autenticação no Supabase
ENDPOINT_S3=        # Endpoint S3 fornecido pelo Supabase para armazenamento
SUPABASE_BUCKET=    # Nome do bucket no Supabase onde as imagens são armazenadas
SUPABASE_URL=       # URL do projeto no Supabase
```
Essas variáveis garantem a conexão e o armazenamento adequado das imagens, permitindo que o projeto acesse e gerencie os arquivos de forma segura e eficiente.

---
## Banco de Dados
### Descrição
Estrutura do banco de dados pdv, utilizado para gerenciar usuários, categorias, produtos, clientes, pedidos e os itens de cada pedido. O banco de dados é modelado para suportar as operações comuns de um sistema de ponto de venda (PDV), incluindo o cadastro de produtos, clientes, e o processamento de pedidos.
#### Script de Criação do Banco de Dados
**Criação do Banco de Dados**
- O comando abaixo cria o banco de dados `pdv`:
```bash
CREATE DATABASE pdv;
```
**Criação das Tabelas**

Tabela `usuarios`
- Armazena os dados dos usuários do sistema:
```bash
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);
```
- **id**: Identificador único do usuário.
- **nome**: Nome completo do usuário.
- **email**: Endereço de email do usuário (único).
- **senha**: Senha do usuário (armazenada de forma segura).

Tabela `categorias`
- Armazena as categorias de produtos:
```bash
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL
);
```
- **id**: Identificador único da categoria.
- **descricao**: Descrição da categoria.

Tabela `produtos`
- Armazena os dados dos produtos, incluindo a quantidade em estoque e a categoria:
```bash
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    categoria_id INTEGER REFERENCES categorias(id),
    imagem_url TEXT
);
```
- **id**: Identificador único do produto.
- **descricao**: Descrição do produto.
- **quantidade_estoque**: Quantidade disponível em estoque.
- **valor**: Preço do produto.
- **categoria_id**: Referência para a categoria do produto.
- **imagem_url**: URL da imagem do produto.

Tabela `clientes`
- Armazena os dados dos clientes:
```bash
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    cep TEXT,
    rua TEXT,
    numero TEXT,
    bairro TEXT,
    cidade TEXT,
    estado TEXT
);
```
- **id**: Identificador único do cliente.
- **nome**: Nome completo do cliente.
- **email**: Endereço de email do cliente (único).
- **cpf**: CPF do cliente (único).
- **cep**: CEP do endereço do cliente.
- **rua**: Rua do endereço do cliente.
- **numero**: Número do endereço do cliente.
- **bairro**: Bairro do endereço do cliente.
- **cidade**: Cidade do endereço do cliente.
- **estado**: Estado do endereço do cliente.

Tabela `pedidos`
- Armazena os dados dos pedidos realizados pelos clientes:
```bash
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id),
    observacao TEXT,
    valor_total DECIMAL(10, 2) NOT NULL
);
```
- **id**: Identificador único do pedido.
- **cliente_id**: Referência para o cliente que fez o pedido.
- **observacao**: Observações adicionais sobre o pedido.
- **valor_total**: Valor total do pedido.

Tabela `pedido_produtos`
- Armazena os produtos incluídos em cada pedido:
```bash
CREATE TABLE pedido_produtos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES produtos(id),
    quantidade_produto INTEGER NOT NULL,
    valor_produto DECIMAL(10, 2) NOT NULL
);
```
- **id**: Identificador único do item no pedido.
- **pedido_id**: Referência para o pedido.
- **produto_id**: Referência para o produto.
- **quantidade_produto**: Quantidade do produto no pedido.
- **valor_produto**: Valor do produto no momento do pedido.

**Inserção de Categorias Iniciais**
- Categorias de produtos pré-definidas são inseridas na tabela `categorias`:
```bash
INSERT INTO categorias (descricao) VALUES 
('Informática'),
('Celulares'),
('Beleza e Perfumaria'),
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games');
```

---
## Endpoint: Listar Categorias
### Descrição
Este endpoint retorna uma lista de todas as categorias cadastradas no banco de dados. Apenas as descrições das categorias são retornadas.

### URL
Método: GET 
```bash
/categoria
```
### Parâmetros da Requisição
Este endpoint não requer parâmetros na URL ou no corpo da requisição.

#### Respostas
Sucesso (200 OK)
- Descrição: Lista de categorias recuperada com sucesso.
- Corpo da resposta:
```bash
[
	{
		"descricao": "Informática"
	},
	{
		"descricao": "Celulares"
	},
	{
		"descricao": "Beleza e Perfumaria"
	},
	{
		"descricao": "Mercado"
	},
	{
		"descricao": "Livros e Papelaria"
	},
	{
		"descricao": "Brinquedos"
	},
	{
		"descricao": "Moda"
	},
	{
		"descricao": "Bebê"
	},
	{
		"descricao": "Games"
	}
]
```
#### Erros
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do Servidor"
}
```

### Lógica Interna
- Consulta ao Banco de Dados: O endpoint realiza uma consulta na tabela categorias para selecionar a coluna descricao de todas as categorias cadastradas.
- Retorno das Categorias: As categorias são retornadas no formato JSON, contendo apenas a descrição de cada uma.
### Verificações de Segurança
- Tratamento de erros: Em caso de falha na consulta ao banco de dados, um erro genérico é retornado ao cliente para evitar vazamento de detalhes internos do servidor.

---
## Endpoint: Cadastrar Usuário
### Descrição
Este endpoint permite o cadastro de novos usuários na base de dados. Ele realiza validações para garantir que o email seja único, criptografa a senha antes de armazená-la, e retorna os detalhes do usuário cadastrado. Em caso de falhas, erros apropriados são retornados para o cliente.

### URL
Método: POST 
```bash
/usuario
```
### Parâmetros da Requisição
A requisição deve conter os seguintes campos no corpo:

- nome: (string) Nome completo do usuário. Obrigatório.
- email: (string) Endereço de email do usuário. Deve ser único no banco de dados. Obrigatório.
- senha: (string) Senha do usuário. Obrigatório.
#### Corpo da Requisição

Exemplo de corpo da requisição:

Padrão JSON

```bash
{
    "nome": "Maria Souza",
    "email": "maria.souza@example.com",
    "senha": "senhaSegura123"
}
```
#### Respostas
Sucesso (201 Created)
- Descrição: Usuário cadastrado com sucesso.
- Corpo da resposta:
```bash
{
    "id": 1,
    "nome": "Maria Souza",
    "email": "maria.souza@example.com",
    "senha": "$2b$10$i5SpPivjmkFLF.0q546zlutbNOvLuifAcuSxnXG3Q6NQvriTq/cu6"
}
```
#### Erros
400 Bad Request
- Condição: O email já existe.
- Corpo da resposta:
```bash
{
    "mensagem": "O email já existe."
}
```
- Condição: O usuário não foi cadastrado devido a um erro inesperado.
- Corpo da resposta:
```bash
{
    "mensagem": "O usuário não foi cadastrado."
}
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do Servidor."
}
```

### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaCadastrar`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- Validação de Unicidade do Email: O endpoint verifica se o email já está cadastrado. Se já existir, uma resposta de erro é retornada.
- Criptografia da Senha: Antes de salvar a senha no banco de dados, ela é criptografada utilizando o algoritmo bcrypt com um fator de custo de 10.
- Inserção no Banco de Dados: Se todas as validações forem aprovadas, o usuário é inserido na tabela usuarios e os dados completos do usuário cadastrado são retornados.
### Verificações de Segurança
- Criptografia de Senha: As senhas são criptografadas antes de serem armazenadas para garantir a segurança dos dados dos usuários.
- Validação de entrada: O corpo da requisição deve ser validado para garantir que todos os campos obrigatórios sejam fornecidos.
- Tratamento de erros: Erros relacionados à unicidade do email e outros erros internos são tratados de maneira que informações sensíveis não sejam expostas.

---
## Endpoint: Login de Usuário
### Descrição
Este endpoint permite que usuários autenticados façam login, validando suas credenciais e retornando um token JWT para autenticação em requisições subsequentes.

### URL
Método: POST 
```bash
/login
```
### Parâmetros da Requisição
A requisição deve conter os seguintes campos no corpo:

- email: (string) Endereço de email do usuário. Obrigatório.
- senha: (string) Senha do usuário. Obrigatório.  
#### Corpo da Requisição
Exemplo de corpo da requisição:

Padrão JSON

```bash
{
    "email": "maria.souza@example.com",
    "senha": "senhaSegura123"
}
```
#### Respostas
Sucesso (200 OK)
- Descrição: Login realizado com sucesso. Retorna os dados do usuário (exceto a senha) e um token JWT.
- Corpo da resposta:
```bash
{
    "usuario": {
        "id": 1,
        "nome": "Maria Souza",
        "email": "maria.souza@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTcyMzgyNjM2MSwiZXhwIjoxNzIzODU1MTYxfQ.SGAUW4aP6Wije2jwwWeMa2XBhqgAmroQHMN_ajILCQQ"
}
```
#### Erros
404 Not Found
- Condição: O email fornecido não corresponde a nenhum usuário cadastrado.
- Corpo da resposta:
```bash
  {
    "mensagem": "O usuario não foi encontrado."
  }
```
400 Bad Request
- Condição: A senha fornecida está incorreta.
- Corpo da resposta:
```bash
  {
    "mensagem": "Email ou senha não confere."
  }
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
  {
    "mensagem": "Erro interno do Servidor."
  }
```
### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaLogin`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- Validação de Existência do Usuário: O endpoint verifica se o email fornecido está cadastrado. Se não estiver, uma resposta de erro é retornada.
- Verificação da Senha: A senha fornecida é comparada com a senha criptografada armazenada no banco de dados usando bcrypt. Se a senha não corresponder, um erro é retornado.
- Geração do Token JWT: Se a senha for validada com sucesso, um token JWT é gerado e assinado usando uma chave secreta (SENHA_JWT), com expiração de 8 horas.
- Retorno dos Dados do Usuário: Os dados do usuário, exceto a senha, são retornados junto com o token JWT.
### Verificações de Segurança
- Armazenamento Seguro de Senhas: As senhas dos usuários são armazenadas de forma criptografada utilizando bcrypt.
- Token JWT: O token JWT é assinado e expira após 8 horas, garantindo segurança adicional para o usuário.
- Tratamento de Erros: Erros genéricos são retornados para evitar o vazamento de informações sensíveis.
  
---
## Endpoint: Redefinir Senha de Usuário
### Descrição
Este endpoint permite que usuários autenticados redefinam sua senha, validando a senha antiga, garantindo que a nova senha não seja igual à antiga, atualizando a senha no banco de dados, e enviando um email de notificação sobre a mudança. O Mailtrap é utilizado para o envio do email de notificação.

### URL
Método: PUT 
```bash
/redefinir
```
### Parâmetros da Requisição
A requisição deve conter os seguintes campos no corpo:

- email: (string) Endereço de email do usuário. Obrigatório.
- senha_antiga: (string) Senha atual do usuário. Obrigatório.
- senha_nova: (string) Nova senha do usuário. Obrigatório.
#### Corpo da Requisição
Exemplo de corpo da requisição:

Padrão JSON

```bash
{
    "email": "maria.souza@example.com",
    "senha_antiga": "senhaSegura123",
    "senha_nova": "novaSenhaSegura123"
}
```
#### Respostas
Sucesso (200 OK)
- Descrição: Senha alterada com sucesso. Um email de notificação é enviado ao usuário.
- Corpo da resposta:
```bash
{
    "mensagem": "Senha alterada com sucesso."
}
```
#### Erros
400 Bad Request
- Condição: A nova senha é igual à antiga.
- Corpo da resposta:
```bash
{
    "mensagem": "A senha nova não pode ser igual à senha antiga."
}
```
404 Not Found
- Condição: O email fornecido não corresponde a nenhum usuário cadastrado.
- Corpo da resposta:
```bash
{
    "mensagem": "Usuário não encontrado."
}
```
401 Unauthorized
- Condição: A senha antiga fornecida está incorreta.
- Corpo da resposta:
```bash
{
    "mensagem": "Senha antiga incorreta."
}
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do Servidor."
}
```
### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaRedefinirSenha`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- Validação de Diferenciação de Senhas: O endpoint verifica se a nova senha é diferente da senha antiga. Caso sejam iguais, um erro é retornado.
- Validação de Existência do Usuário: O endpoint verifica se o email fornecido está cadastrado no sistema.
- Verificação da Senha Antiga: A senha antiga fornecida é comparada com a senha armazenada no banco de dados usando bcrypt. Se a senha não corresponder, um erro é retornado.
- Criptografia da Nova Senha: A nova senha é criptografada usando bcrypt antes de ser armazenada no banco de dados.
- Envio de Email de Notificação: Após a alteração bem-sucedida da senha, um email de notificação é enviado ao usuário informando sobre a mudança. O Mailtrap é utilizado para o envio deste email de notificação.
### Verificações de Segurança
- Criptografia de Senha: As senhas dos usuários são armazenadas de forma segura utilizando bcrypt.
- Notificação de Alteração: Um email é enviado ao usuário após a alteração da senha para garantir que ele seja informado de qualquer mudança em sua conta.
- Validação de Diferenciação de Senhas: Evita que o usuário defina a nova senha igual à senha antiga, promovendo melhores práticas de segurança.

---
## Middleware: Validar token
### Descrição
Função de Midlleware (Intermediário) de Rota, responsável por autenticar o acesso às rotas protegidas da aplicação. Ele gera um Token JWT (JSON Web Token) na rota de Login do Usuário e nas demais rotas verifica se o Token foi fornecido no header da requisição, assegurando que o usuário está logado. Todas as rotas após o uso desta função somente irão funcionar se a validação do token for realizada. A configuração desta função deixa o Token gerado válido por 8 horas.

### URL
Este middleware é aplicado a rotas protegidas e não possui uma URL específica.

### Parâmetros da Requisição
Na rota de login do Usuário o Token é gerado através da decodificação de uma chave secreta (`SENHA_JWT`). Após o Login do Usuário nas demais rotas o Token deve ser informado na Authentication da rota em formato Bearer Token para poder prosseguir com as requisições.
- Cabeçalho (Authorization): Bearer <token>: O token JWT que autoriza o acesso à rota. Obrigatório.
- Exemplo de Cabeçalho
```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
#### Respostas
Sucesso (201 Created)
- Descrição: Validando o Token gerado no Login de Usuário. O Token é validado no header authentication Bearer Token e a requisição é autorizada a continuar.
- Corpo da resposta:
```bash
{
	"usuario": {
		"id": 1,
		"nome": "Lucas Ramos",
		"email": "lucas@email.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIzOTA2NjQ2LCJleHAiOjE3MjM5MzU0NDZ9.DpA0QnmxqrH0suzmhLJjcR5CwXO0sx5XUxzmQSI5vow"
}
```
#### Erros
401 Unauthorized
- Condição: O cabeçalho de autorização não foi fornecido, o token é inválido, expirado ou o usuário não foi encontrado.
- Corpo da Resposta:
```bash
{
    "mensagem": "Não autorizado."
}
```
- Condição: O token JWT é válido, mas o usuário correspondente não foi encontrado no banco de dados.
- Corpo da Resposta:
```bash
{
    "mensagem": "Login inválido ou expirado."
}
```
500 Internal Server Error
- Condição: Ocorreu um erro inesperado durante a verificação do token ou na consulta ao banco de dados.
- Corpo da Resposta:
```bash
{
    "mensagem": "Erro interno do servidor."
}
```
### Lógica Interna
- Consulta ao Banco de Dados: No Login do Usuário o midlleware consulta a tabela usuários para verificar se o usuário correspondente ao ID existe. Na validação do Usuário Logado o midlleware verifica se o Token informado no header authentication em formato Bearer Token é valido.
- Verificação do Cabeçalho de Autorização: O middleware verifica se o cabeçalho de autorização está presente e se segue o formato Bearer <token>.
- Validação do Token JWT: O token é decodificado e validado utilizando a chave SENHA_JWT definida nas variáveis de ambiente.
- Verificação da Existência do Usuário: O ID extraído do token é usado para consultar o banco de dados e verificar se o usuário ainda existe.
### Verificações de Segurança
- Tratamento de erros: Em caso de falha na consulta ao banco de dados, um erro genérico é retornado ao cliente para evitar vazamento de detalhes internos do servidor.
- Autenticação JWT: Somente usuários autenticados com um token JWT válido podem acessar as rotas protegidas.
- Verificação de Existência do Usuário: Mesmo com um token válido, a existência do usuário no banco de dados é verificada para garantir que o acesso seja concedido apenas a usuários ativos.
- Proteção de Dados Sensíveis: A senha do usuário é removida dos dados antes de serem anexados ao objeto de requisição, garantindo que informações sensíveis não sejam expostas.

---
### **ATENÇÃO**: Todas as funcionalidades (endpoints) a seguir, a partir desse ponto, deverão exigir o token de autenticação do usuário logado, recebendo no header com o formato Bearer Token. Portanto, em cada funcionalidade será necessário validar o token informado.
---
## Endpoint: Detalhar Usuário Logado
### Descrição
Este endpoint permite ao usuário logado visualizar os dados de seu próprio perfil. Ele retorna o ID, nome e email do usuário autenticado. Somente usuários autenticados podem acessar este recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: GET
```bash
/usuario
```
### Parâmetros da Requisição
- Nenhum parâmetro é necessário na URL. A requisição utiliza o token de autenticação do usuário logado no cabeçalho.
#### Corpo da Requisição
- Nenhum dado precisa ser enviado no corpo da requisição.

#### Respostas
Sucesso (201 Created)
- Descrição: Requisição bem-sucedida e o perfil do usuário logado foi retornado.
- Corpo da Resposta:
```bash
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com"
}
```
#### Erros:
500 Internal Server Error
- Condição: Este erro indica que ocorreu um problema no servidor durante o processamento da requisição. Pode ocorrer devido a falhas na leitura dos dados do usuário ou outras exceções inesperadas.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do Servidor."
}
```
### Lógica Interna
- O método detalharUsuario extrai os dados do usuário logado a partir do objeto req.usuario, que é previamente populado pelo middleware de autenticação.
- Retorna o id, nome e email do usuário autenticado no formato JSON.
### Verificações de Segurança
- Autenticação: O acesso a este endpoint é protegido por um middleware que verifica a autenticidade do token JWT no cabeçalho da requisição. O usuário só consegue acessar seus próprios dados se estiver autenticado corretamente.
- Privacidade: Somente os dados do usuário logado (ID, nome e email) são retornados, garantindo que nenhuma informação sensível de outros usuários seja exposta.

---
## Endpoint: Editar Usuário Logado
### Descrição
Este endpoint permite ao usuário logado editar as informações de seu próprio perfil, como nome, email e senha. Somente usuários autenticados podem acessar este recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: PUT
```bash
/usuario
```

### Parâmetros da Requisição
Nenhum parâmetro é necessário na URL. A requisição deve conter o token de autenticação do usuário logado no cabeçalho.

A requisição deve conter os seguintes campos no corpo:
- **nome** (string, obrigatório): O novo nome do usuário.
- **email** (string, obrigatório): O novo email do usuário.
- **senha** (string, obrigatório): A senha atual do usuário (necessária para confirmar a alteração).
#### Corpo da Requisição
Exemplo de corpo da requisição

Padrão JSON

```bash
{
    "nome": "Novo Nome",
    "email": "novoemail@email.com",
    "senha": "senhaAtual"
}
```
#### Respostas
Sucesso (204 No Content)
- Condição: O perfil do usuário foi atualizado com sucesso.
- Corpo da resposta: Nenhum conteúdo adicional é retornado.

#### Erros
400 (Bad Request)
- Condição: O email informado já está em uso por outro usuário.
- Corpo da resposta:
```bash
{
    "mensagem": "O e-mail informado já está sendo utilizado por outro usuário."
}
```
401 (Unauthorized)
- Condição: A senha fornecida está incorreta e, portanto, a alteração não foi autorizada.
- Corpo da resposta:
```bash
 {
     "mensagem": "Senha incorreta."
 }
```
404 (Not Found)
 - Condição: O usuário não foi encontrado na base de dados.
 - Corpo da resposta:
```bash
 {
     "mensagem": "Usuário não encontrado."
 }
```
500 (Internal Server Error)
- Condição: Ocorreu um erro inesperado no servidor ao processar a requisição.
- Corpo da resposta:
```bash
{
     "mensagem": "Erro interno do Servidor."
}
```
### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaEditarUsuarioLogado`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- O método `editarUsuarioLogado` realiza as seguintes verificações e ações:
  1. Verifica se o email fornecido já está em uso por outro usuário.
  2. Verifica se o usuário existe no banco de dados.
  3. Verifica se a senha fornecida corresponde à senha atual do usuário.
  4. Atualiza o nome e o email do usuário no banco de dados.
### Verificações de Segurança
- Validação de Dados: A estrutura do corpo da requisição é validada utilizando o Joi para garantir que todos os campos obrigatórios sejam fornecidos e que estejam no formato correto.
- Autenticação: O endpoint só pode ser acessado por usuários autenticados, verificados por meio de um token JWT.
- Autorização: O usuário deve fornecer a senha atual para confirmar as alterações, garantindo que somente o próprio usuário possa modificar seus dados.

---
## Endpoint: Cadastrar Produto
### Descrição
Este endpoint permite o cadastro de um novo produto no sistema, incluindo informações como descrição, quantidade em estoque, valor e categoria. Somente usuários autenticados podem acessar este recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: POST
```bash
/produto
```
### Parâmetros da Requisição
Nenhum parâmetro é necessário na URL. A requisição deve conter o token de autenticação do usuário logado no cabeçalho.

A requisição deve conter os seguintes campos no corpo:
- **descricao** (string, obrigatório): A descrição do produto.
- **quantidade_estoque** (number, obrigatório): A quantidade de itens em estoque. Deve ser um número inteiro maior que zero.
- **valor** (number, obrigatório): O preço do produto. Deve ser um número positivo.
- **categoria_id** (number, obrigatório): O ID da categoria à qual o produto pertence. Deve ser um número inteiro.
#### Corpo da Requisição
Exemplo de corpo da requisição:

Padrão JSON

```bash
{
    "descricao": "Descrição do Produto",
    "quantidade_estoque": 10,
    "valor": 99.99,
    "categoria_id": 1
}
```
#### Respostas
Sucesso (201 Created)
- Condição: O produto foi cadastrado com sucesso e os dados do novo produto são retornados.
- Corpo da resposta:
```bash
{
     "id": 1,
     "descricao": "Descrição do Produto",
     "quantidade_estoque": 10,
     "valor": 99.99,
     "categoria_id": 1
}
```
#### Erros
404 (Not Found)
- Condição: A categoria especificada não foi encontrada no banco de dados.
- Corpo da resposta:
```bash
{
     "mensagem": "Categoria não encontrada."
}
```
500 (Internal Server Error)
- Condição: Ocorreu um erro inesperado no servidor ao processar a requisição.
- Corpo da resposta:
```bash
{
     "mensagem": "Erro interno do Servidor."
}
```
### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaCadastrarProduto`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- O método `cadastrarProduto` realiza as seguintes verificações e ações:
  1. Verifica se o ID da categoria fornecido existe no banco de dados.
  2. Caso a categoria exista, o produto é inserido na tabela `produtos` com os dados fornecidos.
  3. Retorna os dados do produto recém-cadastrado.
### Verificações de Segurança
- Validação de Dados: A estrutura do corpo da requisição é validada utilizando o Joi para garantir que todos os campos obrigatórios sejam fornecidos e que estejam no formato correto.
- Autenticação: O endpoint só pode ser acessado por usuários autenticados, verificados por meio de um token JWT.
- Autorização: O acesso ao endpoint é restrito a usuários autenticados que têm permissão para cadastrar novos produtos.

---
## Endpoint: Editar Produto
### Descrição
Este endpoint permite a atualização dos dados de um produto existente na base de dados. Ele realiza validações para garantir que o produto e a categoria informados existam e, em seguida, atualiza os dados do produto com os valores fornecidos. Em caso de falhas, erros apropriados são retornados para o cliente. Somente usuários autenticados podem acessar esse recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: PUT 
```bash
/produtos/:id
```
### Parâmetros da Requisição
- **URL**:
  - `id` (integer): ID do produto a ser editado. Obrigatório.

A requisição deve conter os seguintes campos no corpo:
- descricao (string): Descrição do produto. Obrigatório.
- quantidade_estoque (integer): Quantidade do produto em estoque. Obrigatório.
- valor (decimal): Valor do produto. Obrigatório.
- categoria_id (integer): ID da categoria do produto. Obrigatório.
#### Corpo da Requisição
Exemplo de corpo da requisição:
```bash
{
    "descricao": "Notebook Dell Inspiron",
    "quantidade_estoque": 15,
    "valor": 3500.00,
    "categoria_id": 1
}
```
#### Respostas
Sucesso (200 OK)
- Descrição: Produto atualizado com sucesso.
- Corpo da resposta:
```bash
{
    "id": 1,
    "descricao": "Notebook Dell Inspiron",
    "quantidade_estoque": 15,
    "valor": 3500.00,
    "categoria_id": 1
}
```
#### Erros
404 (Not Found)
- Condição: O produto não foi encontrado.
- Corpo da resposta:
```bash
{
    "mensagem": "Produto não encontrado."
}
```
ou
- Condição: A categoria informada não foi encontrada.
- Corpo da resposta:
```bash
{
    "mensagem": "Categoria não encontrada."
}
```
500 (Internal Server Error)
Condição: Erro inesperado no servidor.
Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do Servidor."
}
```
### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaEditarProduto`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- Validação da Existência do Produto: Verifica se o produto com o id fornecido existe no banco de dados. Caso não exista, retorna um erro 404.
- Validação da Existência da Categoria: Verifica se o categoria_id fornecido existe no banco de dados. Caso não exista, retorna um erro 404.
- Atualização no Banco de Dados: Se as validações forem bem-sucedidas, o produto é atualizado com os novos valores e os dados completos do produto atualizado são retornados.
### Verificações de Segurança
- Validação de Entrada: O corpo da requisição deve ser validado para garantir que todos os campos obrigatórios sejam fornecidos.
- Tratamento de Erros: Erros relacionados à inexistência do produto, inexistência da categoria, e outros erros internos são tratados de maneira que informações sensíveis não sejam expostas.

---
## Endpoint: Listar Produtos
### Descrição
Este endpoint permite a listagem de todos os produtos cadastrados no sistema. Ele aceita um parâmetro de consulta opcional para filtrar os produtos por uma categoria específica. Se o parâmetro categoria_id for informado, o endpoint retornará apenas os produtos que pertencem à categoria correspondente. Caso contrário, todos os produtos serão retornados. Somente usuários autenticados podem acessar esse recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: GET 
```bash
/produtos
```
### Parâmetros da Requisição
- **Parâmetros de Consulta (Query Parameters)**:
  - `categoria_id` (integer): ID da categoria para filtrar os produtos. Opcional.

#### Respostas
Sucesso (200 OK)
- Descrição: Retorna a lista de produtos cadastrados. Se categoria_id for informado e válido, retorna apenas os produtos da categoria especificada.
- Corpo da resposta (sem categoria_id):
```bash
[
    {
        "id": 1,
        "descricao": "Notebook Dell Inspiron",
        "quantidade_estoque": 15,
        "valor": 3500.00,
        "categoria_id": 1
    },
    {
        "id": 2,
        "descricao": "Smartphone Samsung Galaxy",
        "quantidade_estoque": 30,
        "valor": 1200.00,
        "categoria_id": 2
    }
]
```
- Corpo da resposta (com categoria_id):
```bash
[
    {
        "id": 2,
        "descricao": "Smartphone Samsung Galaxy",
        "quantidade_estoque": 30,
        "valor": 1200.00,
        "categoria_id": 2
    }
]
```
#### Erros 
404 (Not Found)
- Condição: A categoria informada não foi encontrada.
- Corpo da resposta:
```bash
{
    "mensagem": "Categoria não encontrada."
}
```
500 (Internal Server Error)
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do servidor."
}
```
### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaListarProduto`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- Verificação de `categoria_id`: Se o parâmetro de consulta `categoria_id` for informado, o endpoint verifica se a categoria existe no banco de dados. Caso a categoria não seja encontrada, retorna um erro 404.
- Listagem dos Produtos:
   - Se `categoria_id` for informado e válido, o endpoint retorna os produtos que pertencem à categoria especificada.
   - Se `categoria_id` não for informado, o endpoint retorna todos os produtos cadastrados.
- Tratamento de Erros: Erros de banco de dados ou falhas inesperadas são tratados e uma resposta 500 é retornada ao cliente.
### Verificações de Segurança
- Validação de Entrada: O parâmetro `categoria_id` deve ser validado para garantir que seja um número inteiro válido.
- Tratamento de Erros: Informações sensíveis não são expostas em mensagens de erro.

---
## Endpoint: Detalhar Produto
### Descrição
Este endpoint permite visualizar os detalhes de um produto específico com base no seu ID. Somente usuários autenticados podem acessar esse recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: GET
```bash
/produtos/:id
```
### Parâmetros da Requisição
- **Parâmetros de Rota (Route Parameters)**:
  - id (integer): ID do produto que deseja visualizar. Obrigatório.

#### Respostas
Sucesso (200 OK)
- Descrição: Retorna os detalhes do produto especificado.
- Corpo da resposta:
```bash
{
    "id": 1,
    "descricao": "Notebook Dell Inspiron",
    "quantidade_estoque": 15,
    "valor": 3500.00,
    "categoria_id": 1,
    "imagem_url": "https://exemplo.com/imagem-notebook.jpg"
}
```
#### Erros
404 (Not Found)
- Condição: O produto especificado pelo id não foi encontrado.
- Corpo da resposta:
```bash
{
    "mensagem": "Produto não encontrado."
}
```
500 (Internal Server Error)
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do servidor."
}
```
### Lógica Interna
- Verificação de Existência: O endpoint consulta o banco de dados para verificar se existe um produto com o id especificado.
- Se o produto não for encontrado, retorna um erro 404.
- Se o produto for encontrado, retorna os detalhes do produto.
- Tratamento de Erros: Em caso de falha no servidor ou erro de banco de dados, uma resposta 500 é retornada ao cliente.
### Considerações de Segurança
- Validação de Entrada: O parâmetro id deve ser validado para garantir que seja um número inteiro válido.
- Tratamento de Erros: Informações sensíveis não são expostas em mensagens de erro.

---
## Endpoint: Excluir Produto
### Descrição
Este endpoint permite a exclusão de um produto específico com base no seu ID. A exclusão só é permitida se o produto não estiver vinculado a nenhum pedido. Somente usuários autenticados podem acessar esse recurso.

Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: DELETE 
```bash
/produtos/:id
```
### Parâmetros da Requisição
- **Parâmetros de Rota (Route Parameters)**:
  - id (integer): ID do produto que deseja excluir. Obrigatório.

#### Respostas
Sucesso (204 No Content)
- Descrição: Produto excluído com sucesso. Não há conteúdo no corpo da resposta.

#### Erro
404 (Not Found)
- Condição: O produto especificado pelo id não foi encontrado.
- Corpo da resposta:
```bash
{
    "mensagem": "Produto não encontrado."
}
```
400 (Bad Request)
- Condição: O produto está vinculado a um ou mais pedidos e, portanto, não pode ser excluído.
- Corpo da resposta:
```bash
{
    "mensagem": "Não é possível excluir um produto que está vinculado a um pedido."
}
```
500 (Internal Server Error)
- Condição: Erro inesperado no servidor, incluindo falha ao excluir a imagem associada ao produto.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do servidor."
}
```
### Lógica Interna
- Verificação de Existência do Produto: O endpoint consulta o banco de dados para verificar se existe um produto com o id especificado.
- Se o produto não for encontrado, retorna um erro 404.
- Se o produto for encontrado, prossegue para verificar se o produto está vinculado a algum pedido.
= Verificação de Vinculação a Pedidos: O endpoint verifica se o produto está vinculado a algum pedido na tabela pedido_produtos. Se estiver vinculado, retorna um erro 400, impedindo a exclusão. Se não estiver vinculado, prossegue para a exclusão do produto.
- Exclusão da Imagem: Se o produto possui uma imagem associada, o endpoint tenta excluir a imagem armazenada no Supabase usando o Amazon S3. Se ocorrer um erro ao excluir a imagem, um erro 500 é retornado.
- Exclusão do Produto: Se todos os critérios forem atendidos, o produto é excluído do banco de dados.
### Verificações de Segurança
- Validação de Entrada: O parâmetro id deve ser validado para garantir que seja um número inteiro válido.
= Tratamento de Erros: Informações sensíveis não são expostas em mensagens de erro.

---
## Endpoint: Upload de Imagem do Produto
### Descrição
Este endpoint permite o upload de uma nova imagem para um produto existente, ou a remoção de uma imagem associada ao produto. A imagem pode ser enviada como um arquivo na requisição, e se já existir uma imagem anterior, esta será substituída. Somente usuários autenticados podem acessar esse recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: PATCH
```bash
/produto/:id/imagem
```
### Parâmetros da Requisição
- **URL**:
  - `id` (obrigatório): O ID do produto para o qual a imagem será carregada ou removida.
#### Corpo da Requisição
- **Arquivo** (opcional): Um arquivo de imagem deve ser enviado com o campo `imagem` no corpo da requisição utilizando `multipart/form-data`.

### Respostas
Sucesso (201 Created)
- Condição: A imagem foi carregada e associada ao produto com sucesso.
- Corpo da resposta:
```bash
{
     "mensagem": "Imagem carregada com sucesso!",
     "imagem_url": "https://link-da-imagem-carregada.com"
}
```
Sucesso (200 OK)
- Condição: A imagem anterior foi removida com sucesso, e o produto agora está sem imagem associada.
- Corpo da resposta:
```bash
{
    "mensagem": "Imagem antiga removida com sucesso!",
    "imagem_url": null
}
```
#### Erros
404 (Not Found)
- Condição: Nenhuma imagem ou dados foram enviados na requisição.
- Corpo da resposta:
```bash
{
     "mensagem": "Nenhuma informação fornecida."
}
```
ou
- Condição: O produto com o ID fornecido não foi encontrado no banco de dados.
- Corpo da resposta:
```bash
{
     "mensagem": "Produto não encontrado."
}
```
500 (Internal Server Error)
- Condição: Ocorreu um erro inesperado no servidor ao processar a requisição, como falha ao atualizar o banco de dados ou ao fazer o upload/remover a imagem.
- Corpo da resposta:
```bash
{
     "mensagem": "Erro interno do Servidor."
}
```
### Lógica Interna
- Validação de Dados: A requisição valida se um arquivo de imagem foi enviado ou se existem dados no corpo da requisição.
- Busca do Produto: O produto é buscado no banco de dados usando o ID fornecido. Se o produto não for encontrado, uma resposta 404 é retornada.
- Upload de Imagem: Se um novo arquivo de imagem é enviado, ele é carregado, e a URL da nova imagem substitui a URL da imagem antiga no banco de dados. Se já houver uma imagem anterior, ela será removida.
- Remoção de Imagem: Se nenhum arquivo for enviado e o produto já tiver uma imagem, essa imagem é removida tanto do armazenamento quanto do banco de dados.
#### Verificações de Segurança
- Verificação de Existência do Produto: Antes de qualquer operação, o código verifica se o produto com o ID fornecido realmente existe no banco de dados.
- Remoção Segura de Imagens: Se uma imagem já existe no produto e uma nova imagem é carregada, a imagem antiga é removida de forma segura para evitar acúmulo de arquivos desnecessários no sistema.

---
## Endpoint: Cadastrar Cliente
### Descrição
Este endpoint permite o cadastro de novos clientes na base de dados. Ele realiza validações para garantir que o email e o CPF sejam únicos, normaliza o CPF antes de armazená-lo, e retorna os detalhes do cliente cadastrado. Em caso de falhas, erros apropriados são retornados para o cliente. Somente usuários autenticados podem acessar esse recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: POST 
```bash
/cliente
```
### Parâmetros da Requisição
A requisição deve conter os seguintes campos no corpo:

- nome: (string) Nome completo do cliente. Obrigatório.
- email: (string) Endereço de email do cliente. Deve ser único no banco de dados. Obrigatório.
- cpf: (string) CPF do cliente. Deve ser único no banco de dados. Obrigatório.
- cep: (string) CEP do endereço do cliente. Obrigatório.
- rua: (string) Nome da rua do endereço do cliente. Obrigatório.
- numero: (string) Número do endereço do cliente. Obrigatório.
- bairro: (string) Bairro do endereço do cliente. Obrigatório.
- cidade: (string) Cidade do endereço do cliente. Obrigatório.
- estado: (string) Estado do endereço do cliente. Obrigatório.
#### Corpo da Requisição
Exemplo de corpo da requisição:

Padrão JSON

```bash
{
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "cpf": "123.456.789-09",
    "cep": "12345-678",
    "rua": "Rua das Flores",
    "numero": "123",
    "bairro": "Centro",
    "cidade": "São Paulo",
    "estado": "SP"
}
```
#### Respostas
Sucesso (201 Created)
- Descrição: Cliente cadastrado com sucesso.
- Corpo da resposta:
```bash
{
    "id": 1,
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "cpf": "12345678909",
    "cep": "12345-678",
    "rua": "Rua das Flores",
    "numero": "123",
    "bairro": "Centro",
    "cidade": "São Paulo",
    "estado": "SP"
}
```
#### Erros
400 Bad Request
- Condição:
O email já está em uso por outro cliente.
- Corpo da resposta:
```bash
{
    "mensagem": "O email já está em uso por outro cliente."
}
```
- Condição:
O CPF já está em uso por outro cliente.
- Corpo da resposta:
```bash
{
    "mensagem": "O CPF já está em uso por outro cliente."
}
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do Servidor"
}
```

### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaCadastroCliente`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- Normalização do CPF: O CPF é normalizado removendo todos os caracteres não numéricos antes de ser verificado e armazenado.
- Validação de Unicidade: O endpoint verifica se o email e o CPF já estão cadastrados. Se qualquer um dos dois já existir, uma resposta de erro é retornada.
- Inserção no Banco de Dados: Se todas as validações forem aprovadas, o cliente é inserido na tabela clientes e os dados completos do cliente cadastrado são retornados.
### Verificações de Segurança
- Validação de entrada: O corpo da requisição deve ser validado para garantir que todos os campos obrigatórios sejam fornecidos.
- Tratamento de erros: Erros de banco de dados relacionados à unicidade (como tentativas de cadastro com CPF duplicado) são capturados e tratados corretamente para evitar vazamento de informações sensíveis.

---
## Endpoint: Editar Dados do Cliente
### Descrição
Este endpoint permite a atualização dos dados de um cliente existente. Ele valida a existência do cliente pelo ID, verifica a unicidade do email e CPF, normaliza o CPF removendo caracteres não numéricos, e atualiza as informações no banco de dados. Somente usuários autenticados podem acessar este recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: PUT 
```bash
/cliente/:id
```
### Parâmetros da URL
id: (integer) ID do cliente a ser atualizado. Obrigatório.
### Parâmetros da Requisição
A requisição deve conter os seguintes campos no corpo:

- nome: (string) Nome do cliente. Obrigatório.
- email: (string) Endereço de email do cliente. Obrigatório.
- cpf: (string) CPF do cliente. Obrigatório.
- cep: (string) CEP do endereço do cliente. Obrigatório.
- rua: (string) Rua do endereço do cliente. Obrigatório.
- numero: (string) Número do endereço do cliente. Obrigatório.
- bairro: (string) Bairro do endereço do cliente. Obrigatório.
- cidade: (string) Cidade do endereço do cliente. Obrigatório.
- estado: (string) Estado do endereço do cliente. Obrigatório.
#### Corpo da Requisição
Exemplo de corpo da requisição:

Padrão JSON

```bash
{
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "cpf": "123.456.789-00",
    "cep": "12345-678",
    "rua": "Rua Exemplo",
    "numero": "100",
    "bairro": "Centro",
    "cidade": "São Paulo",
    "estado": "SP"
}
```
#### Respostas
Sucesso (200 OK)
- Descrição: Dados do cliente atualizados com sucesso.
- Corpo da resposta:
```bash
{
    "id": 1,
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "cpf": "12345678900",
    "cep": "12345-678",
    "rua": "Rua Exemplo",
    "numero": "100",
    "bairro": "Centro",
    "cidade": "São Paulo",
    "estado": "SP"
}
```
#### Erros
400 Bad Request
- Condição: O email ou CPF informado já está em uso por outro cliente.
- Corpo da resposta:
```bash
{
    "mensagem": "O e-mail informado já está sendo utilizado por outro usuário."
}
```
ou
```bash
{
    "mensagem": "O CPF informado já está sendo utilizado por outro usuário."
}
```
- Condição: O cliente não foi atualizado devido a algum problema interno.

- Corpo da resposta:
```bash
{
    "mensagem": "O cliente não foi atualizado."
}
```
404 Not Found
- Condição: O cliente com o ID fornecido não foi encontrado.
- Corpo da resposta:
```bash
{
    "mensagem": "Cliente não encontrado."
}
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do servidor.",
    "error": "Detalhes do erro"
}
```
### Lógica Interna
- O middleware `validarCorpoRequisicao` valida o corpo da requisição com base no esquema `schemaEditarDadosCliente`, assegurando que todos os campos necessários estão presentes e formatados corretamente.
- Validação de Existência do Cliente: O endpoint verifica se o cliente com o ID fornecido existe no banco de dados.
- Validação de Unicidade de Email e CPF: O endpoint verifica se o email ou CPF já estão em uso por outro cliente.
- Normalização do CPF: O CPF é normalizado para remover caracteres não numéricos antes de ser armazenado.
- Atualização dos Dados: Se todas as validações forem bem-sucedidas, os dados do cliente são atualizados no banco de dados.
### Verificações de Segurança
- Validação de Dados: O email e CPF são verificados para garantir a unicidade, evitando conflitos de dados.
- Normalização de CPF: O CPF é tratado para garantir a consistência dos dados armazenados.

---
## Endpoint: Listar Clientes
### Descrição
Este endpoint permite listar todos os clientes cadastrados no sistema. Ele retorna uma lista de clientes com os campos essenciais: id, nome, email e cpf. Caso nenhum cliente seja encontrado, uma resposta de erro é enviada. Somente usuários autenticados podem acessar este recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: GET 
```bash
/cliente
```
### Parâmetros da Requisição
Este endpoint não requer parâmetros na URL ou no corpo da requisição.

#### Respostas
Sucesso (200 OK)
- Descrição: Lista de clientes retornada com sucesso.
- Corpo da resposta:
```bash
[
    {
        "id": 1,
        "nome": "João Silva",
        "email": "joao.silva@example.com",
        "cpf": "12345678900"
    },
    {
        "id": 2,
        "nome": "Maria Oliveira",
        "email": "maria.oliveira@example.com",
        "cpf": "98765432100"
    }
]
```
#### Erros
404 Not Found
- Condição: Nenhum cliente foi encontrado no banco de dados.
- Corpo da resposta:
```bash
{
    "mensagem": "Nenhum cliente encontrado."
}
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do Servidor."
}
```
### Lógica Interna
- Consulta ao Banco de Dados: O endpoint busca todos os clientes cadastrados, retornando os campos id, nome, email e cpf.
- Validação de Resultados: Se não houver clientes cadastrados, uma resposta 404 é enviada.
- Retorno dos Dados: Se os clientes forem encontrados, a lista é retornada com uma resposta 200.
### Varificações de Segurança
- Validação de Resultados: O retorno 404 para consultas vazias evita a exposição de informações desnecessárias.

---
## Endpoint: Detalhar Cliente
### Descrição
Este endpoint permite obter os detalhes de um cliente específico, utilizando o ID como parâmetro de pesquisa. Retorna todas as informações do cliente armazenadas no banco de dados. Somente usuários autenticados podem acessar este recurso.

### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### URL
Método: GET 
```bash
/clientes/:id
```
### Parâmetros da URL
id (obrigatório): O ID do cliente deve ser declarado na url.

#### Respostas
Sucesso (200 OK)
- Descrição: Detalhes do cliente retornados com sucesso.
- Corpo da resposta:
```bash
{
    "id": 1,
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "cpf": "12345678900",
    "cep": "12345-678",
    "rua": "Rua Exemplo",
    "numero": "123",
    "bairro": "Centro",
    "cidade": "São Paulo",
    "estado": "SP"
}
```
#### Erros
404 Not Found
- Condição: Nenhum cliente foi encontrado com o ID fornecido.
- Corpo da resposta:
```bash
{
    "mensagem": "Cliente não encontrado."
}
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do servidor."
}
```
### Lógica Interna
- Busca no Banco de Dados: O endpoint busca no banco de dados o cliente com o ID especificado. Se o cliente não for encontrado, uma resposta 404 é enviada.
- Retorno dos Dados: Se o cliente for encontrado, suas informações são retornadas com uma resposta 200.
### Verificações de Segurança
- Autenticação JWT: Somente usuários autenticados podem acessar o endpoint.
- Validação de Resultados: A resposta 404 garante que dados inexistentes não sejam expostos.

---
## Endpoint: Cadastrar Pedido
### Descrição
Este endpoint permite cadastrar um novo pedido para um cliente. O pedido deve conter ao menos um produto vinculado. A quantidade disponível em estoque é verificada antes da confirmação do pedido, e o estoque é atualizado após o cadastro. Somente usuários autenticados podem acessar este recurso.

### URL
Método: POST 
```bash
/pedido
```
### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### Parâmetros da Requisição
- cliente_id (obrigatório): ID do cliente associado ao pedido.
- observacao (opcional): Observações sobre o pedido.
- pedido_produtos (obrigatório): Array de objetos contendo os produtos do pedido.
- produto_id (obrigatório): ID do produto.
- quantidade_produto (obrigatório): Quantidade do produto no pedido.
#### Corpo da Requisição
Exemplo de corpo da requisição:
```bash
{
    "cliente_id": 1,
    "observacao": "Entrega rápida, por favor.",
    "pedido_produtos": [
        {
            "produto_id": 2,
            "quantidade_produto": 3
        },
        {
            "produto_id": 4,
            "quantidade_produto": 1
        }
    ]
}
```
#### Respostas
Sucesso (201 Created)
- Descrição: Pedido cadastrado com sucesso.
- Corpo da resposta:
```bash
{
    "id": 1,
    "cliente_id": 1,
    "observacao": "Entrega rápida, por favor.",
    "valor_total": 150.00
}
```
#### Erros
400 Bad Request
- Condição: Não foi fornecido o cliente_id ou pedido_produtos está vazio.
- Corpo da resposta:
```bash
{
    "mensagem": "Cliente_id é obrigatório."
}
```
ou
```bash
{
    "mensagem": "É necessário adicionar ao menos um produto ao pedido."
}
```
404 Not Found
- Condição: O cliente ou produto associado não foi encontrado.
- Corpo da resposta:
```bash
{
    "mensagem": "Cliente não encontrado."
}
```
ou
```bash
{
    "mensagem": "Produto com ID 2 não encontrado."
}
```
400 Bad Request
- Condição: Quantidade de produto solicitada maior que a disponível em estoque.
- Corpo da resposta:
```bash
{
    "mensagem": "Quantidade insuficiente em estoque para o produto Exemplo. Disponível: 2. Solicitado: 3."
}
```
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do servidor."
}
```
### Lógica Interna
- Autenticação: O token JWT fornecido no cabeçalho da requisição é validado. Se o token for inválido ou não fornecido, a requisição é rejeitada com uma resposta 401.
- Validação de Dados: Verifica se o cliente_id e pedido_produtos foram fornecidos e se o cliente existe no banco de dados.
- Verificação de Estoque: Para cada produto no pedido, verifica-se a quantidade disponível em estoque. Se a quantidade solicitada for maior que a disponível, a requisição falha.
- Cadastro do Pedido: O pedido é cadastrado, e a tabela de relacionamento entre pedido e produtos (pedido_produtos) é populada.
- Atualização do Estoque: O estoque dos produtos é atualizado com base nas quantidades solicitadas no pedido.
- Retorno de Resposta: Se o pedido for cadastrado com sucesso, o endpoint retorna os detalhes do pedido.
### Verificações de Segurança
- Autenticação JWT: Somente usuários autenticados podem acessar o endpoint.
- Validação de Resultados: O retorno 404 para consultas vazias evita a exposição de informações desnecessárias.

---
## Endpoint: Listar Pedidos
### Descrição
Este endpoint permite listar todos os pedidos cadastrados na base de dados. O usuário pode filtrar os pedidos por cliente utilizando o parâmetro de consulta cliente_id. Caso o parâmetro não seja fornecido, todos os pedidos serão retornados. Somente usuários autenticados podem acessar este recurso.

### URL
Método: GET
```bash
/pedido
```
### Autenticação
Este endpoint requer autenticação via token JWT (JSON Web Token).

### Parâmetros da Requisição
cliente_id: (string, opcional) ID do cliente para filtrar os pedidos associados a ele. Se não fornecido, todos os pedidos serão retornados.
#### Respostas
Sucesso (200 OK)
- Descrição: Lista de pedidos com detalhes dos produtos incluídos.
- Corpo da resposta:
```bash
[
    {
        "pedido": {
            "id": 1,
            "valor_total": 250.00,
            "observacao": "Observação do pedido",
            "cliente_id": 123
        },
        "pedido_produtos": [
            {
                "id": 1,
                "quantidade_produto": 2,
                "valor_produto": 100.00,
                "pedido_id": 1,
                "produto_id": 456
            }
        ]
    }
]
```
#### Erros
500 Internal Server Error
- Condição: Erro inesperado no servidor.
- Corpo da resposta:
```bash
{
    "mensagem": "Erro interno do servidor."
}
```
### Lógica Interna
- Construção da Query: A query inicial é montada para obter pedidos e seus produtos relacionados. Se o parâmetro cliente_id for fornecido, a query é ajustada para filtrar pelos pedidos desse cliente.
- Agrupamento dos Dados: Os dados retornados pela query são agrupados por pedido. Cada pedido inclui detalhes e uma lista de produtos associados.
- Conversão de Tipos: O valor total do pedido e o valor dos produtos são convertidos para o tipo float para garantir precisão no cálculo.
### Critérios de Aceite
- Filtragem por Cliente: Se o parâmetro cliente_id for enviado e corresponder a um cliente existente, a lista de pedidos será filtrada para mostrar apenas os pedidos desse cliente.
- Listagem Completa: Se o parâmetro cliente_id não for informado, todos os pedidos cadastrados serão retornados.
### Verificações de Segurança
- Autenticação e Autorização: O endpoint deve ser protegido para garantir que apenas usuários autenticados possam acessar as informações de pedidos. Isso pode ser feito verificando o token JWT na requisição e garantindo que o usuário tenha permissões adequadas para visualizar os pedidos.
- Validação de Parâmetros: O parâmetro cliente_id é opcional e a ausência dele resulta na listagem de todos os pedidos. A inclusão de cliente_id é tratada na lógica da query.
- Tratamento de Erros: Erros durante a execução da query são capturados e uma resposta genérica de erro 500 é retornada. Nenhuma informação sensível é exposta nos erros.
- Proteção contra Injeção de SQL: A biblioteca Knex é utilizada para construir as consultas de forma segura, minimizando o risco de injeção de SQL.
- Paginação: Se a lista de pedidos for muito grande, considere implementar a paginação para melhorar o desempenho e a usabilidade.

---
## Contribuições
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver ideias para melhorar o sistema, sinta-se à vontade para abrir um pull request ou discutir suas sugestões na seção de issues do GitHub. A colaboração de todos é fundamental para aprimorar e garantir a qualidade desta API.

