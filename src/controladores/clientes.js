const knex = require('../conexao');

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    function normalizarCpf(cpf) {
        return cpf.replace(/\D/g, '');
    };

    const cpfNormalizado = normalizarCpf(cpf);
    try {
        const emailExistente = await knex('clientes').where({ email }).first();
        if (emailExistente) {
            return res.status(400).json({ mensagem: 'O email já está em uso por outro cliente.' });
        };

        const cpfExistente = await knex('clientes').where({ cpf }).first();
        if (cpfExistente) {
            return res.status(400).json({ mensagem: 'O CPF já está em uso por outro cliente.' });
        };

        const cliente = await knex('clientes').insert({ nome, email, cpf: cpfNormalizado, cep, rua, numero, bairro, cidade, estado }).returning('*');
        if (!cliente) {
            return res.status(400).json({ mensagem: 'O cliente não foi cadastrado.' });
        };

        return res.status(201).json(cliente[0]);

    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ mensagem: 'O CPF já está em uso por outro cliente.' });
        };
        return res.status(500).json({ mensagem: 'Erro interno do Servidor' });
    };
};

const editarDadosCliente = async (req, res) => {
    const { id } = req.params;
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    function normalizarCpf(cpf) {
        return cpf.replace(/\D/g, '');
    };

    const cpfNormalizado = normalizarCpf(cpf);

    try {

        const clienteExistente = await knex('clientes').where('id', id).first();
        if (!clienteExistente) {
            return res.status(404).json({ mensagem: "Cliente não encontrado." });
        };

        const emailVerificado = await knex('clientes')
            .where('email', email)
            .andWhere('id', '!=', id)
            .first();
        if (emailVerificado) {
            return res.status(400).json({ mensagem: "O e-mail informado já está sendo utilizado por outro usuário." });
        };

        const cpfVerificado = await knex('clientes')
            .where('cpf', cpf)
            .andWhere('id', '!=', id)
            .first();
        if (cpfVerificado) {
            return res.status(400).json({ mensagem: "O CPF informado já está sendo utilizado por outro usuário." });
        };

        const clienteAtualizado = await knex('clientes')
            .where('id', id)
            .update({ nome, email, cpf: cpfNormalizado, cep, rua, numero, bairro, cidade, estado })
            .returning('*');

        if (!clienteAtualizado || clienteAtualizado.length === 0) {
            return res.status(400).json({ mensagem: 'O cliente não foi atualizado.' });
        };

        return res.status(200).json(clienteAtualizado[0]);

    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ mensagem: 'O CPF já está em uso por outro cliente.' });
        }
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', error: error.message });
    };
};

const listarClientes = async (req, res) => {

    try {
        const clientes = await knex('clientes').select('id', 'nome', 'email', 'cpf');
        if (!clientes.length) {
            return res.status(404).json({ mensagem: "Nenhum cliente encontrado." });
        };

        return res.status(200).json(clientes);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor' });
    };
};

const detalharClientePorId = async (req, res) => {
    const { id } = req.params;

    try {
        const cliente = await knex('clientes').where('id', id).first();
        if (!cliente) {
            return res.status(404).json({ mensagem: "Cliente não encontrado." });
        };

        return res.status(200).json(cliente);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

module.exports = {
    cadastrarCliente,
    editarDadosCliente,
    listarClientes,
    detalharClientePorId
};