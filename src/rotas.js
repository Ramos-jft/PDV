const express = require('express');
const usuarios = require('./controladores/usuarios');
const categorias = require('./controladores/categorias');
const produtos = require('./controladores/produtos');
const clientes = require('./controladores/clientes');
const pedidos = require('./controladores/pedidos');
const validarToken = require('./intermediarios/validarToken');
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao');
const { schemaCadastrar, schemaLogin, schemaRedefinirSenha, schemaEditarUsuarioLogado } = require('./validacoes/schemaUsuario');
const { schemaCadastrarProduto, schemaEditarProduto, schemaListarProduto } = require('./validacoes/schemaProduto');
const { schemaCadastroCliente, schemaEditarDadosCliente } = require('./validacoes/schemaCliente');
const multer = require('multer');
const upload = multer();

const rotas = express();

rotas.get('/categoria', categorias.listarCategorias);

rotas.post('/usuario', validarCorpoRequisicao(schemaCadastrar), usuarios.cadastrarUsuario);
rotas.post('/login', validarCorpoRequisicao(schemaLogin), usuarios.loginUsuario);
rotas.patch('/usuario/redefinir', validarCorpoRequisicao(schemaRedefinirSenha), usuarios.redefinirSenha);

rotas.use(validarToken);

rotas.get('/usuario', usuarios.detalharUsuario);
rotas.put('/usuario', validarCorpoRequisicao(schemaEditarUsuarioLogado), usuarios.editarUsuarioLogado);

rotas.post('/produto', validarCorpoRequisicao(schemaCadastrarProduto), produtos.cadastrarProduto);
rotas.put('/produto/:id', validarCorpoRequisicao(schemaEditarProduto), produtos.editarProduto);
rotas.get('/produto', validarCorpoRequisicao(schemaListarProduto), produtos.listarProduto);
rotas.get('/produto/:id', produtos.detalharProduto);
rotas.delete('/produto/:id', produtos.excluirProduto);
rotas.patch('/produto/:id/imagem', upload.single('imagem'), produtos.uploadImagem);

rotas.post('/cliente', validarCorpoRequisicao(schemaCadastroCliente), clientes.cadastrarCliente);
rotas.put('/cliente/:id', validarCorpoRequisicao(schemaEditarDadosCliente), clientes.editarDadosCliente);
rotas.get('/cliente', clientes.listarClientes);
rotas.get('/cliente/:id', clientes.detalharClientePorId);

rotas.post('/pedido', pedidos.cadastrarPedido);
rotas.get('/pedido', pedidos.listarPedido);

module.exports = rotas;