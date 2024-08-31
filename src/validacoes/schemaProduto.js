const Joi = require('joi');

const schemaCadastrarProduto = Joi.object({
    descricao: Joi.string().required().messages({
        'string.empty': 'Descrição é obrigatória.'
    }),
    quantidade_estoque: Joi.number().integer().min(1).required().messages({
        'number.base': 'Quantidade em estoque deve ser um número.',
        'number.min': 'Quantidade em estoque deve ser maior que zero.',
        'any.required': 'Quantidade em estoque é obrigatória.'
    }),
    valor: Joi.number().positive().required().messages({
        'number.base': 'Valor deve ser um número.',
        'number.positive': 'Valor deve ser positivo.',
        'any.required': 'Valor é obrigatório.'
    }),
    categoria_id: Joi.number().integer().required().messages({
        'number.base': 'ID da categoria deve ser um número.',
        'any.required': 'ID da categoria é obrigatório.'
    })
});

const schemaEditarProduto = Joi.object({
    descricao: Joi.string().required().messages({
        'string.empty': 'Descrição é obrigatória.'
    }),
    quantidade_estoque: Joi.number().integer().min(1).required().messages({
        'number.base': 'Quantidade em estoque deve ser um número.',
        'number.min': 'Quantidade em estoque deve ser maior que zero.',
        'any.required': 'Quantidade em estoque é obrigatória.'
    }),
    valor: Joi.number().positive().required().messages({
        'number.base': 'Valor deve ser um número.',
        'number.positive': 'Valor deve ser positivo.',
        'any.required': 'Valor é obrigatório.'
    }),
    categoria_id: Joi.number().integer().required().messages({
        'number.base': 'ID da categoria deve ser um número.',
        'any.required': 'ID da categoria é obrigatório.'
    })
});

const schemaListarProduto = Joi.object({
    categoria_id: Joi.number().integer().positive().optional().messages({
        'number.base': 'ID da categoria deve ser um número.',
        'number.integer': 'ID da categoria deve ser um número inteiro.',
        'number.positive': 'ID da categoria deve ser um número positivo.'
    })
});

module.exports = {
    schemaCadastrarProduto,
    schemaEditarProduto,
    schemaListarProduto
};