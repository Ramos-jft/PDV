const knex = require('../conexao');

const cadastrarPedido = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body;

    try {
        if (!cliente_id) {
            return res.status(404).json({ mensagem: 'Cliente_id é obrigatório.' });
        };

        const cliente = await knex('clientes').where({ id: cliente_id }).first();
        if (!cliente) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
        };

        if (!pedido_produtos || pedido_produtos.length === 0) {
            return res.status(400).json({ mensagem: 'É necessário adicionar ao menos um produto ao pedido.' });
        };

        let valorTotalPedido = 0;

        for (const produtoPedido of pedido_produtos) {
            const produto = await knex('produtos').where({ id: produtoPedido.produto_id }).first();
            if (!produto) {
                return res.status(404).json({ mensagem: `Produto com ID ${produtoPedido.produto_id} não encontrado.` });
            };

            if (produto.quantidade_estoque < produtoPedido.quantidade_produto) {
                return res.status(400).json({
                    mensagem: `Quantidade insuficiente em estoque para o produto ${produto.descricao}. Disponível: ${produto.quantidade_estoque}. Solicitado: ${produtoPedido.quantidade_produto}.`
                });
            };

            const valorProduto = produto.valor * produtoPedido.quantidade_produto;
            produtoPedido.valor_produto = valorProduto;
            valorTotalPedido += valorProduto;
        }

        const [novoPedido] = await knex('pedidos')
            .insert({
                cliente_id,
                observacao,
                valor_total: valorTotalPedido
            })
            .returning('*');

        for (const produtoPedido of pedido_produtos) {
            await knex('pedido_produtos').insert({
                pedido_id: novoPedido.id,
                produto_id: produtoPedido.produto_id,
                quantidade_produto: produtoPedido.quantidade_produto,
                valor_produto: produtoPedido.valor_produto
            });

            await knex('produtos')
                .where({ id: produtoPedido.produto_id })
                .decrement('quantidade_estoque', produtoPedido.quantidade_produto);
        }

        return res.status(201).json(novoPedido);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

const listarPedido = async (req, res) => {
    const { cliente_id } = req.query;

    try {

        let query = knex('pedidos')
            .join('pedido_produtos', 'pedidos.id', '=', 'pedido_produtos.pedido_id')
            .join('produtos', 'produtos.id', '=', 'pedido_produtos.produto_id')
            .select(
                'pedidos.id as pedido_id',
                'pedidos.valor_total',
                'pedidos.observacao',
                'pedidos.cliente_id',
                'pedido_produtos.id as pedido_produto_id',
                'pedido_produtos.quantidade_produto',
                'pedido_produtos.valor_produto',
                'pedido_produtos.produto_id'
            );

        if (cliente_id) {
            query = query.where('pedidos.cliente_id', cliente_id);
        };

        const pedidos = await query;

        if (pedidos.length === 0) {
            return res.status(404).json({ mensagem: 'Não existe pedido para este cliente' });
        }

        const pedidosAgrupados = pedidos.reduce((acc, pedido) => {
            const { pedido_id, valor_total, observacao, cliente_id, pedido_produto_id, quantidade_produto, valor_produto, produto_id } = pedido;

            if (!acc[pedido_id]) {
                acc[pedido_id] = {
                    pedido: {
                        id: pedido_id,
                        valor_total: parseFloat(valor_total),
                        observacao,
                        cliente_id
                    },
                    pedido_produtos: []
                };
            };

            acc[pedido_id].pedido_produtos.push({
                id: pedido_produto_id,
                quantidade_produto,
                valor_produto: parseFloat(valor_produto),
                pedido_id,
                produto_id
            });

            return acc;
        }, {});

        const resultadoFinal = Object.values(pedidosAgrupados);

        return res.status(200).json(resultadoFinal);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

module.exports = {
    cadastrarPedido,
    listarPedido
};