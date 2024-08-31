const bcrypt = require('bcrypt');
const knex = require('../conexao');
const jwt = require('jsonwebtoken');
const transportador = require("../intermediarios/nodemailer");

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const usuarioExistente = await knex('usuarios').where({ email }).first();

        if (usuarioExistente) {
            return res.status(400).json({ mensagem: 'O email já existe.' });
        };

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const usuario = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada }).returning('*');

        if (!usuario) {
            return res.status(400).json({ mensagem: 'O usuário não foi cadastrado.' });
        };

        return res.status(201).json(usuario[0]);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await knex('usuarios').where({ email }).first();

        if (!usuario) {
            return res.status(404).json({ mensagem: 'O usuario não foi encontrado.' });
        };

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json({ mensagem: 'Email ou senha não confere.' });
        };

        const token = jwt.sign({ id: usuario.id }, process.env.SENHA_JWT, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};

const redefinirSenha = async (req, res) => {
    const { email, senha_antiga, senha_nova } = req.body;

    if (senha_antiga === senha_nova) {
        return res.status(400).json({ mensagem: 'A senha nova não pode ser igual à senha antiga.' });
    };

    try {
        const usuario = await knex('usuarios').where({ email }).first();

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        };

        const senhaCorreta = await bcrypt.compare(senha_antiga, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: 'Senha antiga incorreta.' });
        };

        const nomeusuario = usuario.nome;

        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Alteração de Senha</title>
            </head>
            <body>
                <h1 style="color: blue;">${nomeusuario}, sua senha foi alterada com sucesso!</h1>
                <p>Se não foi você, realize a troca da sua senha!</p>
            </body>
            </html>
        `;

        const novaSenhaHash = await bcrypt.hash(senha_nova, 10);
        await knex('usuarios').where({ id: usuario.id }).update({ senha: novaSenhaHash });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Alteração de Senha PDV',
            html

        };

        transportador.sendMail(mailOptions);

        res.status(200).json({ mensagem: 'Senha alterada com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};

const detalharUsuario = async (req, res) => {
    try {

        const { id, nome, email } = req.usuario;

        return res.status(201).json({ id, nome, email });

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};

const editarUsuarioLogado = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.usuario;

    try {

        const emailExistente = await knex('usuarios').where('email', email).andWhereNot('id', id).first();

        if (emailExistente) {
            return res.status(400).json({ mensagem: 'O e-mail informado já está sendo utilizado por outro usuário.' });
        };

        const usuario = await knex('usuarios').where('id', id).first();

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        };

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ mensagem: 'Senha incorreta.' });
        };

        await knex('usuarios').where('id', id).update({ nome, email });

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};


module.exports = {
    cadastrarUsuario,
    loginUsuario,
    redefinirSenha,
    detalharUsuario,
    editarUsuarioLogado
};