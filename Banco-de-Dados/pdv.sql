create database pdv;
 
create table usuarios (
     id serial primary key,
     nome text not null,
  email text unique,
  senha text not null
);

create table categorias (
    id serial primary key,
  descricao text
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    categoria_id INTEGER REFERENCES categorias(id)
);

ALTER TABLE produtos
ADD COLUMN imagem_url text;

CREATE TABLE clientes (
  id SERIAL PRIMARY key,
  nome TEXT NOT NULL,
  email varchar(50) UNIQUE NOT NULL,
  cpf varchar(14) UNIQUE NOT NULL,
  cep TEXT,
    rua TEXT,
    numero TEXT,
    bairro TEXT,
    cidade TEXT,
    estado TEXT
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id),
    observacao TEXT,
    valor_total DECIMAL(10, 2) NOT NULL
);

CREATE TABLE pedido_produtos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES produtos(id),
    quantidade_produto INTEGER NOT NULL,
    valor_produto DECIMAL(10, 2) NOT NULL
);