const knex = require('../conexao');
const { uploadFile, excluirImagem, s3 } = require('../storage');

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body

    try {

        const categoria = await knex('categorias').where({ id: categoria_id }).first();

        if (!categoria) {
            return res.status(404).json({ mensagem: 'Categoria não encontrada.' });
        };

        const [produto] = await knex('produtos')
            .insert({ descricao, quantidade_estoque, valor, categoria_id })
            .returning('*');

        return res.status(201).json(produto);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};

const editarProduto = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        const produto = await knex('produtos').where({ id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        };

        const categoria = await knex('categorias').where({ id: categoria_id }).first();
        if (!categoria) {
            return res.status(404).json({ mensagem: 'Categoria não encontrada.' });
        };

        const [atualizarProduto] = await knex('produtos')
            .where({ id })
            .update({ descricao, quantidade_estoque, valor, categoria_id })
            .returning('*');

        return res.status(200).json(atualizarProduto);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};

const listarProduto = async (req, res) => {
    const { categoria_id } = req.query

    try {
        if (categoria_id) {
            const categoria = await knex('categorias').where({ id: categoria_id }).first();
            if (!categoria) {
                return res.status(404).json({ mensagem: 'Categoria não encontrada.' });
            };

            const produtos = await knex('produtos').where({ categoria_id });
            return res.status(200).json(produtos);
        } else {
            const produtos = await knex('produtos');
            return res.status(200).json(produtos);
        };

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

const detalharProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({ id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        };

        return res.status(200).json(produto);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

const excluirProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({ id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        };

        const pedidoProduto = await knex('pedido_produtos').where({ produto_id: id }).first();
        if (pedidoProduto) {
            return res.status(400).json({ mensagem: 'Não é possível excluir um produto que está vinculado a um pedido.' });
        };

        const { imagem_url } = produto;

        if (imagem_url) {
            const key = imagem_url.split('/').pop();

            const params = {
                Bucket: process.env.SUPABASE_BUCKET,
                Key: key
            };

            try {
                await s3.deleteObject(params).promise();
            } catch (error) {
                return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
            };
        };

        await knex('produtos').where({ id }).del();

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

const uploadImagem = async (req, res) => {

    const { file } = req;

    if (!file && Object.keys(req.body).length === 0) {
        return res.status(404).json({ mensagem: 'Nenhuma informação fornecida.' });
    };

    const { id } = req.params;

    try {

        const produto = await knex('produtos').where({ id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        };

        if (!file && !produto.imagem_url) {
            return res.status(200).json({
                mensagem: 'A imagem do produto já está atualizada.',
                imagem_url: null
            });
        };

        if (file) {
            const arquivo = await uploadFile(
                file.originalname,
                file.buffer,
                file.mimetype
            );

            if (produto.imagem_url) {
                const keyAntiga = produto.imagem_url.split('/').pop();
                await excluirImagem(keyAntiga);
            };

            await knex('produtos')
                .where({ id })
                .update({
                    imagem_url: arquivo.url
                });

            req.imagem = arquivo.url;

            return res.status(201).json({ mensagem: 'Imagem carregada com sucesso!', imagem_url: arquivo.url });

        } else {
            if (produto.imagem_url) {
                const keyAntiga = produto.imagem_url.split('/').pop();
                await excluirImagem(keyAntiga);

                await knex('produtos')
                    .where({ id })
                    .update({
                        imagem_url: null
                    });

                return res.status(200).json({
                    mensagem: 'Imagem antiga removida com sucesso!',
                    imagem_url: null
                });
            }
        }

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do Servidor.' });
    };
};


module.exports = {
    cadastrarProduto,
    editarProduto,
    listarProduto,
    detalharProduto,
    excluirProduto,
    uploadImagem
};